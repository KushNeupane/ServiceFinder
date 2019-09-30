using System;

namespace ServiceFinder.DI.Model.User
{
    public interface IBaseModel
    {
        int Id { get; set; }
        int IsActive { get; set; }
        DateTime? CreatedOn { get; set; }
    }
}
