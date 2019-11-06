using System;

namespace ServiceFinder.DI.ViewModels.App
{
    public interface IQuestionViewModel
    {
         int Id { get; set; }
         string UserId { get; set; }
         int ServiceItemId { get; set; }
         string QuestionText { get; set; }
         DateTime DateTime { get; set; }
    }
}