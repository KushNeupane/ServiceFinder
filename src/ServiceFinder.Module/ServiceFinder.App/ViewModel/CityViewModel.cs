using System;
using ServiceFinder.DI.ViewModel.App;

namespace ServiceFinder.Main.ViewModel
{
    public class CityViewModel : ICityViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
