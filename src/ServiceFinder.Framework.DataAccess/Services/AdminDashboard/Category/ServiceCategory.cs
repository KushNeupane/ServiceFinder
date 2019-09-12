using Microsoft.EntityFrameworkCore;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using TAM.Framework.DataAccess.Contexts.AccountManagement;

namespace ServiceFinder.Framework.DataAccess.Services.AdminDashboard.Category
{
    public class ServiceCategory : IServiceCategory
    {
        private readonly ServiceFinderDbContext serviceFinderContext;

        public ServiceCategory(ServiceFinderDbContext _serviceFinderContext)
        {
            serviceFinderContext = _serviceFinderContext;
        }

        //Get Category
        public IEnumerable<CategoryEntity> GetCategories()
        {
            List<CategoryEntity> categories = new List<CategoryEntity>();
            if (serviceFinderContext != null)
            {
                categories = serviceFinderContext.categories.FromSql($"EXEC dbo.SpGetCategories").ToList();
            }
            return categories;
        }

        //Add Category
        public ResponseModel AddCategory(CategoryEntity model)
        {
            

            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                CategoryEntity responseData = serviceFinderContext.categories.FromSql($"EXEC dbo.SpAddCategory @name = " +
                    $"'{model.Name}', @id = {model.Id}, @status = 1, @imageurl = '{model.ImageURL}', @imagename = '{model.SystemDefinedImageName}'").FirstOrDefault();
                // var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, model.Name, model.Id, model.Status);
                response.isSuccess = true;
                response.data = responseData;

            }
            catch (Exception ex) { }
            return response;
        }

        public ResponseModel DeleteCategory(CategoryEntity model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            var sql = "EXEC dbo.SpDeleteCategory @categoryId = {0}, @status = {1}";
            var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, model.Id, model.Status);
            response.isSuccess = true;
            return response;
        }
        public ResponseModel GetCategoryById(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                CategoryEntity responseData = serviceFinderContext.categories.FromSql($"EXEC dbo.SpGetCategoryById @id = {id}").FirstOrDefault();
                response.data = responseData;
                response.isSuccess = true;
            }
            catch(Exception ex)
            {
            }
            return response;
        }
    }
}
