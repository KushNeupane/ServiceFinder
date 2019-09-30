using Microsoft.AspNetCore.Mvc;
using System;
using Servicefinder.Core.Response;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModel.App;
using System.Threading.Tasks;

namespace ServiceFinder.App.Controllers
{
    [Route("category")]
    public class CategoryController : Controller
    {
        IServiceProvider service = null;
        ICategoryService categoryService => service.GetService(typeof(ICategoryService)) as ICategoryService;
        public CategoryController(IServiceProvider _service) => service = _service;


        [Route("add-category")]
        public async Task<ResponseModel> AddCategory(ICategoryViewModel viewModel)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await categoryService.AddAsync(viewModel);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("delete-category/{id}")]
        public async Task<ResponseModel> DeleteCategory(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await categoryService.DeleteAsync(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        } 

        [Route("all-category")]
        public async Task<ResponseModel> GetAllCategory()
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await categoryService.GetAllAsync();
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [Route("get-category/{id}")]
        public async Task<ResponseModel> GetCategory(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await categoryService.GetByIdAsync(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;

        }

    }
}
