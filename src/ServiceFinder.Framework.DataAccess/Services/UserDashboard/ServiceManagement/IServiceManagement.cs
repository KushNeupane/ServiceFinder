using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Entity.AdminDashboard;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using System.Collections.Generic;

namespace ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement
{
  public interface IServiceManagement
  {

   
    IEnumerable<CategoryEntity> GetCategories();

    //to get the total count of visited services
    IEnumerable<ServiceVisitViewModel> GetTotalVisitedServiceCount();

    IEnumerable<ServiceItemEntity> GetServices();

    ServiceViewModel GetServiceByServiceItemId(int? Id);

    IEnumerable<ServicesByCategoryAndUserNameViewModel> GetServicesByCategoryId(int? id);

    void DeleteService(int? Id);

    ServiceItemEntity UpdateService(int? id, ServiceItemEntity model, List<ServiceItemImageEntity> image);

    ServiceItemEntity AddService(ServiceItemEntity model, List<ServiceItemImageEntity> image);

    IEnumerable<ServiceItemImageEntity> GetImageByServiceItemImageId(int? Id);

    void DeleteImageByServiceItemImageId(int? Id);

    IEnumerable<ServiceItemEntity> GetServicesByUserId();

    ResponseModel AddReview(ServiceReviewEntity model);

    List<ServiceReviewEntity> GetReviewByServiceId(int id);

    List<ServiceReviewEntity> GetReviewByUserId();

    void DeleteReview(int? Id);

    ResponseModel UpdateReview(int? id, ServiceReviewEntity model);

    void addServiceVisitLog(ServiceItemViewLog model);

    IEnumerable<CategoryAndServiceItemViewModel> GetCategoriesWithServiceCount(int? id);

    List<CityEntity> GetCities();

    List<AdvancedSearchViewModel> GetFilteredService(int? categoryId, int? cityId, string searchTerm, int id);

    ResponseModel AddSubsciber(string email);

  }
}
