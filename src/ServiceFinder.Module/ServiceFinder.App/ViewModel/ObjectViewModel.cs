using ServiceFinder.DI.ViewModel.App;
using System;

namespace ServiceFinder.Main.ViewModel
{
    public class ObjectViewModel : IObjectViewModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int CityId { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public string WebLink { get; set; }
        public string MapLink { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string AdditionalEmail { get; set; }
        public string AdditionalPhoneNumber { get; set; }
        public TimeSpan? ServiceOpenTime { get; set; }
        public TimeSpan? ServiceCloseTime { get; set; }
        public bool Status { get; set; }
        public string Description { get; set; }
        public string ProfileImageUrl { get; set; }
        public string OriginalProfileImageName { get; set; }
        public string CoverImageUrl { get; set; }
        public string OriginalCoverImageName { get; set; }
        public bool IsActive { get; set; }
        public bool LoggedIn { get; set; }
        public bool ShowReview { get; set; }
        public object AppUser { get; set; }
        public object City { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
