namespace ServiceFinder.DI.ViewModels.App
{
    public interface ICategoryServicesViewModel
    {
         string Name { get; set; }
         string OriginalProfileImageName { get; set; }
         int Id { get; set; }
         string DisplayName { get; set; }
         double AverageRating { get; set; }
         string CategoryName { get; set; }
         int TotalCount { get; set; }
    }
}