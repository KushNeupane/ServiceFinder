using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using System.Collections.Generic;

namespace ServiceFinder.Framework.DataAccess.Services.UserDashboard.QuestionAnswer
{
    public interface IServiceQuestionAnswer
    {
        ResponseModel PostQuestions(Question model);        
        IEnumerable<QuestionAndAnswerViewModel> GetQuestionsAndAnswerByServiceItemId(int? id);
        ResponseModel PostAnswers(Answer model);
        ResponseModel GetQuestionById(int? id);
        AnswerViewModel GetAnswerById(int? id);
        ResponseModel DeleteAnswer(int? id);
        ResponseModel DeleteQuestion(int? id);
    }
}
