namespace ServiceFinder.DI.Core
{
    public interface IServiceItemViewLogModel : IBaseModel
    {
        string UserId { get; set; }
        int ServiceItemId { get; set; }
        int ViewCount { get; set; }
    }
}
