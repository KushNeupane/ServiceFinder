using System;
using ServiceFinder.DI.ViewModels.App;

namespace ServiceFinder.App.ViewModel
{
    public class QuestionViewModel : IQuestionViewModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int ServiceItemId { get; set; }
        public string QuestionText { get; set; }
        public DateTime DateTime { get; set; }
    }
}
