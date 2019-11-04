using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using Servicefinder.Core.Response;
using ServiceFinder.App.ViewModel;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModel.App;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServiceFinder.App.Controllers
{
    [Route("object")]
    public class ObjectController : Controller
    {
        IServiceProvider service = null;
        IObjectService objectService => service.GetService(typeof(IObjectService)) as IObjectService;
        public ObjectController(IServiceProvider _service) => service = _service;

        [Route("all-object")]
        public async Task<ResponseModel> GetAllObject()
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await objectService.GetAllAsync();
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }
        
        [Route("delete-object/{id}")]
        public async Task<ResponseModel> DeleteObject(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await objectService.DeleteAsync(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("get-object/{id}")]
        public async Task<ResponseModel> GetObjectById(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await objectService.GetByIdAsync(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }
        
        [Route("update-object/{id}")]
        public async Task<ResponseModel> UpdateObject(IObjectViewModel viewModel,int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await objectService.UpdateAsync(viewModel,id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("add-object")]
        public async Task<ResponseModel> AddCity(IObjectViewModel model)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await objectService.AddAsync(model);
                response.isSuccess = true;
            }
            catch(Exception ex) { }
            return response;
        }
       
        [Route("search/{value}")]
        public async Task<ResponseModel> GetFilteredResult(string value)
        {
            var data = JsonConvert.DeserializeObject<SearchInputViewModel>(value);
            ResponseModel response = new ResponseModel();
            try
            {
                response.data= await objectService.GetFilteredObject(data.CategoryId, data.CityId, data.SearchTerm, data.LoadMoreCount);
                response.isSuccess = true;
            }
            catch(Exception ex) { }
            return response;
        }

        [Route("category/{value}")]
        public async Task<ResponseModel> GetServiceByCategoryId(string value)
        {
            ResponseModel response = new ResponseModel();
            var data = JsonConvert.DeserializeObject<SearchInputViewModel>(value);
            try
            {
                response.data = await objectService.GetServicesByCategoryId(data.CategoryId, data.LoadMoreCount);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

    }
}
