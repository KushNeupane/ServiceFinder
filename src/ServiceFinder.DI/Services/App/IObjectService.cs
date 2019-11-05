using ServiceFinder.DI.ViewModel.App;
using ServiceFinder.DI.ViewModels.App;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace ServiceFinder.DI.Services.App
{
    public interface IObjectService
    {
        Task<List<IObjectViewModel>> GetAllAsync();
        Task<IObjectViewModel> AddAsync(IObjectViewModel model);
        Task<IObjectViewModel> DeleteAsync(int id);
        Task<IObjectViewModel> UpdateAsync(IObjectViewModel model, int id);
        Task<IObjectViewModel> GetByIdAsync(int id);
        Task<List<ISearchResultViewModel>> GetFilteredObject(int? categoryId, int? cityId, string searchTerm, int LoadMoreCount);
        Task<List<ICategoryServicesViewModel>> GetObjectByCategoryId(int? id, int? LoadMoreCount);
        Task<IObjectViewModel> GetObjectById(int id);
        void AddObjectVisitLog(IObjectLogViewModel model);
        Task<IEnumerable<IObjectVisitViewModel>> GetMostVisitedObjects();
    }
}
