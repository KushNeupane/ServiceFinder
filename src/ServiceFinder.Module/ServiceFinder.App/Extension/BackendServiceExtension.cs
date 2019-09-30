using Microsoft.Extensions.DependencyInjection;
using ServiceFinder.DI.Services.App;
using ServiceFinder.Main.Service;

namespace ServiceFinder.Backend.Extension
{
    public static class BackendServiceExtension
    {
        public static void AddBackendServices(this IServiceCollection services)
        {
            services.AddTransient<ICategoryService, CategoryService>();
            services.AddTransient<IObjectService, ObjectService>();
            services.AddTransient<ICityService, CityService>();
        }
    }
}
