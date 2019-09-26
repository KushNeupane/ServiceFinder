using ServiceFinder.DI.Core;
using System;

namespace Servicefinder.Core.Model
{
    public class ServiceReviewModel : IServiceReviewModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int ServiceItemId { get; set; }
        public DateTime ReviewTime { get; set; }
        public int OverAllReview { get; set; }
        public string ReviewTest { get; set; }
        public bool EverUsed { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public bool IsDeleted { get; set; } = false;
        public bool ShowOptions { get; set; } = false;
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
