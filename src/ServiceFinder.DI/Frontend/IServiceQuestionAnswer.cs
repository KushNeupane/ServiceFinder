using ServiceFinder.DI.Core;
using System.Collections.Generic;


namespace ServiceFinder.DI.Frontend
{
    public interface IServiceQuestionAnswer
    {
        IResponseModel PostQuestions(IQuestionModel model);
        IEnumerable<IQuestionAndAnswerViewModel> GetQuestionsAndAnswerByServiceItemId(int? id);
        IResponseModel PostAnswers(IAnswerModel model);
        IResponseModel GetQuestionById(int? id);
        IAnswerViewModel GetAnswerById(int? id);
        IResponseModel DeleteAnswer(int? id);
        IResponseModel DeleteQuestion(int? id);
    }
}
