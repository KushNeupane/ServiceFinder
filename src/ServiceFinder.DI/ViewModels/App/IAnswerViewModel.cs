using System;

namespace ServiceFinder.DI.ViewModels.App
{
    public interface IAnswerViewModel
    {
         int Id { get; set; }
         int QuestionId { get; set; }
         string AnswerText { get; set; }
         DateTime DateTime { get; set; }
    }
}
