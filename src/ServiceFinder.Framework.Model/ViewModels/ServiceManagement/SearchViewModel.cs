using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Framework.Model.ViewModels.ServiceManagement
{
    public class SearchViewModel
    {
        public int? CategoryId { get; set; }
        public int? CityId { get; set; }
        public string SearchTerm { get; set; }
        public int LoadMoreCount { get; set; }
    }
}
