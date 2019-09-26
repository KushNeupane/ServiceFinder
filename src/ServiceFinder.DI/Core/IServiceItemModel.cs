using System;

namespace ServiceFinder.DI.Core
{
    public interface IServiceItemModel : IBaseModel
    {
        int? CategoryId { get; set; }
        string UserId { get; set; }
        int? CityId { get; set; }
        string Name { get; set; }
        string Email { get; set; }
        string PhoneNumber { get; set; }
        TimeSpan? ServiceOpenTime { get; set; }
        TimeSpan? ServiceCloseTime { get; set; }
        bool Status { get; set; }
        string Description { get; set; }
        string ProfileImageUrl { get; set; }
        string OriginalProfileImageName { get; set; }
        string CoverImageUrl { get; set; }
        string OriginalCoverImageName { get; set; }
    }
}
