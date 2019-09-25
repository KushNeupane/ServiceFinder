using ServiceFinder.DI.Backend;
using System;

namespace ServiceFinder.DI.Core
{
    public interface IServiceItemImageModel : IBaseModel
    {
        int ServiceItemId { get; set; }
        string ImageURL { get; set; }
        string OriginalImageName { get; set; }
        string SystemDefinedImageName { get; set; }
        DateTime? CreatedOn { get; set; }
        bool IsDeleted { get; set; }
    }
}
