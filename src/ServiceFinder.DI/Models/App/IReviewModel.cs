using System;

namespace ServiceFinder.DI.Models.App
{
    public interface IReviewModel
    {
        int Id { get; set; }
        string UserId { get; set; }
        int ObjectId { get; set; }
        DateTime ReviewTime { get; set; }
        int OverAllReview { get; set; }
        string ReviewTest { get; set; }
        bool EverUsed { get; set; }
        DateTime CreatedOn { get; set; }
        bool IsDeleted { get; set; }
        bool ShowOptions { get; set; }
    }
}
