using ServiceFinder.DI.Core;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Servicefinder.Core.Model
{
    public class ServiceItemModel : IServiceItemModel
    {
        public int Id { get; set; }

        //Including ForeignKey form CategoryTable
        public int? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public CategoryModel Category { get; set; }

        //Including ForeignKey from ApplicationUserEntity table

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUserModel ApplicationUser { get; set; }

        //Including ForeignKey from CityTable

        public int? CityId { get; set; }
        [ForeignKey("CityId")]
        public CityModel City { get; set; }
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
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
