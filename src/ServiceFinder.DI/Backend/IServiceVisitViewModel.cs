namespace ServiceFinder.DI.Backend
{
    public interface IServiceVisitViewModel
    {
        int ServiceItemId { get; set; }
        string OriginalProfileImageName { get; set; }
        string Name { get; set; }
        int TotalView { get; set; }
        string DisplayName { get; set; }
        double AverageRating { get; set; }
        int CategoryId { get; set; }
        string CategoryName { get; set; }
    }
}
