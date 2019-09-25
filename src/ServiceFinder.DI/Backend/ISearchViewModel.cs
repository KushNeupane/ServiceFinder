namespace ServiceFinder.DI.Backend
{
    public interface ISearchViewModel
    {
        int? CategoryId { get; set; }
        int? CityId { get; set; }
        string SearchTerm { get; set; }
        int LoadMoreCount { get; set; }
    }
}
