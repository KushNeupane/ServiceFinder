using ServiceFinder.DI.Core;
using System.Collections.Generic;

namespace ServiceFinder.DI.Backend
{
    public interface IServiceManagement
    {
        IEnumerable<ICategoryModel> GetCategories();

        IEnumerable<IServiceVisitViewModel> GetTotalVisitedServiceCount();

        IEnumerable<IServiceItemModel> GetServices();

        IServiceViewModel GetServiceByServiceItemId(int? Id);

        IEnumerable<IServicesByCategoryAndUserNameViewModel> GetServicesByCategoryId(int? id);

        void DeleteService(int? Id);

        IServiceItemModel UpdateService(int? id, IServiceItemModel model, List<IServiceItemImageModel> image);

        IServiceItemModel AddService(IServiceItemModel model, List<IServiceItemImageModel> image);

        IEnumerable<IServiceItemImageModel> GetImageByServiceItemImageId(int? Id);

        void DeleteImageByServiceItemImageId(int? Id);

        IEnumerable<IServiceItemModel> GetServicesByUserId();

        IResponseModel AddReview(IServiceReviewModel model);

        List<IServiceReviewModel> GetReviewByServiceId(int id);

        List<IServiceReviewModel> GetReviewByUserId();

        void DeleteReview(int? Id);

        IResponseModel UpdateReview(int? id, IServiceReviewModel model);

        void addServiceVisitLog(IServiceItemViewLogModel model);

        IEnumerable<ICategoryAndServiceItemViewModel> GetCategoriesWithServiceCount(int? id);

        List<ICityModel> GetCities();

        List<IAdvancedSearchViewModel> GetFilteredService(int? categoryId, int? cityId, string searchTerm, int id);

        IResponseModel AddSubsciber(string email);

    }
}
