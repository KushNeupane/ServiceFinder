using Microsoft.AspNetCore.Mvc;
using Servicefinder.Core.Response;
using ServiceFinder.App.ViewModel;
using ServiceFinder.DI.Services.App;
using System;
using System.Threading.Tasks;

namespace ServiceFinder.App.Controllers
{
    [Route("questionAnswers")]
    public class QuestionAnswerController :Controller
    {
        IServiceProvider service = null;
        IQuestionAnswerService qaService => service.GetService(typeof(IQuestionAnswerService)) as IQuestionAnswerService;
        public QuestionAnswerController(IServiceProvider _service) => service = _service;

        [HttpPost]
        [Route("add-questions")]
        public async Task<ResponseModel> AddQuestions([FromBody]QuestionViewModel model)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await qaService.AddQuestions(model);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [HttpPost]
        [Route("add-answers")]
        public async Task<ResponseModel> AddAnswers([FromBody]AnswerViewModel model)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await qaService.AddAnswers(model);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("get-questionsAnswers/{id}")]
        public  ResponseModel GetQuestionAnswerByObjectId(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data =  qaService.GetQuestionAnswerByObjectId(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("delete-question/{id}")]
        public async Task<ResponseModel> DeleteQuestions(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await qaService.DeleteQuestion(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("delete-answer/{id}")]
        public async Task<ResponseModel> DeleteAnswers(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await qaService.DeleteAnswer(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("get-question/{id}")]
        public async Task<ResponseModel> GetQuestionById(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await qaService.GetQuestionById(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;

        }

        [Route("get-answer/{id}")]
        public async Task<ResponseModel> GetAnswerById(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await qaService.GetAnswerById(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;

        }
    }
}
