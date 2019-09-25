using ServiceFinder.DI.Core;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Servicefinder.Core.Model
{
    public class AnswerModel : IAnswerModel
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public QuestionModel ServiceItem { get; set; }
        public string AnswerText { get; set; }
        public DateTime DateTime { get; set; }
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
