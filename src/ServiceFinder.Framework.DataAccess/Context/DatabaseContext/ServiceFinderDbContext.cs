using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.Framework.DataAccess.Extensions;
using ServiceFinder.Framework.Model.Entity.AdminDashboard;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using System;
using System.Collections.Generic;
using System.Reflection;
using TAM.Framework.Model.Models.AccountManagement;

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
        public virtual DbSet<ServiceReviewEntity> serviceReview { get; set; }
        public virtual DbSet<CityEntity> city { get; set; }
        public virtual DbSet<Question> question { get; set; }
        public virtual DbSet<Answer> answer { get; set; }
        public virtual DbSet<SubscriberEntity> subscriber { get; set; }
        public virtual DbSet<ServiceItemViewLog> serviceItemViewLog { get; set; }
        public DbQuery<ServiceVisitViewModel> ServiceVisitView { get; set; }
        public DbQuery<AdvancedSearchViewModel> advancedSearch { get; set; }
        public DbQuery<ServicesByCategoryAndUserNameViewModel> getServicesAndUserByCategory { get; set; }
        public DbQuery<QuestionAndAnswerViewModel> getQuestionsByServiceItemId { get; set; }
        public DbQuery<servicesViewModel> getSevices { get; set; }
        public DbQuery<AnswerViewModel> getAnswers { get; set; }

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

            //Seed default Cities
            builder.Entity<CityEntity>().HasData(
                new CityEntity { Id = 1, Name = "Kathmandu", Province = "3", CreatedOn = DateTime.Now },
                new CityEntity { Id = 2, Name = "Pokhara", Province = "Gandaki", CreatedOn = DateTime.Now },
                new CityEntity { Id = 3, Name = "Lalitpur", Province = "3", CreatedOn = DateTime.Now },
                new CityEntity { Id = 4, Name = "Biratnagar", Province = "1", CreatedOn = DateTime.Now },
                new CityEntity { Id = 5, Name = "Birjung", Province = "2", CreatedOn = DateTime.Now },
                new CityEntity { Id = 6, Name = "Bharatpur", Province = "3", CreatedOn = DateTime.Now },
                new CityEntity { Id = 7, Name = "Dharan", Province = "1", CreatedOn = DateTime.Now },
                new CityEntity { Id = 8, Name = "Butwal", Province = "5", CreatedOn = DateTime.Now },
                new CityEntity { Id = 9, Name = "Janakpur", Province = "2", CreatedOn = DateTime.Now },
                new CityEntity { Id = 10, Name = "Dhangadhi", Province = "Sudurpashchim", CreatedOn = DateTime.Now },
                new CityEntity { Id = 11, Name = "Bhaktapur", Province = "3", CreatedOn = DateTime.Now },                
                new CityEntity { Id = 12, Name = "Nepalgunj", Province = "5", CreatedOn = DateTime.Now },
                new CityEntity { Id = 13, Name = "Hetauda", Province = "3", CreatedOn = DateTime.Now },
                new CityEntity { Id = 14, Name = "Itahari", Province = "1", CreatedOn = DateTime.Now },
                new CityEntity { Id = 15, Name = "Banepa", Province = "3", CreatedOn = DateTime.Now },
                new CityEntity { Id = 16, Name = "Dhulikhel", Province = "3", CreatedOn = DateTime.Now },
                new CityEntity { Id = 17, Name = "Baglung", Province = "Gandaki", CreatedOn = DateTime.Now });

            //Seed default ServiceItems
            builder.Entity<ServiceItemEntity>().HasData(
            new ServiceItemEntity { Id = 1, CategoryId = 1, CityId = 1, Name = "Hospitality Service 1", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 2, CategoryId = 1, CityId = 2, Name = "Hospitality Service 2", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 3, CategoryId = 1, CityId = 3, Name = "Hospitality Service 3", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 4, CategoryId = 1, CityId = 4, Name = "Hospitality Service 4", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 5, CategoryId = 1, CityId = 5, Name = "Hospitality Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemEntity>().HasData(
            new ServiceItemEntity { Id = 6, CategoryId = 2, CityId = 6, Name = "Travel Service 1", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 7, CategoryId = 2, CityId = 7, Name = "Travel Service 2", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 8, CategoryId = 2, CityId = 8, Name = "Travel Service 3", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 9, CategoryId = 2, CityId = 9, Name = "Travel Service 4", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 10, CategoryId = 2, CityId = 10, Name = "Travel Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemEntity>().HasData(
            new ServiceItemEntity { Id = 11, CategoryId = 3, CityId = 11, Name = "Transportation Service 1", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 12, CategoryId = 3, CityId = 12, Name = "Transportation Service 2", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 13, CategoryId = 3, CityId = 13, Name = "Transportation Service 3", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 14, CategoryId = 3, CityId = 14, Name = "Transportation Service 4", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 15, CategoryId = 3, CityId = 15, Name = "Transportation Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemEntity>().HasData(
            new ServiceItemEntity { Id = 16, CategoryId = 4, CityId = 16, Name = "Media Service 1", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 17, CategoryId = 4, CityId = 17, Name = "Media Service 2", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 18, CategoryId = 4, CityId = 1, Name = "Media Service 3", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 19, CategoryId = 4, CityId = 2, Name = "Media Service 4", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 20, CategoryId = 4, CityId = 3, Name = "Media Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemEntity>().HasData(
            new ServiceItemEntity { Id = 21, CategoryId = 5, CityId = 4, Name = "Entertainment Service 1", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 22, CategoryId = 5, CityId = 5, Name = "Entertainment Service 2", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 23, CategoryId = 5, CityId = 6, Name = "Entertainment Service 3", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 24, CategoryId = 5, CityId = 7, Name = "Entertainment Service 4", CreationDate = DateTime.Now },
            new ServiceItemEntity { Id = 25, CategoryId = 5, CityId = 8, Name = "Entertainment Service 5", CreationDate = DateTime.Now });

            builder.AddEntityConfigurationsFromAssembly(this.GetType().GetTypeInfo().Assembly);
            base.OnModelCreating(builder);
        }
    }
}
