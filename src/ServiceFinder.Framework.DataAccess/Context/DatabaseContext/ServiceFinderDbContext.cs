using System;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using TAM.Framework.Model.Models.AccountManagement;
using ServiceFinder.Framework.DataAccess.Extensions;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using ServiceFinder.Framework.Model.Entity.UserDashboard;

namespace TAM.Framework.DataAccess.Contexts.AccountManagement
{
	public class ServiceFinderDbContext : IdentityDbContext<ApplicationUserEntity>
	{
		public ServiceFinderDbContext(DbContextOptions<ServiceFinderDbContext> options) : base(options)
		{ }

		public virtual DbSet<CategoryEntity> categories { get; set; }
		public virtual DbSet<ServiceItemEntity> serviceItems { get; set; }
		public virtual DbSet<ApplicationUserEntity> applicationUsers { get; set; }
		public virtual DbSet<ServiceItemImageEntity> serviceItemImages { get; set; }
        public DbQuery<CategoryAndServiceItemViewModel> CategoryAndServiceItemViewModel { get; set; }
        public virtual DbSet<ServiceReviewEntity> serviceReview{ get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
		{
			//Seed default User Roles
			builder.Entity<IdentityRole>().HasData(
				new IdentityRole { Name = "admin", NormalizedName = "admin".ToUpper() },
				new IdentityRole { Name = "user", NormalizedName = "user".ToUpper() });

			//Seed default Categories
			builder.Entity<CategoryEntity>().HasData(
			new CategoryEntity { Id = 1, Name = "Hospitality", CreationDate = DateTime.Now },
			new CategoryEntity { Id = 2, Name = "Travel", CreationDate = DateTime.Now },
			new CategoryEntity { Id = 3, Name = "Transportation", CreationDate = DateTime.Now },
			new CategoryEntity { Id = 4, Name = "Media", CreationDate = DateTime.Now },
			new CategoryEntity { Id = 5, Name = "Entertainment", CreationDate = DateTime.Now });

			//Seed default ServiceItems
			builder.Entity<ServiceItemEntity>().HasData(
			new ServiceItemEntity { Id = 1, CategoryId = 1, Name = "Hospitality Service 1", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 2, CategoryId = 1, Name = "Hospitality Service 2", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 3, CategoryId = 1, Name = "Hospitality Service 3", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 4, CategoryId = 1, Name = "Hospitality Service 4", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 5, CategoryId = 1, Name = "Hospitality Service 5", CreationDate = DateTime.Now });

			builder.Entity<ServiceItemEntity>().HasData(
			new ServiceItemEntity { Id = 6, CategoryId = 2, Name = "Travel Service 1", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 7, CategoryId = 2, Name = "Travel Service 2", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 8, CategoryId = 2, Name = "Travel Service 3", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 9, CategoryId = 2, Name = "Travel Service 4", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 10, CategoryId = 2, Name = "Travel Service 5", CreationDate = DateTime.Now });

			builder.Entity<ServiceItemEntity>().HasData(
			new ServiceItemEntity { Id = 11, CategoryId = 3, Name = "Transportation Service 1", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 12, CategoryId = 3, Name = "Transportation Service 2", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 13, CategoryId = 3, Name = "Transportation Service 3", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 14, CategoryId = 3, Name = "Transportation Service 4", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 15, CategoryId = 3, Name = "Transportation Service 5", CreationDate = DateTime.Now });

			builder.Entity<ServiceItemEntity>().HasData(
			new ServiceItemEntity { Id = 16, CategoryId = 4, Name = "Media Service 1", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 17, CategoryId = 4, Name = "Media Service 2", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 18, CategoryId = 4, Name = "Media Service 3", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 19, CategoryId = 4, Name = "Media Service 4", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 20, CategoryId = 4, Name = "Media Service 5", CreationDate = DateTime.Now });

			builder.Entity<ServiceItemEntity>().HasData(
			new ServiceItemEntity { Id = 21, CategoryId = 5, Name = "Entertainment Service 1", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 22, CategoryId = 5, Name = "Entertainment Service 2", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 23, CategoryId = 5, Name = "Entertainment Service 3", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 24, CategoryId = 5, Name = "Entertainment Service 4", CreationDate = DateTime.Now },
			new ServiceItemEntity { Id = 25, CategoryId = 5, Name = "Entertainment Service 5", CreationDate = DateTime.Now });

			builder.AddEntityConfigurationsFromAssembly(this.GetType().GetTypeInfo().Assembly);
			base.OnModelCreating(builder);
		}
	}
}
