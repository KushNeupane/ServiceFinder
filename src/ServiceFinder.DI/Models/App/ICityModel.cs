using System;

namespace ServiceFinder.DI.Model.App
{
    public interface ICityModel
    {
        int Id { get; set; }
        string Name { get; set; }
        bool IsActive { get; set; }
        DateTime? CreatedOn { get; set; }
    }
}
