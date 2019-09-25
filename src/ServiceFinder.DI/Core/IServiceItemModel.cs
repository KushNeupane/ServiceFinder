using System;

namespace ServiceFinder.DI.Core
{
    public interface IServiceItemModel : IBaseModel
    {
        //Including ForeignKey form CategoryTable
        int? CategoryId { get; set; }
        //Including ForeignKey from ApplicationUserEntity table
        string UserId { get; set; }
        ApplicationUserModel ApplicationUser { get; set; }
        //Including ForeignKey from CityTable
        int? CityId { get; set; }
        string Name { get; set; }
        string Email { get; set; }
        string PhoneNumber { get; set; }
        TimeSpan? ServiceOpenTime { get; set; }
        TimeSpan? ServiceCloseTime { get; set; }
        bool Status { get; set; }
        string Description { get; set; }
        //for service profile image
        string ProfileImageUrl { get; set; }
        string OriginalProfileImageName { get; set; }
        //for service cover image
        string CoverImageUrl { get; set; }
        string OriginalCoverImageName { get; set; }
    }
}
