using ServiceFinder.DI.Backend;

namespace ServiceFinder.Backend.ViewModel
{
    public class ServiceVisitViewModel : IServiceVisitViewModel
    {
        public int ServiceItemId { get; set; }
        public string OriginalProfileImageName { get; set; }
        public string Name { get; set; }
        public int TotalView { get; set; }
        public string DisplayName { get; set; }
        public double AverageRating { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
