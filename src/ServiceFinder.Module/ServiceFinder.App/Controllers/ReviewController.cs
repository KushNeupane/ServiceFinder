using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Servicefinder.Core.Response;
using ServiceFinder.App.ViewModel;
using ServiceFinder.DI.Models.App;
using ServiceFinder.DI.Services.App;
using ServiceFinder.Main.Model;
using System;
using System.Threading.Tasks;

namespace ServiceFinder.App.Controllers
{
    [Route("review")]
    public class ReviewController : Controller
    {
        IServiceProvider service = null;
        IReviewService reviewService => service.GetService(typeof(IReviewService)) as IReviewService;
        public ReviewController(IServiceProvider _service) => service = _service;

        [Route("review/{id}")]
        public async Task<ResponseModel> GetReviewByObjectId(int id)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await reviewService.GetReviewByObjectId(id);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

        [HttpPost]
        [Route("add-review")]
        public async Task<ResponseModel> AddReview([FromBody] ReviewViewModel model)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await reviewService.AddAsync(model);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }
    }
}
