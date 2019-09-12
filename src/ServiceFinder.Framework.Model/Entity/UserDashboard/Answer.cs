using System;
using System.ComponentModel.DataAnnotations.Schema;
using TAM.Framework.Model.Models;

namespace ServiceFinder.Framework.Model.Entity.UserDashboard
{
    public class Answer : BaseEntity
    {
        public int QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public Question ServiceItem { get; set; }

        public string AnswerText { get; set; }

        public DateTime DateTime { get; set; }

    }
}
