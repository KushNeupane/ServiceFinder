using System;

namespace ServiceFinder.Framework.Model.ViewModels.ServiceManagement
{
    public class QuestionAndAnswerViewModel
    {
        public string userName { get; set; }
        public string questionText { get; set; }
        public int questionId { get; set; }
        public int? answerId { get; set; }
        public string userId { get; set; }
        public int serviceItemId { get; set; }
        public string AnswerText { get; set; }
        public DateTime creationDate { get; set; }
        public string providerId { get; set; }
        public bool ShowOptions { get; set; }
        public bool EditOptions { get; set; }
        public bool FirstQuestion { get; set; }
    }
}