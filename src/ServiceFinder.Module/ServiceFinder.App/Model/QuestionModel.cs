using ServiceFinder.DI.Models.App;
using System;
using System.ComponentModel.DataAnnotations;

namespace ServiceFinder.App.Model
{
    public class QuestionModel : IQuestionModel
    {
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; }
        public int ServiceItemId { get; set; }
        public string QuestionText { get; set; }
        public DateTime DateTime { get; set; }
    }
}