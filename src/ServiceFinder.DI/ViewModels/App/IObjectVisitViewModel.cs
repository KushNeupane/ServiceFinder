using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.DI.ViewModels.App
{
    public interface IObjectVisitViewModel
    {
         int ObjectId { get; set; }
         string OriginalProfileImageName { get; set; }
         string Name { get; set; }
         int TotalView { get; set; }
         string DisplayName { get; set; }
         double AverageRating { get; set; }
         int CategoryId { get; set; }
         string CategoryName { get; set; }
    }
}
