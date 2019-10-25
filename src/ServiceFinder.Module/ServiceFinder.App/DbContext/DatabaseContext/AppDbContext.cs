using Microsoft.EntityFrameworkCore;
using ServiceFinder.App.ViewModel;
using ServiceFinder.Main.Model;
using ServiceFinder.Main.ViewModel;
using System;

namespace ServiceFinder.Backend.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public virtual DbSet<CategoryModel> categories { get; set; }
        public virtual DbSet<ObjectModel> objects { get; set; }
        public virtual DbSet<CityModel> cities { get; set; }
        public virtual DbSet<ReviewModel> reviews { get; set; }
        public DbQuery<SearchResultViewModel> searchResult { get; set; }
        public virtual DbQuery<CategoryViewModel> categoriesView { get; set; }
        public virtual DbQuery<CategoryServicesViewModel> categoryServices { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //Seed default Categories
            builder.Entity<CategoryModel>().HasData(
            new CategoryModel { Id = 1, Name = "Hospitality", CreatedOn = DateTime.Now },
            new CategoryModel { Id = 2, Name = "Travel", CreatedOn = DateTime.Now },
            new CategoryModel { Id = 3, Name = "Transportation", CreatedOn = DateTime.Now },
            new CategoryModel { Id = 4, Name = "Media", CreatedOn = DateTime.Now },
            new CategoryModel { Id = 5, Name = "Entertainment", CreatedOn = DateTime.Now });

            //Seed default Cities
            builder.Entity<CityModel>().HasData(
                new CityModel { Id = 1, Name = "Kathmandu", CreatedOn = DateTime.Now },
                new CityModel { Id = 2, Name = "Pokhara", CreatedOn = DateTime.Now },
                new CityModel { Id = 3, Name = "Lalitpur", CreatedOn = DateTime.Now },
                new CityModel { Id = 4, Name = "Biratnagar", CreatedOn = DateTime.Now },
                new CityModel { Id = 5, Name = "Birjung", CreatedOn = DateTime.Now },
                new CityModel { Id = 6, Name = "Bharatpur", CreatedOn = DateTime.Now },
                new CityModel { Id = 7, Name = "Dharan", CreatedOn = DateTime.Now },
                new CityModel { Id = 8, Name = "Butwal", CreatedOn = DateTime.Now },
                new CityModel { Id = 9, Name = "Janakpur", CreatedOn = DateTime.Now },
                new CityModel { Id = 10, Name = "Dhangadhi", CreatedOn = DateTime.Now },
                new CityModel { Id = 11, Name = "Bhaktapur", CreatedOn = DateTime.Now },
                new CityModel { Id = 12, Name = "Nepalgunj", CreatedOn = DateTime.Now },
                new CityModel { Id = 13, Name = "Hetauda", CreatedOn = DateTime.Now },
                new CityModel { Id = 14, Name = "Itahari", CreatedOn = DateTime.Now },
                new CityModel { Id = 15, Name = "Banepa", CreatedOn = DateTime.Now },
                new CityModel { Id = 16, Name = "Dhulikhel", CreatedOn = DateTime.Now },
                new CityModel { Id = 17, Name = "Baglung", CreatedOn = DateTime.Now });

            //Seed default ServiceItems
            builder.Entity<ObjectModel>().HasData(
            new ObjectModel { Id = 1, CategoryId = 1, CityId = 1, Name = "Hospitality Service 1", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 2, CategoryId = 1, CityId = 2, Name = "Hospitality Service 2", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 3, CategoryId = 1, CityId = 3, Name = "Hospitality Service 3", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 4, CategoryId = 1, CityId = 4, Name = "Hospitality Service 4", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 5, CategoryId = 1, CityId = 5, Name = "Hospitality Service 5", CreatedOn = DateTime.Now });

            builder.Entity<ObjectModel>().HasData(
            new ObjectModel { Id = 6, CategoryId = 2, CityId = 6, Name = "Travel Service 1", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 7, CategoryId = 2, CityId = 7, Name = "Travel Service 2", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 8, CategoryId = 2, CityId = 8, Name = "Travel Service 3", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 9, CategoryId = 2, CityId = 9, Name = "Travel Service 4", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 10, CategoryId = 2, CityId = 10, Name = "Travel Service 5", CreatedOn = DateTime.Now });

            builder.Entity<ObjectModel>().HasData(
            new ObjectModel { Id = 11, CategoryId = 3, CityId = 11, Name = "Transportation Service 1", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 12, CategoryId = 3, CityId = 12, Name = "Transportation Service 2", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 13, CategoryId = 3, CityId = 13, Name = "Transportation Service 3", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 14, CategoryId = 3, CityId = 14, Name = "Transportation Service 4", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 15, CategoryId = 3, CityId = 15, Name = "Transportation Service 5", CreatedOn = DateTime.Now });

            builder.Entity<ObjectModel>().HasData(
            new ObjectModel { Id = 16, CategoryId = 4, CityId = 16, Name = "Media Service 1", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 17, CategoryId = 4, CityId = 17, Name = "Media Service 2", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 18, CategoryId = 4, CityId = 1, Name = "Media Service 3", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 19, CategoryId = 4, CityId = 2, Name = "Media Service 4", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 20, CategoryId = 4, CityId = 3, Name = "Media Service 5", CreatedOn = DateTime.Now });

            builder.Entity<ObjectModel>().HasData(
            new ObjectModel { Id = 21, CategoryId = 5, CityId = 4, Name = "Entertainment Service 1", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 22, CategoryId = 5, CityId = 5, Name = "Entertainment Service 2", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 23, CategoryId = 5, CityId = 6, Name = "Entertainment Service 3", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 24, CategoryId = 5, CityId = 7, Name = "Entertainment Service 4", CreatedOn = DateTime.Now },
            new ObjectModel { Id = 25, CategoryId = 5, CityId = 8, Name = "Entertainment Service 5", CreatedOn = DateTime.Now });

            base.OnModelCreating(builder);
        }
    }
}
