using Microsoft.AspNetCore.Mvc;
using Servicefinder.Core.Response;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModel.App;
using System;
using System.Threading.Tasks;

namespace ServiceFinder.App.Controllers
{
    [Route("city")]
    public class CityController : Controller
    {
        IServiceProvider service = null;
        ICityService cityService => service.GetService(typeof(ICityService)) as ICityService;
        public CityController(IServiceProvider _service) => service = _service;

        [Route("add-city")]
        public async Task<ResponseModel> AddCity(ICityViewModel viewModel)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await cityService.AddAsync(viewModel);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("delete-city/{id}")]
        public async Task<ResponseModel> DeleteCity(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await cityService.DeleteAsync(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("all-city")]
        public async Task<ResponseModel> GetAllCity()
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await cityService.GetAllAsync();
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("get-city/{id}")]
        public async Task<ResponseModel> GetCity(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await cityService.GetByIdAsync(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;

        }

        [Route("update-city/{id}")]
        public async Task<ResponseModel> GetCity(ICityViewModel viewModel, int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await cityService.UpdateAsync(viewModel, id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;

        }

    }
}
