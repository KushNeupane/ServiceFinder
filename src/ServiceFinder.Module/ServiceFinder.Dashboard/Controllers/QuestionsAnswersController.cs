using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using Service.Framework.Core.Response;
using TAM.Framework.DataAccess.Contexts.AccountManagement;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using ServiceFinder.Framework.DataAccess.Services.UserDashboard.QuestionAnswer;

namespace ServiceFinder.AccountManagement.Controllers
{
    [Route("api/questionAnswer")]
    [ApiController]
    public class QuestionsAnswerController : ControllerBase
    {
        private string currentUserId;
        private IServiceProvider _service;
        ServiceFinderDbContext serviceFinderContext;

        private IServiceQuestionAnswer questionAnswer => _service.GetService(typeof(IServiceQuestionAnswer)) as IServiceQuestionAnswer;
        private IHttpContextAccessor _httpContextAccessor => _service.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;
        private IHostingEnvironment hostingEnvironment => _service.GetService(typeof(IHostingEnvironment)) as IHostingEnvironment;


        public QuestionsAnswerController(IServiceProvider service, ServiceFinderDbContext _serviceFinderContext)
        {
            this._service = service;
            serviceFinderContext = _serviceFinderContext;
            this.currentUserId = _httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }


        [HttpPost]
        [Route("postQuestions")]
        public ResponseModel PostQuestions(Question data)
        {

            return questionAnswer.PostQuestions(data);
        }

        [HttpGet]
        [Route("getQuestionsAndAnswerById/{id}")]
        public IEnumerable<QuestionAndAnswerViewModel> GetQuestionsAndAnswerByServiceItemId(int? id)
        {
            var questions = questionAnswer.GetQuestionsAndAnswerByServiceItemId(id);
            if (questions == null)
            {
                throw new ArgumentNullException("NoQuestions at all");
            }

            return questions;
        }

        [HttpPost]
        [Route("postAnswers")]
        public ResponseModel PostAnswers(Answer data)
        {

            return questionAnswer.PostAnswers(data);
        }

        [HttpGet]
        [Route("getQuestionById/{id}")]
        public ResponseModel GetQuestionById(int? id)
        {
            return questionAnswer.GetQuestionById(id);
        }

        [HttpGet]
        [Route("getAnswerById/{id}")]
        public AnswerViewModel GetAnswerById(int? id)
        {
            return questionAnswer.GetAnswerById(id);
        }

        [HttpDelete]
        [Route("deleteAnswer/{id}")]
        public ResponseModel DeleteAnswer(int? id)
        {
            return questionAnswer.DeleteAnswer(id);
        }

        [HttpDelete]
        [Route("deleteQuestion/{id}")]
        public ResponseModel DeleteQuestion(int? id)
        {
            return questionAnswer.DeleteQuestion(id);
        }
    }
}