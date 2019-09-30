using System;

namespace ServiceFinder.DI.Model.App
{
    public interface IObjectModel
    {
        int Id { get; set; }
        int CityId { get; set; }
        int CategoryId { get; set; }
        string Name { get; set; }
        bool IsActive { get; set; }
        DateTime? CreatedOn { get; set; }
    }
}
