using ServiceFinder.DI.Backend;

namespace ServiceFinder.Backend.ViewModel
{
    public class SearchViewModel : ISearchViewModel
    {
        public int? CategoryId { get; set; }
        public int? CityId { get; set; }
        public string SearchTerm { get; set; }
        public int LoadMoreCount { get; set; }
    }
}
