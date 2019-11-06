using System;

namespace ServiceFinder.DI.Models.App
{
    public interface IQuestionModel
    {
        int Id { get; set; }
        string UserId { get; set; }
        int ServiceItemId { get; set; }
        string QuestionText { get; set; }
        DateTime DateTime { get; set; }
    }
}
