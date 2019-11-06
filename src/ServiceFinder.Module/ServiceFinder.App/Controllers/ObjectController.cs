using System;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServiceFinder.App.ViewModel;
using Servicefinder.Core.Response;
using Microsoft.AspNetCore.Routing;
using ServiceFinder.Main.ViewModel;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModel.App;

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

        [Route("get-objectByServiceId/{id}")]
        public async Task<ResponseModel> GetObjectByServiceId(int id)
        {
            ResponseModel response = new ResponseModel();
            if (id == 0)
            {
                throw new ArgumentNullException("id is null");
            }
            try
            {
                response.data = await objectService.GetObjectById(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }
        
        [Route("get-objectByUserId")]
        public async Task<ResponseModel> GetObjectByUserId()
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await objectService.GetObjectByUserId();
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("update-object/{id}")]
        public async Task<ResponseModel> UpdateObject([FromBody]IObjectViewModel viewModel,int id)
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

        [HttpPost]
        [Route("add-object")]
        public async Task<ResponseModel> AddCity([FromBody]ObjectViewModel model)
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

        //Getting services under specific Category
        [Route("category/{value}")]
        public async Task<ResponseModel> GetObjectByCategoryId(string value)
        {
            ResponseModel response = new ResponseModel();
            var data = JsonConvert.DeserializeObject<SearchInputViewModel>(value);
            try
            {
                response.data = await objectService.GetObjectByCategoryId(data.CategoryId, data.LoadMoreCount);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        //Post Log about the service visit
        [HttpPost]
        [Route("addObjectLog")]
        public async Task<ResponseModel> AddObjectVisitLog([FromBody] ObjectLogViewModel model)
        {
            
            ResponseModel response = new ResponseModel();
            if (model == null)
            {
                throw new ArgumentNullException("ObjectId is null");
            }
            try
            {
                objectService.AddObjectVisitLog(model);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        //Get the list of most visited services
        [Route("getMostVisitedObjects")]
        public async Task<ResponseModel> GetMostVisitedObjects()
    {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = objectService.GetMostVisitedObjects();
                response.isSuccess = true;
            }catch(Exception ex){ }
            return response;
        }


    }
}
