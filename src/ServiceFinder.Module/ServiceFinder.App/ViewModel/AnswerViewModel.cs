using System;
using ServiceFinder.DI.ViewModels.App;

namespace ServiceFinder.App.ViewModel
{
    public class AnswerViewModel : IAnswerViewModel
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string AnswerText { get; set; }
        public DateTime DateTime { get; set; }
    }
}
