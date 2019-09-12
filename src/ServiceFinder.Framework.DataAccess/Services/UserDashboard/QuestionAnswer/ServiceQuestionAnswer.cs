using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using System;
using System.Collections.Generic;
using System.Linq;
using TAM.Framework.DataAccess.Contexts.AccountManagement;

namespace ServiceFinder.Framework.DataAccess.Services.UserDashboard.QuestionAnswer
{
    public class ServiceQuestionAnswer : IServiceQuestionAnswer
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        ServiceFinderDbContext serviceFinderContext;
        private string currentUserId;

        public ServiceQuestionAnswer(ServiceFinderDbContext _serviceFinderContext, IHttpContextAccessor httpContextAccessor)
        {
            this.serviceFinderContext = _serviceFinderContext;
            this._httpContextAccessor = httpContextAccessor;
            this.currentUserId = _httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }

        //AddQuestions
        public ResponseModel PostQuestions(Question model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            var sql = "EXEC dbo.PostQuestionSp @UserId = {0}, @ServiceItemId = {1}, @QuestionText = {2}, @QuestionId = {3}";
            var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, currentUserId, model.ServiceItemId, model.QuestionText, model.Id);
            response.isSuccess = true;
            return response;

        }
        //GetQuestions and answers
        public IEnumerable<QuestionAndAnswerViewModel> GetQuestionsAndAnswerByServiceItemId(int? id)
        {

            List<QuestionAndAnswerViewModel> model = new List<QuestionAndAnswerViewModel>();
            if (serviceFinderContext != null)
            {
                model = serviceFinderContext.getQuestionsByServiceItemId.FromSql("EXEC dbo.SpGetAnswersByServiceItemIdSel @ServiceItemId =" + id + "").ToList();

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
        public ResponseModel PostAnswers(Answer model)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            var sql = "EXEC dbo.SpAnswerPostSel @AnswerText = {0}, @QuestionId = {1}, @AnswerId = {2}";
            var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, model.AnswerText, model.QuestionId, model.Id);
            return response;
        }

        public ResponseModel GetQuestionById(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                Question responseData = serviceFinderContext.question.FromSql($"EXEC dbo.SpGetQuestionByQuestionId @questionId = {id}").FirstOrDefault();
                response.data = responseData;
                response.isSuccess = true;

            }catch(Exception ex) { }
            return response;
        }

        public AnswerViewModel GetAnswerById(int? id)
        {
            AnswerViewModel responseData = new AnswerViewModel();
            try
            {
                responseData = serviceFinderContext.getAnswers.FromSql($"EXEC dbo.SpGetAnswerByAnswerId @answerId = {id}").FirstOrDefault();
            }
            catch (Exception ex) { }
            return responseData;
        }

        public ResponseModel DeleteAnswer(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                var sql = "EXEC dbo.SpDeleteAnswer @answerId = {0}";
                var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, id);
                response.isSuccess = true;

            }
            catch(Exception ex){}
            return response;
        }

        public ResponseModel DeleteQuestion(int? id)
        {
            ResponseModel response = new ResponseModel() { errors = new List<string>() };
            try
            {
                var sql = "EXEC dbo.SpQuestionDel @questionId = {0}";
                var res = serviceFinderContext.Database.ExecuteSqlCommand(sql, id);
                response.isSuccess = true;

            }
            catch (Exception ex) { }
            return response;
        }
    }
}