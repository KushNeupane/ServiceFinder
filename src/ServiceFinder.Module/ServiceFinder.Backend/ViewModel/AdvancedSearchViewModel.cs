using ServiceFinder.DI.Backend;

namespace ServiceFinder.Backend.ViewModel
{
    public class AdvancedSearchViewModel : IAdvancedSearchViewModel
    {
        public int ServiceItemId { get; set; }
        public string OriginalProfileImageName { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public double AverageRating { get; set; }
        public int CategoryId { get; set; }
        public string Description { get; set; }
    }
}
