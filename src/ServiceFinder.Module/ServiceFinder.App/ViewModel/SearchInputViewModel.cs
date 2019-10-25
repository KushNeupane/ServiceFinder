using ServiceFinder.DI.ViewModel.App;

namespace ServiceFinder.App.ViewModel
{
    public class SearchInputViewModel : ISearchInputViewModel
    {
        public int? CategoryId { get; set; }
        public int? CityId { get; set; }
        public string SearchTerm { get; set; }
        public int LoadMoreCount { get; set; }
    }
}
