using ServiceFinder.DI.ViewModels.App;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.App.ViewModel
{
    public class CategoryServicesViewModel: ICategoryServicesViewModel
    {
        public string Name { get; set; }
        public string OriginalProfileImageName { get; set; }
        public int Id { get; set; }
        public string DisplayName { get; set; }
        public double AverageRating { get; set; }
        public string CategoryName { get; set; }
        public int TotalCount { get; set; }
    }
}