using ServiceFinder.DI.Core;

namespace ServiceFinder.DI.Backend
{
    public interface IServiceViewModel : IBaseModel
    {
        object serviceData { get; set; }

        bool ShowReview { get; set; } 

        bool LoggedIn { get; set; } 
    }
}
