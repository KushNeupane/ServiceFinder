using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Servicefinder.Core.Response;
using ServiceFinder.DI.Core;
using ServiceFinder.DI.Frontend;
using ServiceFinder.FrontEnd.Context;
using ServiceFinder.FrontEnd.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ServiceFinder.FrontEnd.Service
{
    public class ServiceQuestionAnswer : IServiceQuestionAnswer
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        ServiceFinderFrontendContext serviceFinderFrontendContext;
        private string currentUserId;

        public ServiceQuestionAnswer(ServiceFinderFrontendContext _serviceFinderFrontendContext, IHttpContextAccessor httpContextAccessor)
        {
            this.serviceFinderFrontendContext = _serviceFinderFrontendContext;
            this._httpContextAccessor = httpContextAccessor;
            this.currentUserId = _httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }

        //AddQuestions
        public IResponseModel PostQuestions(IQuestionModel model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            //var sql = "EXEC dbo.PostQuestionSp @UserId = {0}, @ServiceItemId = {1}, @QuestionText = {2}, @QuestionId = {3}";
            //var res = serviceFinderFrontendContext.Database.ExecuteSqlCommand(sql, currentUserId, model.ServiceItemId, model.QuestionText, model.Id);
            response.isSuccess = true;
            return response;

        }
        //GetQuestions and answers
        public IEnumerable<IQuestionAndAnswerViewModel> GetQuestionsAndAnswerByServiceItemId(int? id)
        {

            List<IQuestionAndAnswerViewModel> model = new List<IQuestionAndAnswerViewModel>();
            if (serviceFinderFrontendContext != null)
            {
                model = serviceFinderFrontendContext.getQuestionsByServiceItemId.FromSql("EXEC dbo.SpGetAnswersByServiceItemIdSel @ServiceItemId =" + id + "").ToList();

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

        //Add Answers
        public IResponseModel PostAnswers(IAnswerModel model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            var sql = "EXEC dbo.SpAnswerPostSel @AnswerText = {0}, @QuestionId = {1}, @AnswerId = {2}";
            var res = serviceFinderFrontendContext.Database.ExecuteSqlCommand(sql, model.AnswerText, model.QuestionId, model.Id);
            return response;
        }

        public IResponseModel GetQuestionById(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                IQuestionModel responseData = serviceFinderFrontendContext.question.FromSql($"EXEC dbo.SpGetQuestionByQuestionId @questionId = {id}").FirstOrDefault();
                response.data = responseData;
                response.isSuccess = true;

            }
            catch (Exception ) { }
            return response;
        }

        public IAnswerViewModel GetAnswerById(int? id)
        {
            AnswerViewModel responseData = new AnswerViewModel();
            try
            {
                responseData = serviceFinderFrontendContext.getAnswers.FromSql($"EXEC dbo.SpGetAnswerByAnswerId @answerId = {id}").FirstOrDefault();
            }
            catch (Exception ) { }
            return responseData;
        }

        public IResponseModel DeleteAnswer(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                var sql = "EXEC dbo.SpDeleteAnswer @answerId = {0}";
                var res = serviceFinderFrontendContext.Database.ExecuteSqlCommand(sql, id);
                response.isSuccess = true;

            }
            catch (Exception ) { }
            return response;
        }

        public IResponseModel DeleteQuestion(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                var sql = "EXEC dbo.SpQuestionDel @questionId = {0}";
                var res = serviceFinderFrontendContext.Database.ExecuteSqlCommand(sql, id);
                response.isSuccess = true;

            }
            catch (Exception ) { }
            return response;
        }
    }
}