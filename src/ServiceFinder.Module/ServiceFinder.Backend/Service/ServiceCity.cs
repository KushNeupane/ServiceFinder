using System;
using System.Linq;
using ServiceFinder.DI.Core;
using ServiceFinder.DI.Backend;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Servicefinder.Core.Response;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.Backend.Context;

namespace ServiceFinder.Backend.Service
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
        public IEnumerable<ICityModel> GetCities()
        {

            if (serviceFinderContext != null)
            {
                return serviceFinderContext.city.FromSql("EXEC dbo.SpCitySel").ToList();
            }

            return null;
        }

        //ADD CITY 
        public IResponseModel AddCity(ICityModel model)
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
            catch (Exception)
            {
                response.errors.Add("Something went wrong, cannot add city");
            }
            return response;
        }

        //DELETE CITY
        public IResponseModel DeleteCity(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                using (serviceFinderContext)
                {
                    ICityModel model = serviceFinderContext.city.Find(id);
                    model.Status = false;
                    //serviceFinderContext.Remove(model);
                    serviceFinderContext.SaveChanges();
                    response.isSuccess = true;
                    response.successMessage = "City successfully deleted";
                }
            }
            catch (Exception)
            {
                response.errors.Add("Error deleting city");
            }
            return response;
        }

        public IResponseModel EditCity(ICityModel model, int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };

            if (serviceFinderContext != null)
            {
                ICityModel city = serviceFinderContext.city.Find(id);
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
