using Microsoft.EntityFrameworkCore;
using Servicefinder.Core.Response;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Backend;
using ServiceFinder.DI.Core;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ServiceFinder.Backend.Service
{
    public class ServiceCategory : IServiceCategory
    {
        private readonly ServiceFinderDbContext serviceFinderContext;

        public ServiceCategory(ServiceFinderDbContext _serviceFinderContext)
        {
            serviceFinderContext = _serviceFinderContext;
        }

        //Get Category
        public IEnumerable<ICategoryModel> GetCategories()
        {
            List<ICategoryModel> categories = new List<ICategoryModel>();
            if (serviceFinderContext != null)
            {
                categories = serviceFinderContext.categories.FromSql($"EXEC dbo.SpGetCategories").ToList();
            }
            return categories;
        }

        //Add Category
        public IResponseModel AddCategory(ICategoryModel model)
        {
            

            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                ICategoryModel responseData = serviceFinderContext.categories.FromSql($"EXEC dbo.SpAddCategory @name = " +
                    $"'{model.Name}', @id = {model.Id}, @status = 1, @imageurl = '{model.ImageURL}', @imagename = '{model.SystemDefinedImageName}'").FirstOrDefault();
                // var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, model.Name, model.Id, model.Status);
                response.isSuccess = true;
                response.data = responseData;

            }
            catch (Exception) { }
            return response;
        }

        public IResponseModel DeleteCategory(ICategoryModel model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            var sql = "EXEC dbo.SpDeleteCategory @categoryId = {0}, @status = {1}";
            var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, model.Id, model.Status);
            response.isSuccess = true;
            return response;
        }
        public IResponseModel GetCategoryById(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                ICategoryModel responseData = serviceFinderContext.categories.FromSql($"EXEC dbo.SpGetCategoryById @id = {id}").FirstOrDefault();
                response.data = responseData;
                response.isSuccess = true;
            }
            catch(Exception)
            {
            }
            return response;
        }
    }
}
