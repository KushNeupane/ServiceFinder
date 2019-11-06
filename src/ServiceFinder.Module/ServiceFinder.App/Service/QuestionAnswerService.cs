using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Servicefinder.Core.Response;
using ServiceFinder.App.Model;
using ServiceFinder.App.ViewModel;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Response.Core;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModels.App;
using ServiceFinder.Users.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceFinder.App.Service
{
    public class QuestionAnswerService : IQuestionAnswerService
    {
        IServiceProvider service = null;
        AppDbContext appDbContext = null;
        private string currentUserId;
        IMapper mapper => service.GetService(typeof(IMapper)) as IMapper;
        IHttpContextAccessor httpContextAccessor => service.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;
        private UserManager<ApplicationUserModel> userManager => service.GetService(typeof(UserManager<ApplicationUserModel>)) as UserManager<ApplicationUserModel>;
        private SignInManager<ApplicationUserModel> signInManager => service.GetService(typeof(SignInManager<ApplicationUserModel>)) as SignInManager<ApplicationUserModel>;

        public QuestionAnswerService(IServiceProvider _service, AppDbContext _appDbContext)
        {
            service = _service;
            appDbContext = _appDbContext;
            this.currentUserId = httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }

        public async Task<IResponseModel> AddQuestions(IQuestionViewModel viewmodel)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            QuestionModel questionModel = mapper.Map<QuestionModel>(viewmodel);
            var sql = "EXEC dbo.SpAnswerPostSel @UserId = {0}, @ObjectId = {1}, @QuestionText = {2}, @QuestionId = {3}";
            var res = appDbContext.Database.ExecuteSqlCommand(sql, currentUserId, questionModel.ServiceItemId, questionModel.QuestionText, questionModel.Id);
            response.isSuccess = true;
            return response;
        }

        public async Task<IResponseModel> AddAnswers(IAnswerViewModel viewmodel)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            AnswerModel answerModel = mapper.Map<AnswerModel>(viewmodel);
            var sql = "EXEC dbo.SpAnswerPostSel @AnswerText = {0}, @QuestionId = {1}, @AnswerId = {2}";
            var res = appDbContext.Database.ExecuteSqlCommand(sql, answerModel.AnswerText, answerModel.QuestionId, answerModel.Id);
            response.isSuccess = true;
            return response;
        }

        public List<IQuestionAnswerViewModel> GetQuestionAnswerByObjectId(int? id)
        {
            List<IQuestionAnswerViewModel> model = new List<IQuestionAnswerViewModel>();

            if (appDbContext != null)
            {
                List<QuestionAnswerViewModel> qaModel = appDbContext.questionsAnswer.FromSql("EXEC dbo.SpGetAnswersByServiceItemIdSel @ObjectId =" + id + "").ToList();
                model = mapper.Map<List<IQuestionAnswerViewModel>>(qaModel);
                if (model[0].questionText == null && currentUserId == model[0].providerId)
                {
                    model[0].FirstQuestion = true;
                    model[0].ShowOptions = true;
                }
                else
                {
                    foreach (var qa in model)
                    {
                        if (currentUserId == qa.providerId)
                        {
                            qa.ShowOptions = true;

                        }
                        else if (currentUserId == qa.userId)
                        {
                            qa.EditOptions = true;
                        }
                    }

                }

            }
            return model;
        }

        public async Task<IResponseModel> DeleteAnswer(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IResponseModel> DeleteQuestion(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IAnswerViewModel> GetAnswerById(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IResponseModel> GetQuestionById(int id)
        {
            throw new System.NotImplementedException();
        }


    }
}
