using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Servicefinder.Core.Model;
using Servicefinder.Core.Response;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Backend;
using ServiceFinder.DI.Core;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ServiceFinder.Backend.Service
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
        public IServiceItemModel UpdateService(int? id, IServiceItemModel model, List<IServiceItemImageModel> images)
        {
            if (serviceFinderContext != null)
            {
                IServiceItemModel si = serviceFinderContext.serviceItems.Find(id);
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
        IEnumerable<IServiceItemModel> IServiceManagement.GetServicesByUserId()
        {
            List<IServiceItemModel> service = serviceFinderContext.serviceItems.Where(i => i.UserId == this.currentUserId).ToList();
            return service;
        }

        //Delete Service
        public void DeleteService(int? Id)
        {
            IServiceItemModel service = serviceFinderContext.serviceItems.Find(Id);
            List<IServiceItemImageModel> images = serviceFinderContext.serviceItemImages.Where(i => i.ServiceItemId == Id).ToList();
            serviceFinderContext.RemoveRange(images);
            serviceFinderContext.Remove(service);
            serviceFinderContext.SaveChanges();
        }

        //Get List of Services
        public IEnumerable<IServiceItemModel> GetServices()
        {
            List<IServiceItemModel> services = new List<IServiceItemModel>();
            List<ApplicationUserModel> model = new List<ApplicationUserModel>();
            model = serviceFinderContext.applicationUsers.ToList();
            services = serviceFinderContext.serviceItems.ToList();
            foreach (var service in services)
            {
                foreach (var user in model)
                {
                    if (user.Id == service.UserId)
                    {
                       // service.ApplicationUser.DisplayName = user.DisplayName;
                    }
                }
            }
            return services;

        }

        //Get Category List with service count
        public IEnumerable<ICategoryAndServiceItemViewModel> GetCategoriesWithServiceCount(int? id)
        {
            List<ICategoryAndServiceItemViewModel> CategoryAndServiceItemResult = new List<ICategoryAndServiceItemViewModel>();
            if (serviceFinderContext != null)
            {
                CategoryAndServiceItemResult = serviceFinderContext.CategoryAndServiceItemViewModel.FromSql($"EXEC dbo.SpCatergoryAndServiceItemSel @Skip = {id}").ToList();
                return CategoryAndServiceItemResult;
            }
            return null;
        }

        //Get Service by ServiceItemId
        public IServiceViewModel GetServiceByServiceItemId(int? Id)
        {
            //ServiceItemModel service = serviceFinderContext.serviceItems.Find(Id);
            //ApplicationUserModel model = serviceFinderContext.applicationUsers.Find(service.UserId);
            //CityModel city = serviceFinderContext.city.Find(service.CityId);
            //service.City = city;
            //service.ApplicationUser = model;
            //ServiceViewModel view = new ServiceViewModel();
            //view.serviceData = service;
            //if (this.currentUserId != null)
            //{
            //    view.LoggedIn = true;
            //    if (service.UserId == this.currentUserId)
            //    {
            //        view.ShowReview = false;
            //    }
            //}

            //return view;
            return null;
        }

        //Get Categories Only
        public IEnumerable<ICategoryModel> GetCategories()
        {
            List<ICategoryModel> categories = new List<ICategoryModel>();
            if (serviceFinderContext != null)
            {
                categories = serviceFinderContext.categories.FromSql($"EXEC dbo.SpGetCategories").ToList();
            }
            return categories;
        }

        //Add Service
        public IServiceItemModel AddService(IServiceItemModel model, List<IServiceItemImageModel> images)
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
        public IEnumerable<IServicesByCategoryAndUserNameViewModel> GetServicesByCategoryId(int? id)
        {

            if (serviceFinderContext != null)
            {
                return serviceFinderContext.getServicesAndUserByCategory.FromSql("EXEC dbo.SpGetServicesByCategoryIdSel @CategoryId = " + id + "").ToList();
            }

            return null;
        }

        public IEnumerable<IServiceItemImageModel> GetImageByServiceItemImageId(int? Id)
        {
            List<IServiceItemImageModel> images = serviceFinderContext.serviceItemImages.Where(i => i.ServiceItemId == Id).ToList();
            return images;
        }

        public void DeleteImageByServiceItemImageId(int? Id)
        {
            IServiceItemImageModel image = serviceFinderContext.serviceItemImages.Find(Id);
            serviceFinderContext.Remove(image);
            serviceFinderContext.SaveChanges();
        }



        public IResponseModel AddReview(IServiceReviewModel model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };

            using (serviceFinderContext)
            {
                if (currentUserId != null)
                {
                    model.UserId = currentUserId;
                    List<IServiceReviewModel> reviews = new List<IServiceReviewModel>();
                    reviews = this.GetReviewByServiceId(model.ServiceItemId);

                    if (reviews.Count == 0)
                    {
                        serviceFinderContext.Add(model);
                        serviceFinderContext.SaveChanges();
                        response.isSuccess = true;
                    }
                    else
                    {
                        foreach (ServiceReviewModel review in reviews)
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
        public List<IServiceReviewModel> GetReviewByServiceId(int serviceItemId)
        {
            List<IServiceReviewModel> models, reviews = new List<IServiceReviewModel>();
            models = serviceFinderContext.serviceReview.ToList();
            foreach (ServiceReviewModel model in models)
            {
                if (model.ServiceItemId == serviceItemId)
                {
                    ApplicationUserModel user = serviceFinderContext.applicationUsers.Find(model.UserId);
                    //model.ApplicationUser = user;
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
        public List<IServiceReviewModel> GetReviewByUserId()
        {
            //List<IServiceReviewModel> models, reviews = new List<IServiceReviewModel>();
            //models = serviceFinderContext.serviceReview.ToList();
            //foreach (IServiceReviewModel model in models)
            //{
            //    if (model.UserId == this.currentUserId)
            //    {
            //        ApplicationUserModel user = serviceFinderContext.applicationUsers.Find(model.UserId);
            //        model.ApplicationUser = user;
            //        IServiceItemModel service = serviceFinderContext.serviceItems.Find(model.ServiceItemId);
            //        model.ServiceItem = service;
            //        reviews.Add(model);
            //    }
            //}
            //return reviews;
            return null;
        }

        //Delete review by review Id
        public void DeleteReview(int? Id)
        {
            IServiceReviewModel review = serviceFinderContext.serviceReview.Find(Id);
            serviceFinderContext.Remove(review);
            serviceFinderContext.SaveChanges();
        }
        //Update your review
        public IResponseModel UpdateReview(int? id, IServiceReviewModel model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            IServiceReviewModel review = serviceFinderContext.serviceReview.Find(id);
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

        public void addServiceVisitLog(IServiceItemViewLogModel model)
        {
            var sql = "EXEC dbo.SpServiceItemViewLogModel @UserId = {0}, @ServiceItemId = {1}";

            var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, currentUserId, model.ServiceItemId);
        }

        public IEnumerable<IServiceVisitViewModel> GetTotalVisitedServiceCount()
        {
            if (serviceFinderContext != null)
            {
                var totalVistedServices = serviceFinderContext.ServiceVisitView
                    .FromSql($@"EXEC dbo.SpServiceVisitCountSel").ToList();
                return totalVistedServices;
            }
            return null;
        }

        public List<ICityModel> GetCities()
        {
            return this.serviceFinderContext.city.ToList();
        }

        public List<IAdvancedSearchViewModel> GetFilteredService(int? categoryId, int? cityId, string searchTerm, int LoadMoreCount)
        {
            //searchTerm = searchTerm.Replace(" ", string.Empty);
            var sql = "EXEC dbo.SpAdvanceSearchSel @CategoryId = {0},@CityId={1}, @searchTerm = {2}, @Skip = {3}";
            return serviceFinderContext.advancedSearch.FromSql(sql, categoryId, cityId, searchTerm, LoadMoreCount).ToList();
        }

        public IResponseModel AddSubsciber(string email)
        {
            List<ISubscriberModel> subscribers = serviceFinderContext.subscriber.ToList();
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
                    foreach (SubscriberModel subscribe in subscribers)
                    {
                        if (subscribe.Email == email)
                        {
                            response.errors.Add("You are already subscribed");
                            return response;
                        }
                    }
                    SubscriberModel subscriber = new SubscriberModel();
                    subscriber.Email = email;
                    serviceFinderContext.Add(subscriber);
                    serviceFinderContext.SaveChanges();
                    response.isSuccess = true;
                    response.successMessage = "You are subscribed";
                }
                catch (Exception)
                {
                    response.errors.Add("Something went wrong");
                }
            }
            return response;
        }
    }
}
