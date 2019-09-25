using System;

namespace ServiceFinder.DI.Frontend
{
    public interface IQuestionAndAnswerViewModel
    {
        string userName { get; set; }
        string questionText { get; set; }
        int? answerId { get; set; }
        string userId { get; set; }
        int serviceItemId { get; set; }
        string AnswerText { get; set; }
        DateTime creationDate { get; set; }
        string providerId { get; set; }
        bool ShowOptions { get; set; }
        bool EditOptions { get; set; }
        bool FirstQuestion { get; set; }
    }
}