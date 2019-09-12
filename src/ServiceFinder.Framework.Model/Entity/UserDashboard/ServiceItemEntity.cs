using System;
using TAM.Framework.Model.Models;
using System.ComponentModel.DataAnnotations.Schema;
using TAM.Framework.Model.Models.AccountManagement;
using ServiceFinder.Framework.Model.Entity.UserDashboard;

namespace ServiceFinder.Framework.Model.Models.UserDashboard
{
	public class ServiceItemEntity : BaseEntity
	{
		//public int ServiceItemId { get; set; }

		//Including ForeignKey form CategoryTable
		public int? CategoryId { get; set; }
		[ForeignKey("CategoryId")]
		public CategoryEntity Category { get; set; }

		//Including ForeignKey from ApplicationUserEntity table
      
		public string UserId { get; set; }
		[ForeignKey("UserId")]
		public ApplicationUserEntity ApplicationUser { get; set; }

        //Including ForeignKey from CityTable

        public int? CityId { get; set; }
        [ForeignKey("CityId")]
        public CityEntity City { get; set; }

        public string Name { get; set; }

		public string Email { get; set; }
		public string PhoneNumber { get; set; }

		public TimeSpan? ServiceOpenTime { get; set; }
		public TimeSpan? ServiceCloseTime { get; set; }
		public bool Status { get; set; }
		public string Description { get; set; }

        //for service profile image
        public string ProfileImageUrl { get; set; }
        public string OriginalProfileImageName { get; set; }
        //for service cover image
        public string CoverImageUrl { get; set; }
        public string OriginalCoverImageName { get; set; }

    }
}