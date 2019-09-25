using ServiceFinder.DI.Core;
using System;

namespace Servicefinder.Core.Model
{
    public class SubscriberModel : ISubscriberModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
