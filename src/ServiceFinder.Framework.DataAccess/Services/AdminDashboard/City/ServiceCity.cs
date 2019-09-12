using System;
using System.Text;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using TAM.Framework.DataAccess.Contexts.AccountManagement;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ServiceFinder.Framework.DataAccess.Services.AdminDashboard.City
{
    public class ServiceCity : IServiceCity
    {
        private string currentUserId;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private ServiceFinderDbContext serviceFinderContext;

        public ServiceCity(ServiceFinderDbContext _serviceFinderContext, IHttpContextAccessor _httpContextAccessor)
        {
            this.serviceFinderContext = _serviceFinderContext;
            this.currentUserId = _httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }


        //GET CITIES
        public IEnumerable<CityEntity> GetCities()
        {
            
            if (serviceFinderContext != null)
            {
            return serviceFinderContext.city.FromSql("EXEC dbo.SpCitySel").ToList();
            }

            return null;
        }

        //ADD CITY 
        public ResponseModel AddCity(CityEntity model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                using (serviceFinderContext)
                {
                    serviceFinderContext.Add(model);
                    serviceFinderContext.SaveChanges();
                    response.isSuccess = true;
                    response.successMessage = "City Successfully Added";
                }
            }
            catch (Exception ex)
            {
                response.errors.Add("Something went wrong, cannot add city");
            }
            return response;
        }

        //DELETE CITY
        public ResponseModel DeleteCity(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                using (serviceFinderContext)
                {
                    CityEntity model = serviceFinderContext.city.Find(id);
                    model.Status = false;
                    //serviceFinderContext.Remove(model);
                    serviceFinderContext.SaveChanges();
                    response.isSuccess = true;
                    response.successMessage = "City successfully deleted";
                }
            }
            catch(Exception ex)
            {
                response.errors.Add("Error deleting city");
            }
            return response;
        }

        public ResponseModel EditCity(CityEntity model, int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };

            if (serviceFinderContext!= null)
            {
                CityEntity city = serviceFinderContext.city.Find(id);
                city.Name = model.Name;
                city.Province = model.Province;
                city.Status = model.Status;
                city.Description = model.Description;
                city.CreatedOn = model.CreatedOn;
                serviceFinderContext.SaveChanges();
                response.isSuccess = true;
                response.successMessage = "City Updated Successfully";
            }
            else
            {
                response.errors.Add("City cannot be found");
            }
            return response;
        }
    }
}
