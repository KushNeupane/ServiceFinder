using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Framework.Model.ViewModels.ServiceManagement
{
    public class AdvancedSearchViewModel
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
