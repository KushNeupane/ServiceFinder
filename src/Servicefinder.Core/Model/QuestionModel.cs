using ServiceFinder.DI.Core;
using System;

namespace Servicefinder.Core.Model
{
    public class QuestionModel : IQuestionModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int ServiceItemId { get; set; }
        public string QuestionText { get; set; }
        public DateTime DateTime { get; set; }
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
