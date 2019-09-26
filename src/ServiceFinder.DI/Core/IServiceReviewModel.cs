using System;

namespace ServiceFinder.DI.Core
{
    public interface IServiceReviewModel : IBaseModel
    {
        string UserId { get; set; }
        int ServiceItemId { get; set; }
        DateTime ReviewTime { get; set; }
        int OverAllReview { get; set; }
        string ReviewTest { get; set; }
        bool EverUsed { get; set; }
        DateTime CreatedOn { get; set; }
        bool IsDeleted { get; set; }
        bool ShowOptions { get; set; }
    }
}
