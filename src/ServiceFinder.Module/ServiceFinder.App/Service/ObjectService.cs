using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.App.ViewModel;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModel.App;
using ServiceFinder.DI.ViewModels.App;
using ServiceFinder.Main.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceFinder.Main.Service
{
    public class ObjectService : IObjectService
    {
        IServiceProvider service = null;
        AppDbContext appDbContext = null;
        IMapper mapper => service.GetService(typeof(IMapper)) as IMapper;
        public ObjectService(IServiceProvider _service, AppDbContext _appDbContext)
        {
            service = _service;
            appDbContext = _appDbContext;
        }

        public async Task<IObjectViewModel> AddAsync(IObjectViewModel model)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IObjectViewModel> DeleteAsync(int id)
        {
            ObjectModel model = await appDbContext.objects.FindAsync(id);
            appDbContext.Remove(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<IObjectViewModel>(model);
        }

        public async Task<List<IObjectViewModel>> GetAllAsync()
        {
            List<ObjectModel> model = new List<ObjectModel>();
            model = appDbContext.objects.ToList();
            return mapper.Map<List<IObjectViewModel>>(model);
        }

        public async Task<IObjectViewModel> GetByIdAsync(int id)
        {
            ObjectModel model = await appDbContext.objects.FindAsync(id);
            return mapper.Map<IObjectViewModel>(model);
        }

        public async Task<IObjectViewModel> UpdateAsync(IObjectViewModel model, int id)
        {
            throw new System.NotImplementedException();
        }
        public async Task<List<ICategoryServicesViewModel>> GetServicesByCategoryId(int? id, int? LoadMoreCount)
        {
            List<CategoryServicesViewModel> model = new List<CategoryServicesViewModel>();
            model = appDbContext.categoryServices.FromSql("EXEC dbo.SpGetServicesByCategoryIdSel @CategoryId = " + id + ", @loadMoreCount = "+LoadMoreCount+"").ToList();
            return mapper.Map<List<ICategoryServicesViewModel>>(model);
        }
    }
}
