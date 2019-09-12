using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Entity.AdminDashboard;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using System;
using System.Collections.Generic;
using System.Linq;
using TAM.Framework.DataAccess.Contexts.AccountManagement;
using TAM.Framework.Model.Models.AccountManagement;

namespace ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement
{
    public class ServiceManagement : IServiceManagement
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        ServiceFinderDbContext serviceFinderContext;
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
            List<ServiceItemEntity> services = new List<ServiceItemEntity>();
            List<ApplicationUserEntity> model = new List<ApplicationUserEntity>();
            model = serviceFinderContext.applicationUsers.ToList();
            services = serviceFinderContext.serviceItems.ToList();
            foreach (var service in services)
            {
                foreach (var user in model)
                {
                    if (user.Id == service.UserId)
                    {
                        service.ApplicationUser.DisplayName = user.DisplayName;
                    }
                }
            }
            return services;

        }

        //Get Category List with service count
        public IEnumerable<CategoryAndServiceItemViewModel> GetCategoriesWithServiceCount(int? id)
        {
            List<CategoryAndServiceItemViewModel> CategoryAndServiceItemResult = new List<CategoryAndServiceItemViewModel>();
            if (serviceFinderContext != null)
            {
                 CategoryAndServiceItemResult = serviceFinderContext.CategoryAndServiceItemViewModel.FromSql($"EXEC dbo.SpCatergoryAndServiceItemSel @Skip = {id}").ToList();
                 return CategoryAndServiceItemResult;
            }
            return null;
        }

        //Get Service by ServiceItemId
        public ServiceViewModel GetServiceByServiceItemId(int? Id)
        {
            ServiceItemEntity service = serviceFinderContext.serviceItems.Find(Id);
            ApplicationUserEntity model = serviceFinderContext.applicationUsers.Find(service.UserId);
            CityEntity city = serviceFinderContext.city.Find(service.CityId);
            service.City = city;
            service.ApplicationUser = model;
            ServiceViewModel view = new ServiceViewModel();
            view.serviceData = service;
            if (this.currentUserId != null)
            {
                view.LoggedIn = true;
                if (service.UserId == this.currentUserId)
                {
                    view.ShowReview = false;
                }
            }

            return view;
        }

        //Get Categories Only
        public IEnumerable<CategoryEntity> GetCategories()
        {
            List<CategoryEntity> categories = new List<CategoryEntity>();
            if (serviceFinderContext != null)
            {
                categories = serviceFinderContext.categories.FromSql($"EXEC dbo.SpGetCategories").ToList();
            }
            return categories;
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
        public IEnumerable<ServicesByCategoryAndUserNameViewModel> GetServicesByCategoryId(int? id)
        {

            if (serviceFinderContext != null)
            {
                return serviceFinderContext.getServicesAndUserByCategory.FromSql("EXEC dbo.SpGetServicesByCategoryIdSel @CategoryId = " + id + "").ToList();
            }

            return null;
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
                                review.OverAllReview = model.OverAllReview;
                                review.ReviewTest = model.ReviewTest;
                                serviceFinderContext.SaveChanges();
                                response.isSuccess = true;
                                response.successMessage = "Review Updated!!";
                                return response;
                            }
                        }

                        serviceFinderContext.Add(model);
                        serviceFinderContext.SaveChanges();
                        response.isSuccess = true;
                        response.successMessage = "Review Submitted!!";
                    }
                }

                else
                {
                    response.isSuccess = false;
                    response.errors.Add("Login before rating");
                    return response;

                }
                return response;
            }
        }



        //Get reviews by serviceId
        public List<ServiceReviewEntity> GetReviewByServiceId(int serviceItemId)
        {
            List<ServiceReviewEntity> models, reviews = new List<ServiceReviewEntity>();
            models = serviceFinderContext.serviceReview.ToList();
            foreach (ServiceReviewEntity model in models)
            {
                if (model.ServiceItemId == serviceItemId)
                {
                    ApplicationUserEntity user = serviceFinderContext.applicationUsers.Find(model.UserId);
                    model.ApplicationUser = user;
                    if (model.UserId == currentUserId)
                    {
                        model.ShowOptions = true;
                    }
                    reviews.Add(model);
                }
            }
            return reviews;
        }

        //Get review by User
        public List<ServiceReviewEntity> GetReviewByUserId()
        {
            List<ServiceReviewEntity> models, reviews = new List<ServiceReviewEntity>();
            models = serviceFinderContext.serviceReview.ToList();
            foreach (ServiceReviewEntity model in models)
            {
                if (model.UserId == this.currentUserId)
                {
                    ApplicationUserEntity user = serviceFinderContext.applicationUsers.Find(model.UserId);
                    model.ApplicationUser = user;
                    ServiceItemEntity service = serviceFinderContext.serviceItems.Find(model.ServiceItemId);
                    model.ServiceItem = service;
                    reviews.Add(model);
                }
            }
            return reviews;
        }

        //Delete review by review Id
        public void DeleteReview(int? Id)
        {
            ServiceReviewEntity review = serviceFinderContext.serviceReview.Find(Id);
            serviceFinderContext.Remove(review);
            serviceFinderContext.SaveChanges();
        }
        //Update your review
        public ResponseModel UpdateReview(int? id, ServiceReviewEntity model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            ServiceReviewEntity review = serviceFinderContext.serviceReview.Find(id);
            if (review != null)
            {
                review.ChangeDate = model.ChangeDate;
                review.ChangedBy = model.ChangedBy;
                review.CreatedBy = model.CreatedBy;
                review.CreatedOn = model.CreatedOn;
                review.CreationDate = model.CreationDate;
                review.EverUsed = model.EverUsed;
                review.IsDeleted = model.IsDeleted;
                review.OverAllReview = model.OverAllReview;
                review.ReviewTest = model.ReviewTest;
                review.ReviewTime = model.ReviewTime;
                review.UserId = this.currentUserId;
                review.ServiceItemId = model.ServiceItemId;
                review.UserChangedId = model.UserChangedId;
                review.UserCreatedId = model.UserCreatedId;
                serviceFinderContext.SaveChanges();
                response.isSuccess = true;
            }
            else
            {
                response.errors.Add("Error occured!");
            }
            return response;
        }

        public void addServiceVisitLog(ServiceItemViewLog model)
        {
            var sql = "EXEC dbo.SpServiceItemViewLog @UserId = {0}, @ServiceItemId = {1}";

            var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, currentUserId, model.ServiceItemId);
        }

        public IEnumerable<ServiceVisitViewModel> GetTotalVisitedServiceCount()
        {
            if (serviceFinderContext != null)
            {
                var totalVistedServices = serviceFinderContext.ServiceVisitView
                    .FromSql($@"EXEC dbo.SpServiceVisitCountSel").ToList();
                return totalVistedServices;
            }
            return null;
        }

        public List<CityEntity> GetCities()
        {
            return this.serviceFinderContext.city.ToList();
        }

        public List<AdvancedSearchViewModel> GetFilteredService(int? categoryId, int? cityId, string searchTerm, int LoadMoreCount)
        {
            //searchTerm = searchTerm.Replace(" ", string.Empty);
            var sql = "EXEC dbo.SpAdvanceSearchSel @CategoryId = {0},@CityId={1}, @searchTerm = {2}, @Skip = {3}";
            return serviceFinderContext.advancedSearch.FromSql(sql, categoryId, cityId, searchTerm, LoadMoreCount).ToList();
        }

        public ResponseModel AddSubsciber(string email)
        {
            List<SubscriberEntity> subscribers = serviceFinderContext.subscriber.ToList();
            ResponseModel response = new ResponseModel() { errors = new List<string>() };

            if (email == null)
            {
                response.errors.Add("Enter a valid email address");
                return response;
            }
            else
            {
                try
                {
                    foreach (SubscriberEntity subscribe in subscribers)
                    {
                        if (subscribe.Email == email)
                        {
                            response.errors.Add("You are already subscribed");
                            return response;
                        }
                    }
                    SubscriberEntity subscriber = new SubscriberEntity();
                    subscriber.Email = email;
                    serviceFinderContext.Add(subscriber);
                    serviceFinderContext.SaveChanges();
                    response.isSuccess = true;
                    response.successMessage = "You are subscribed";
                }
                catch (Exception ex)
                {
                    response.errors.Add("Something went wrong");
                }
            }
            return response;
        }
    }
}