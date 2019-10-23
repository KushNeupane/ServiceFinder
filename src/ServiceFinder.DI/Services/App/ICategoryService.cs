using ServiceFinder.DI.ViewModel.App;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServiceFinder.DI.Services.App
{
    public interface ICategoryService
    {
        Task<List<ICategoryViewModel>> GetAllAsync();
        Task<ICategoryViewModel> AddAsync(ICategoryViewModel viewModel);
        Task<ICategoryViewModel> GetByIdAsync(int id);
        Task<ICategoryViewModel> UpdateAsync(ICategoryViewModel viewModel, int id);
        Task<ICategoryViewModel> DeleteAsync(int id);
        List<ICategoryViewModel> GetCatergoryAndServices(int? Count);

    }
}
