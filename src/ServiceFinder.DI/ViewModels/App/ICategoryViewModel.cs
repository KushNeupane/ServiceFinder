namespace ServiceFinder.DI.ViewModel.App
{
    public interface ICategoryViewModel
    {
        int Id { get; set; }
        string Name { get; set; }
        bool IsActive { get; set; }
        string ImageUrl { get; set; }
        int TotalCategory { get; set; }
        int TotalService { get; set; }
    }
}
