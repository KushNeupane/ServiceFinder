using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using ServiceFinder.DI.Services.App;
using System;

namespace ServiceFinder.App.Controllers
{
    [Route("review")]
    public class ReviewController : Controller
    {


        IServiceProvider service = null;
        IReviewService categoryService => service.GetService(typeof(IReviewService)) as IReviewService;
        public ReviewController(IServiceProvider _service) => service = _service;
    }
}
