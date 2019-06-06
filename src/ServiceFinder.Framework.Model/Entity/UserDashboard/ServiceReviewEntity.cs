using ServiceFinder.Framework.Model.Models.UserDashboard;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TAM.Framework.Model.Models;
using TAM.Framework.Model.Models.AccountManagement;

namespace ServiceFinder.Framework.Model.Entity.UserDashboard
{
    public class ServiceReviewEntity : BaseEntity
    {
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUserEntity ApplicationUser { get; set; }
        public int ServiceItemId { get; set; }
        [ForeignKey("ServiceItemId")]
        public ServiceItemEntity ServiceItem { get; set; }
        public DateTime ReviewTime { get; set; }
        public int OverAllReview { get; set; }
        public string ReviewTest { get; set; }
        public bool EverUsed { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public bool IsDeleted { get; set; } = false;




    }
}
