using ServiceFinder.DI.ViewModel.App;
using ServiceFinder.DI.ViewModels.App;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServiceFinder.DI.Services.App
{
    public interface IObjectService
    {
        Task<List<IObjectViewModel>> GetAllAsync();
        Task<IObjectViewModel> AddAsync(IObjectViewModel model);
        Task<IObjectViewModel> DeleteAsync(int id);
        Task<IObjectViewModel> UpdateAsync(IObjectViewModel model, int id);
        Task<IObjectViewModel> GetByIdAsync(int id);
        Task<List<ICategoryServicesViewModel>> GetServicesByCategoryId(int? id, int? LoadMoreCount);
        
    }
}
