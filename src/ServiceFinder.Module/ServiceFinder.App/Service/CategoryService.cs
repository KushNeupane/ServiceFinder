using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModel.App;
using ServiceFinder.Main.Model;

namespace ServiceFinder.Main.Service
{
    public class CategoryService : ICategoryService
    {
        IServiceProvider service = null;
        AppDbContext appDbContext = null;
        IMapper mapper => service.GetService(typeof(IMapper)) as IMapper;

        public CategoryService(IServiceProvider _service, AppDbContext _appDbContext)
        {
            service = _service;
            appDbContext = _appDbContext;
        }

        public async Task<ICategoryViewModel> AddAsync(ICategoryViewModel viewModel)
        {
            CategoryModel model = mapper.Map<CategoryModel>(viewModel);
            await appDbContext.categories.AddAsync(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<ICategoryViewModel>(model);
        }

        public async Task<ICategoryViewModel> DeleteAsync(int id)
        {
            CategoryModel model = new CategoryModel();
            model =  await appDbContext.categories.FindAsync(id);
            appDbContext.Remove(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<ICategoryViewModel>(model);
        }

        public async Task<List<ICategoryViewModel>> GetAllAsync()
        {
            List<CategoryModel> model = new List<CategoryModel>();
            model = appDbContext.categories.ToList();
            return mapper.Map<List<ICategoryViewModel>>(model);
        }

        public async Task<ICategoryViewModel> GetByIdAsync(int id)
        {
            CategoryModel model = new CategoryModel();
            model = await appDbContext.categories.FindAsync(id);
            return mapper.Map<ICategoryViewModel>(model);
        }

        public async Task<ICategoryViewModel> UpdateAsync(ICategoryViewModel viewModel, int id)
        {
            CategoryModel model = mapper.Map<CategoryModel>(viewModel);
            model = await appDbContext.categories.FindAsync(id);
            model.Name = viewModel.Name;
            model.ImageUrl = viewModel.ImageUrl;
            appDbContext.Update(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<ICategoryViewModel>(model);
        }
    }
}
