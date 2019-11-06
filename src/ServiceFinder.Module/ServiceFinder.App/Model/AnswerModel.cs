using ServiceFinder.DI.Models.App;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ServiceFinder.App.Model
{
    public class AnswerModel :IAnswerModel
    {
        [Key]
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string AnswerText { get; set; }
        public DateTime DateTime { get; set; }
    }
}