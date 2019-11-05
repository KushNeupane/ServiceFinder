using ServiceFinder.DI.ViewModels.App;
using System;

namespace ServiceFinder.App.ViewModel
{
    public class ReviewViewModel: IReviewViewModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int ObjectId { get; set; }
        public DateTime ReviewTime { get; set; }
        public int OverAllReview { get; set; }
        public string ReviewTest { get; set; }
        public bool EverUsed { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public bool IsDeleted { get; set; } = false;
        public bool ShowOptions { get; set; } = false;
        public object AppUser { get; set; }

    }
}
