using ServiceFinder.DI.ViewModel.App;

namespace ServiceFinder.Main.ViewModel
{
    public class CategoryViewModel : ICategoryViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public string ImageUrl { get; set; }
        public int TotalCategory { get; set; }
        public int TotalService { get; set; }
       
    }
}
