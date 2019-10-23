using System;

namespace ServiceFinder.DI.ViewModel.App
{
    public interface IObjectViewModel
    {
         int Id { get; set; }
         string UserId { get; set; }

         int CityId { get; set; }

         int CategoryId { get; set; }

         string Name { get; set; }
         string CompanyName { get; set; }
         string WebLink { get; set; }
         string MapLink { get; set; }
         string Email { get; set; }
         string PhoneNumber { get; set; }
         string AdditionalEmail { get; set; }
         string AdditionalPhoneNumber { get; set; }
         TimeSpan? ServiceOpenTime { get; set; }
         TimeSpan? ServiceCloseTime { get; set; }
         bool Status { get; set; }
         string Description { get; set; }
         string ProfileImageUrl { get; set; }
         string OriginalProfileImageName { get; set; }
         string CoverImageUrl { get; set; }
         string OriginalCoverImageName { get; set; }
         bool IsActive { get; set; }
         DateTime? CreatedOn { get; set; }
    }
}
