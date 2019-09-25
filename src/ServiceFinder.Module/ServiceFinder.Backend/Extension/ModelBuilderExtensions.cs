using Microsoft.EntityFrameworkCore;
using ServiceFinder.DI.Backend;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace ServiceFinder.Backend.Extension
{
    public static class ModelBuilderExtensions 
    {
        public static void AddEntityConfigurationsFromAssembly(this ModelBuilder modelBuilder, Assembly assembly)
        {
            MethodInfo applyMethod = modelBuilder.getApplyConfigurationMethod();

            foreach (Type entityTypeConfiguration in getMappingTypes(assembly, typeof(IEntityTypeConfiguration<>)))
            {
                Type configInterface = entityTypeConfiguration.GetInterfaces().SingleOrDefault(iface => iface.IsConstructedGenericType && iface.GetGenericTypeDefinition() == typeof(IEntityTypeConfiguration<>));
                MethodInfo applyGenericMethod = applyMethod.MakeGenericMethod(configInterface.GenericTypeArguments[0]);

                applyGenericMethod.Invoke(modelBuilder, new object[] { Activator.CreateInstance(entityTypeConfiguration) });
            }
        }

        private static IEnumerable<Type> getMappingTypes(this Assembly assembly, Type mappingInterface)
        {
            return assembly.GetTypes().Where(x => !x.GetTypeInfo().IsAbstract
                                                  && x.GetInterfaces().Any(y => y.GetTypeInfo().IsGenericType && y.GetGenericTypeDefinition() == mappingInterface));
        }

        private static MethodInfo getApplyConfigurationMethod(this ModelBuilder modelBuilder)
        {
            return modelBuilder.GetType().GetMethods().SingleOrDefault(method => method.Name == "ApplyConfiguration"
              && method.IsGenericMethod
              && method.IsPublic
              && method.GetGenericArguments().Any(arg => arg.Name == "TEntity"));
        }
    }
}
