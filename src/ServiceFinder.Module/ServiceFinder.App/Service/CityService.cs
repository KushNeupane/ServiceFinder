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
    public class CityService : ICityService
    {
        IServiceProvider service = null;
        AppDbContext appDbContext = null;
        IMapper mapper => service.GetService(typeof(IMapper)) as IMapper;

        public CityService(IServiceProvider _service, AppDbContext _appDbContext)
        {
            service = _service;
            appDbContext = _appDbContext;
        }

        public async Task<ICityViewModel> AddAsync(ICityViewModel viewModel)
        {
            CityModel model = mapper.Map<CityModel>(viewModel);
            await appDbContext.cities.AddAsync(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<ICityViewModel>(model);
        }

        public async Task<ICityViewModel> DeleteAsync(int id)
        {
            CityModel model = new CityModel();
            model = await appDbContext.cities.FindAsync(id);
            appDbContext.Remove(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<ICityViewModel>(model);
        }

        public async Task<List<ICityViewModel>> GetAllAsync()
        {
            List<CityModel> model = new List<CityModel>();
            model = appDbContext.cities.ToList();
            return mapper.Map<List<ICityViewModel>>(model);
        }

        public async Task<ICityViewModel> GetByIdAsync(int id)
        {
            CityModel model = new CityModel();
            model = await appDbContext.cities.FindAsync(id);
            return mapper.Map<ICityViewModel>(model);
        }

        public async Task<ICityViewModel> UpdateAsync(ICityViewModel viewModel, int id)
        {
            CityModel model = mapper.Map<CityModel>(viewModel);
            model = await appDbContext.cities.FindAsync(id);
            model.Name = viewModel.Name;           
            appDbContext.Update(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<ICityViewModel>(model);
        }
    }
}
