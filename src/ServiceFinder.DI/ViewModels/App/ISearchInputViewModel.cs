namespace ServiceFinder.DI.ViewModel.App
{
    public interface ISearchInputViewModel
    {
        int? CategoryId { get; set; }
        int? CityId { get; set; }
        string SearchTerm { get; set; }
        int LoadMoreCount { get; set; }
    }
}
