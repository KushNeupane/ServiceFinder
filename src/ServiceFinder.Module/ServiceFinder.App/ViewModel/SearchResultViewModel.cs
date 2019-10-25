using ServiceFinder.DI.ViewModel.App;

namespace ServiceFinder.App.ViewModel
{
    public class SearchResultViewModel : ISearchResultViewModel
    {
        public int ServiceItemId { get; set; }
        public string OriginalProfileImageName { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public double AverageRating { get; set; }
        public int CategoryId { get; set; }
        public string Description { get; set; }
        public int LoadMoreCount { get; set; }
        //public int TotalCount { get; set; }
    }
}
