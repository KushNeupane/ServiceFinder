using ServiceFinder.DI.Response.Core;
using ServiceFinder.DI.ViewModels.App;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServiceFinder.DI.Services.App
{
    public interface IQuestionAnswerService
    {
        Task<IResponseModel> AddQuestions(IQuestionViewModel viewmodel);
        Task<IResponseModel> AddAnswers(IAnswerViewModel viewmodel);
        List<IQuestionAnswerViewModel> GetQuestionAnswerByObjectId(int? id);
        Task<IResponseModel> GetQuestionById(int id);
        Task<IAnswerViewModel> GetAnswerById(int id);
        Task<IResponseModel> DeleteQuestion(int id);
        Task<IResponseModel> DeleteAnswer(int id);
    }
}
