using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using System.Collections.Generic;

namespace ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement
{
    public interface IServiceManagement
    {

        IEnumerable<CategoryAndServiceItemViewModel> GetCategories();

        IEnumerable<ServiceItemEntity> GetServices();

        ServiceItemEntity GetServiceByServiceItemId(int? Id);

        IEnumerable<ServiceItemEntity> GetServicesByCategoryId(int? Id);

        void DeleteService(int? Id);

        ServiceItemEntity UpdateService(int? id, ServiceItemEntity model, List<ServiceItemImageEntity> image);

        ServiceItemEntity AddService(ServiceItemEntity model, List<ServiceItemImageEntity> image);

        IEnumerable<ServiceItemImageEntity> GetImageByServiceItemImageId(int? Id);

        void DeleteImageByServiceItemImageId(int? Id);

        IEnumerable<ServiceItemEntity> GetServicesByUserId();

        ResponseModel AddReview(ServiceReviewEntity model);

        List<ServiceReviewEntity> GetReviewByServiceId(int id);

        List<ServiceReviewEntity> GetReviewByUserId();

    }
}
