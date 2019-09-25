using Microsoft.EntityFrameworkCore;
using Servicefinder.Core.Model;
using ServiceFinder.Core.Extension;
using System;
using System.Reflection;

namespace Servicefinder.Core.DatabaseContext
{
    public class CommonDbContext : DbContext
    {
        public CommonDbContext(DbContextOptions<CommonDbContext> options) : base(options) { }

        public virtual DbSet<CategoryModel> categories { get; set; }
        public virtual DbSet<ServiceItemModel> serviceItems { get; set; }
        public virtual DbSet<ServiceItemImageModel> serviceItemImages { get; set; }
        public virtual DbSet<ServiceReviewModel> serviceReview { get; set; }
        public virtual DbSet<CityModel> city { get; set; }
        public virtual DbSet<QuestionModel> question { get; set; }
        public virtual DbSet<AnswerModel> answer { get; set; }
        public virtual DbSet<SubscriberModel> subscriber { get; set; }
        public virtual DbSet<ServiceItemViewLogModel> ServiceItemViewLogModel { get; set; }


        //public DbQuery<IServiceVisitViewModel> ServiceVisitView { get; set; }
        //public DbQuery<IAdvancedSearchViewModel> advancedSearch { get; set; }
        //public DbQuery<IServicesByCategoryAndUserNameViewModel> getServicesAndUserByCategory { get; set; }
        //public DbQuery<ICategoryAndServiceItemViewModel> CategoryAndServiceItemViewModel { get; set; }
        //public DbQuery<QuestionAndAnswerViewModel> getQuestionsByServiceItemId { get; set; }
        //public DbQuery<servicesViewModel> getSevices { get; set; }
        //public DbQuery<AnswerViewModel> getAnswers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //Seed default Categories
            builder.Entity<CategoryModel>().HasData(
            new CategoryModel { Id = 1, Name = "Hospitality", CreationDate = DateTime.Now },
            new CategoryModel { Id = 2, Name = "Travel", CreationDate = DateTime.Now },
            new CategoryModel { Id = 3, Name = "Transportation", CreationDate = DateTime.Now },
            new CategoryModel { Id = 4, Name = "Media", CreationDate = DateTime.Now },
            new CategoryModel { Id = 5, Name = "Entertainment", CreationDate = DateTime.Now });

            //Seed default Cities
            builder.Entity<CityModel>().HasData(
                new CityModel { Id = 1, Name = "Kathmandu", Province = "3", CreatedOn = DateTime.Now },
                new CityModel { Id = 2, Name = "Pokhara", Province = "Gandaki", CreatedOn = DateTime.Now },
                new CityModel { Id = 3, Name = "Lalitpur", Province = "3", CreatedOn = DateTime.Now },
                new CityModel { Id = 4, Name = "Biratnagar", Province = "1", CreatedOn = DateTime.Now },
                new CityModel { Id = 5, Name = "Birjung", Province = "2", CreatedOn = DateTime.Now },
                new CityModel { Id = 6, Name = "Bharatpur", Province = "3", CreatedOn = DateTime.Now },
                new CityModel { Id = 7, Name = "Dharan", Province = "1", CreatedOn = DateTime.Now },
                new CityModel { Id = 8, Name = "Butwal", Province = "5", CreatedOn = DateTime.Now },
                new CityModel { Id = 9, Name = "Janakpur", Province = "2", CreatedOn = DateTime.Now },
                new CityModel { Id = 10, Name = "Dhangadhi", Province = "Sudurpashchim", CreatedOn = DateTime.Now },
                new CityModel { Id = 11, Name = "Bhaktapur", Province = "3", CreatedOn = DateTime.Now },
                new CityModel { Id = 12, Name = "Nepalgunj", Province = "5", CreatedOn = DateTime.Now },
                new CityModel { Id = 13, Name = "Hetauda", Province = "3", CreatedOn = DateTime.Now },
                new CityModel { Id = 14, Name = "Itahari", Province = "1", CreatedOn = DateTime.Now },
                new CityModel { Id = 15, Name = "Banepa", Province = "3", CreatedOn = DateTime.Now },
                new CityModel { Id = 16, Name = "Dhulikhel", Province = "3", CreatedOn = DateTime.Now },
                new CityModel { Id = 17, Name = "Baglung", Province = "Gandaki", CreatedOn = DateTime.Now });

            //Seed default ServiceItems
            builder.Entity<ServiceItemModel>().HasData(
            new ServiceItemModel { Id = 1, CategoryId = 1, CityId = 1, Name = "Hospitality Service 1", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 2, CategoryId = 1, CityId = 2, Name = "Hospitality Service 2", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 3, CategoryId = 1, CityId = 3, Name = "Hospitality Service 3", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 4, CategoryId = 1, CityId = 4, Name = "Hospitality Service 4", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 5, CategoryId = 1, CityId = 5, Name = "Hospitality Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemModel>().HasData(
            new ServiceItemModel { Id = 6, CategoryId = 2, CityId = 6, Name = "Travel Service 1", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 7, CategoryId = 2, CityId = 7, Name = "Travel Service 2", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 8, CategoryId = 2, CityId = 8, Name = "Travel Service 3", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 9, CategoryId = 2, CityId = 9, Name = "Travel Service 4", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 10, CategoryId = 2, CityId = 10, Name = "Travel Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemModel>().HasData(
            new ServiceItemModel { Id = 11, CategoryId = 3, CityId = 11, Name = "Transportation Service 1", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 12, CategoryId = 3, CityId = 12, Name = "Transportation Service 2", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 13, CategoryId = 3, CityId = 13, Name = "Transportation Service 3", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 14, CategoryId = 3, CityId = 14, Name = "Transportation Service 4", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 15, CategoryId = 3, CityId = 15, Name = "Transportation Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemModel>().HasData(
            new ServiceItemModel { Id = 16, CategoryId = 4, CityId = 16, Name = "Media Service 1", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 17, CategoryId = 4, CityId = 17, Name = "Media Service 2", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 18, CategoryId = 4, CityId = 1, Name = "Media Service 3", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 19, CategoryId = 4, CityId = 2, Name = "Media Service 4", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 20, CategoryId = 4, CityId = 3, Name = "Media Service 5", CreationDate = DateTime.Now });

            builder.Entity<ServiceItemModel>().HasData(
            new ServiceItemModel { Id = 21, CategoryId = 5, CityId = 4, Name = "Entertainment Service 1", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 22, CategoryId = 5, CityId = 5, Name = "Entertainment Service 2", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 23, CategoryId = 5, CityId = 6, Name = "Entertainment Service 3", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 24, CategoryId = 5, CityId = 7, Name = "Entertainment Service 4", CreationDate = DateTime.Now },
            new ServiceItemModel { Id = 25, CategoryId = 5, CityId = 8, Name = "Entertainment Service 5", CreationDate = DateTime.Now });

            builder.AddEntityConfigurationsFromAssembly(this.GetType().GetTypeInfo().Assembly);
            base.OnModelCreating(builder);
        }
    }
}