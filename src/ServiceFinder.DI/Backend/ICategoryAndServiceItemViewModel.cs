using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.DI.Backend
{
    public interface ICategoryAndServiceItemViewModel
    {
         int Id { get; set; }
         string Name { get; set; }
         int TotalService { get; set; }
         string ImageURL { get; set; }
         string SystemDefinedImageName { get; set; }
    }
}
