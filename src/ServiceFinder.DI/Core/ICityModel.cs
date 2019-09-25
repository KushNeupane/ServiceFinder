using System;

namespace ServiceFinder.DI.Core
{
    public interface ICityModel : IBaseModel
    {
        string Name { get; set; }
        string Province { get; set; }
        bool Status { get; set; }
        string Description { get; set; }
        DateTime CreatedOn { get; set; }
    }
}
