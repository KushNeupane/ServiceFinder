using System;

namespace ServiceFinder.DI.Core
{
    public interface ISubscriberModel : IBaseModel
    {
        string Email { get; set; }
        DateTime CreatedOn { get; set; }
    }
}
