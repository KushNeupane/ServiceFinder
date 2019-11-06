using System;

namespace ServiceFinder.DI.ViewModels.App
{
    public interface IQuestionAnswerViewModel
    {
         string userName { get; set; }
         string questionText { get; set; }
         int questionId { get; set; }
         int? answerId { get; set; }
         string userId { get; set; }
         int serviceItemId { get; set; }
         string AnswerText { get; set; }
         DateTime CreationDate { get; set; }
         string providerId { get; set; }
         bool ShowOptions { get; set; }
         bool EditOptions { get; set; }
         bool FirstQuestion { get; set; }
    }
}
