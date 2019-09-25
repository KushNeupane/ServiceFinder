using ServiceFinder.DI.Frontend;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.FrontEnd.ViewModel
{
    public class AnswerViewModel : IAnswerViewModel
    {
        public int questionId { get; set; }
        public int answerId { get; set; }
        public string AnswerText { get; set; }
    }
}
