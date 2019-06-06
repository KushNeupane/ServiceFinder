using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using System;
using System.Collections.Generic;
using System.Linq;
using TAM.Framework.DataAccess.Contexts.AccountManagement;
using TAM.Framework.Model.Models.AccountManagement;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;

namespace ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement
{
    public class ServiceManagement : IServiceManagement
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        ServiceFinderDbContext serviceFinderContext;

        private readonly UserManager<ApplicationUserEntity> userManager;
        private string currentUserId;
        public ServiceManagement(ServiceFinderDbContext _serviceFinderContext, IHttpContextAccessor httpContextAccessor)
        {
            this.serviceFinderContext = _serviceFinderContext;
            this._httpContextAccessor = httpContextAccessor;
            this.currentUserId = _httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }

        //Update Service
        public ServiceItemEntity UpdateService(int? id, ServiceItemEntity model, List<ServiceItemImageEntity> images)
        {
            if (serviceFinderContext != null)
            {
                ServiceItemEntity si = serviceFinderContext.serviceItems.Find(id);
                si.Name = model.Name;
                si.Status = model.Status;
                si.CategoryId = model.CategoryId;
                si.Description = model.Description;
                foreach (var image in images)
                {
                    image.ServiceItemId = si.Id;
                    serviceFinderContext.Add(image);
                    serviceFinderContext.SaveChanges();
                }
                serviceFinderContext.SaveChanges();
                return si;
            }
            throw new NotImplementedException();
        }

        //In order to get the services added by particular User
        IEnumerable<ServiceItemEntity> IServiceManagement.GetServicesByUserId()
        {
            List<ServiceItemEntity> service = serviceFinderContext.serviceItems.Where(i => i.UserId == this.currentUserId).ToList();
            return service;
        }

        //Delete Service
        public void DeleteService(int? Id)
        {
            ServiceItemEntity service = serviceFinderContext.serviceItems.Find(Id);
            List<ServiceItemImageEntity> images = serviceFinderContext.serviceItemImages.Where(i => i.ServiceItemId == Id).ToList();
            serviceFinderContext.RemoveRange(images);
            serviceFinderContext.Remove(service);
            serviceFinderContext.SaveChanges();
        }

        //Get List of Services
        public IEnumerable<ServiceItemEntity> GetServices()
        {
            List<ServiceItemEntity> service = new List<ServiceItemEntity>();
            service = serviceFinderContext.serviceItems.ToList();
            return service;
        }

        //Get Service by ServiceItemId
        public ServiceItemEntity GetServiceByServiceItemId(int? Id)
        {
            ServiceItemEntity service = serviceFinderContext.serviceItems.Find(Id);
            return service;
        }

        //Get Category List
        public IEnumerable<CategoryAndServiceItemViewModel> GetCategories()
        {
            if (serviceFinderContext != null)
            {
                var CategoryAndServiceItemResult = serviceFinderContext.CategoryAndServiceItemViewModel.
                    FromSql($@"EXEC dbo.SpCatergoryAndServiceItemSel").ToList();
                return CategoryAndServiceItemResult;
            }
            return null;
        }

        //Add Service
        public ServiceItemEntity AddService(ServiceItemEntity model, List<ServiceItemImageEntity> images)
        {
            using (serviceFinderContext)
            {
                model.UserId = currentUserId;
                serviceFinderContext.Add(model);
                serviceFinderContext.SaveChanges();

                foreach (var image in images)
                {
                    image.ServiceItemId = model.Id;
                    serviceFinderContext.Add(image);
                    serviceFinderContext.SaveChanges();
                }

                return model;
            }
        }
        //Get Service By Category Id
        public IEnumerable<ServiceItemEntity> GetServicesByCategoryId(int? Id)
        {
            List<ServiceItemEntity> models, services = new List<ServiceItemEntity>();
            models = serviceFinderContext.serviceItems.ToList();

            foreach (ServiceItemEntity model in models)
            {
                if (model.CategoryId == Id)
                {
                    services.Add(model);
                }
            }
            return services;
        }

        public IEnumerable<ServiceItemImageEntity> GetImageByServiceItemImageId(int? Id)
        {
            List<ServiceItemImageEntity> images = serviceFinderContext.serviceItemImages.Where(i => i.ServiceItemId == Id).ToList();
            return images;
        }

        public void DeleteImageByServiceItemImageId(int? Id)
        {
            ServiceItemImageEntity image = serviceFinderContext.serviceItemImages.Find(Id);
            serviceFinderContext.Remove(image);
            serviceFinderContext.SaveChanges();
        }
    
	

    public ResponseModel AddReview(ServiceReviewEntity model)
    {
        ResponseModel response = new ResponseModel() { errors = new List<string>() };

        using (serviceFinderContext)
        {
            if (currentUserId != null)
            {
                model.UserId = currentUserId;
                List<ServiceReviewEntity> reviews = new List<ServiceReviewEntity>();
                reviews = this.GetReviewByServiceId(model.ServiceItemId);

                    if (reviews.Count == 0)
                    {
                        serviceFinderContext.Add(model);
                        serviceFinderContext.SaveChanges();
                        response.isSuccess = true;
                    }
                    else
                    {
                        foreach (ServiceReviewEntity review in reviews)
                        {
                            if (review.UserId == model.UserId)
                            {
                                response.isSuccess = false;
                                response.errors.Add("Your have already rated on this service");
                                return response;

                            }
                            else
                            {
                                serviceFinderContext.Add(model);
                                serviceFinderContext.SaveChanges();
                                response.isSuccess = true;

                            }
                        }
                    }
            }

            else
            {
                response.isSuccess = false;
                response.errors.Add("Login before rating");
                return response;

            }
            return response;
        } }

        

        public List<ServiceReviewEntity> GetReviewByServiceId(int serviceItemId)
        {
            List<ServiceReviewEntity> models, reviews = new List<ServiceReviewEntity>();
            models = serviceFinderContext.serviceReview.ToList();

            foreach(ServiceReviewEntity model in models)
            {
                if (model.ServiceItemId == serviceItemId)
                {
                    reviews.Add(model);
                }
            }
            return reviews;
        }

        public List<ServiceReviewEntity> GetReviewByUserId()
        {
            List<ServiceReviewEntity> models, reviews = new List<ServiceReviewEntity>();
            models = serviceFinderContext.serviceReview.ToList();

            foreach (ServiceReviewEntity model in models)
            {
                if (model.UserId == this.currentUserId)
                {
                    reviews.Add(model);
                }
            }
            return reviews;
        }
    }
}