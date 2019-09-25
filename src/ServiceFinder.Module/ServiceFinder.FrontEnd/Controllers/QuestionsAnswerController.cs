using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Servicefinder.Core.Response;
using ServiceFinder.DI.Core;
using ServiceFinder.DI.Frontend;
using ServiceFinder.FrontEnd.Context;
using ServiceFinder.FrontEnd.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.FrontEnd.Controllers
{
    [Route("api/questionAnswer")]
    [ApiController]
    public class QuestionsAnswerController : ControllerBase
    {
        private string currentUserId;
        private IServiceProvider _service;
        ServiceFinderFrontendContext serviceFinderFrontendContext;

        private IServiceQuestionAnswer questionAnswer => _service.GetService(typeof(IServiceQuestionAnswer)) as IServiceQuestionAnswer;
        private IHttpContextAccessor _httpContextAccessor => _service.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;
        private IHostingEnvironment hostingEnvironment => _service.GetService(typeof(IHostingEnvironment)) as IHostingEnvironment;


        public QuestionsAnswerController(IServiceProvider service, ServiceFinderFrontendContext _serviceFinderFrontendContext)
        {
            this._service = service;
            serviceFinderFrontendContext = _serviceFinderFrontendContext;
            this.currentUserId = _httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }


        [HttpPost]
        [Route("postQuestions")]
        public IResponseModel PostQuestions(IQuestionModel data)
        {

            return questionAnswer.PostQuestions(data);
        }

        [HttpGet]
        [Route("getQuestionsAndAnswerById/{id}")]
        public IEnumerable<IQuestionAndAnswerViewModel> GetQuestionsAndAnswerByServiceItemId(int? id)
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
        public IResponseModel PostAnswers(IAnswerModel data)
        {

            return questionAnswer.PostAnswers(data);
        }

        [HttpGet]
        [Route("getQuestionById/{id}")]
        public IResponseModel GetQuestionById(int? id)
        {
            return questionAnswer.GetQuestionById(id);
        }

        [HttpGet]
        [Route("getAnswerById/{id}")]
        public IAnswerViewModel GetAnswerById(int? id)
        {
            return questionAnswer.GetAnswerById(id);
        }

        [HttpDelete]
        [Route("deleteAnswer/{id}")]
        public IResponseModel DeleteAnswer(int? id)
        {
            return questionAnswer.DeleteAnswer(id);
        }

        [HttpDelete]
        [Route("deleteQuestion/{id}")]
        public IResponseModel DeleteQuestion(int? id)
        {
            return questionAnswer.DeleteQuestion(id);
        }
    }
}