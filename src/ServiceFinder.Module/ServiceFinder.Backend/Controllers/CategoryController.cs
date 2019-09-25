using System;
using System.IO;
using Newtonsoft.Json;
using ServiceFinder.DI.Core;
using ServiceFinder.DI.Backend;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


namespace ServiceFinder.AdminDashboard.Controllers
{

    [Route("api/admin")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        IServiceCategory serviceCategory;
        public CategoryController(IServiceCategory _serviceCategory)
        {
            serviceCategory = _serviceCategory;
        }

        [HttpGet]
        [Route("getCategories")]
        public ActionResult<IEnumerable<ICategoryModel>> GetCategories()
        {
            var categories = serviceCategory.GetCategories();
            if (categories == null)
            {
                throw new ArgumentNullException("Category List is Empty");
            }
            return Ok(categories);

        }
        [HttpPost]
        [Route("addCategory")]
        public IResponseModel AddCategory()
        {
            string values = Request.Form["values"];
            var files = Request.Form.Files;

            ICategoryModel model = JsonConvert.DeserializeObject<ICategoryModel>(values);

            foreach (var file in files)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images\\CategoryIcon", file.FileName);
                try
                {
                    var stream = new FileStream(path, FileMode.Create);
                    file.CopyTo(stream);
                    model.ImageURL = path;
                    model.SystemDefinedImageName = file.FileName;
                }
                catch (Exception ) { }

            }

            return serviceCategory.AddCategory(model);
        }

        [HttpPut]
        [Route("deleteCategory")]
        public IResponseModel DeleteCategory(ICategoryModel data)
        {
            return serviceCategory.DeleteCategory(data);
        }

        [HttpGet]
        [Route("getCategoryById/{id}")]
        public IResponseModel GetCategoryById(int? id)
        {
            return serviceCategory.GetCategoryById(id);
        }
    }
}
