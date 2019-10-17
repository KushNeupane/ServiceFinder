using System;

namespace ServiceFinder.DI.Model.App
{
    public interface ICategoryModel
    {
        int Id { get; set; }
        string Name { get; set; }
        bool IsActive { get; set; }
        DateTime? CreatedOn { get; set; }
        string ImageUrl { get; set; }
    }
}
