namespace ServiceFinder.DI.Backend
{
    public interface IAdvancedSearchViewModel
    {
        int ServiceItemId { get; set; }
        string OriginalProfileImageName { get; set; }
        string Name { get; set; }
        string DisplayName { get; set; }
        double AverageRating { get; set; }
        int CategoryId { get; set; }
        string Description { get; set; }
    }
}
