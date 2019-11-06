using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Servicefinder.Core.Response;
using ServiceFinder.App.ViewModel;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Response.Core;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModels.App;
using ServiceFinder.Main.Model;
using ServiceFinder.Users.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceFinder.App.Service
{
    public class ReviewService : IReviewService
    {
        IServiceProvider service = null;
        AppDbContext appDbContext = null;
        private string currentUserId;
        IMapper mapper => service.GetService(typeof(IMapper)) as IMapper;
        IHttpContextAccessor httpContextAccessor => service.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;
        private UserManager<ApplicationUserModel> userManager => service.GetService(typeof(UserManager<ApplicationUserModel>)) as UserManager<ApplicationUserModel>;
        private SignInManager<ApplicationUserModel> signInManager => service.GetService(typeof(SignInManager<ApplicationUserModel>)) as SignInManager<ApplicationUserModel>;

        public ReviewService(IServiceProvider _service, AppDbContext _appDbContext)
        {
            service = _service;
            appDbContext = _appDbContext;
            this.currentUserId = httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }

        public async Task<IResponseModel> AddAsync(IReviewViewModel model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            ReviewModel reviewModel = mapper.Map<ReviewModel>(model);
            using (appDbContext)
            {
                if (currentUserId != null)
                {
                    reviewModel.UserId = currentUserId;
                    List<IReviewViewModel> reviews = await this.GetReviewByObjectId(reviewModel.ObjectId);
                    List<ReviewModel> reviewModels = mapper.Map<List<ReviewModel>>(reviews);

                    try
                    {
                        if (reviewModels.Count == 0)
                        {
                            appDbContext.Add(reviewModel);
                            appDbContext.SaveChanges();
                            response.isSuccess = true;
                        }
                        else
                        {
                            foreach (var review in reviewModels)
                             {
                           
                                if (review.UserId == this.currentUserId)
                                {
                                    ReviewModel entity = appDbContext.reviews.Find(review.Id);
                                   // entity.ReviewTest = model.ReviewTest;
                                    // reviewModel.Id =review.Id;
                                    //reviewModel.Id = review.Id;
                                    await appDbContext.SaveChangesAsync();
                                    response.isSuccess = true;
                                    response.successMessage = "Review Updated!!";
                                    return mapper.Map<IResponseModel>(response);
                                }
                           }
                            appDbContext.Add(reviewModel);
                            appDbContext.SaveChanges();
                            response.isSuccess = true;
                            response.successMessage = "Review Submitted!!";
                        }
                    }
                    catch (Exception e)
                    {

                    }
                }
                else
                {
                    response.isSuccess = false;
                    response.errors.Add("Login before rating");
                    return mapper.Map<IResponseModel>(response);
                }
            }

            return mapper.Map<IResponseModel>(response);
        }

        public Task<IReviewViewModel> DeleteAsync(int id)
        {
            return null;
        }

        public Task<List<IReviewViewModel>> GetAllAsync()
        {
            return null;
        }

        public Task<IReviewViewModel> GetByIdAsync(int id)
        {
            return null;
        }

        public Task<IReviewViewModel> UpdateAsync(IReviewViewModel model, int id)
        {
            return null;
        }
        public async Task<List<IReviewViewModel>> GetReviewByObjectId(int objectId)
        {
            List<ReviewModel> models = new List<ReviewModel>();
            models = appDbContext.reviews.ToList();
            List<ReviewViewModel> viewModels, reviews = new List<ReviewViewModel>();
            viewModels = mapper.Map<List<ReviewViewModel>>(models);
            foreach (var model in viewModels)
            {
                if (model.ObjectId == objectId)
                {
                    ApplicationUserModel user = await userManager.FindByIdAsync(model.UserId);
                    model.AppUser = user;
                    if (model.UserId == currentUserId)
                    {
                        model.ShowOptions = true;
                    }
                    reviews.Add(model);
                }
            }
            return mapper.Map<List<IReviewViewModel>>(reviews);
        }
    }
}
