using ServiceFinder.Framework.Model.Models.UserDashboard;
using System.ComponentModel.DataAnnotations.Schema;
using TAM.Framework.Model.Models;
using TAM.Framework.Model.Models.AccountManagement;

namespace ServiceFinder.Framework.Model.Entity.UserDashboard
{
    public class ServiceItemViewLog : BaseEntity
    {
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUserEntity ApplicationUser { get; set; }

        public int ServiceItemId { get; set; }
        [ForeignKey("ServiceItemId")]
        public ServiceItemEntity ServiceItem { get; set; }

        public int ViewCount { get; set; }
    }
}
