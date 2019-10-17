using ServiceFinder.DI.ViewModel.App;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServiceFinder.DI.Services.App
{
    public interface ICityService
    {
        Task<List<ICityViewModel>> GetAllAsync();
        Task<ICityViewModel> AddAsync(ICityViewModel viewModel);
        Task<ICityViewModel> GetByIdAsync(int id);
        Task<ICityViewModel> UpdateAsync(ICityViewModel viewModel, int id);
        Task<ICityViewModel> DeleteAsync(int id);
    }
}
