using ServiceFinder.DI.Backend;

namespace ServiceFinder.Backend.ViewModel
{
    public class CategoryAndServiceItemViewModel : ICategoryAndServiceItemViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int TotalService { get; set; }
        public string ImageURL { get; set; }
        public string SystemDefinedImageName { get; set; }

    }
}
