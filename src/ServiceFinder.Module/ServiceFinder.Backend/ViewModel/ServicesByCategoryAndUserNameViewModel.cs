using ServiceFinder.DI.Backend;

namespace ServiceFinder.Backend.ViewModel
{
    public class ServicesByCategoryAndUserNameViewModel : IServicesByCategoryAndUserNameViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string OriginalProfileImageName { get; set; }
        public string DisplayName { get; set; }
        public double AverageRating { get; set; }
    }
}
