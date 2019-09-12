using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.DataAccess.Services.AdminDashboard.Category;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


namespace ServiceFinder.AdminDashboard.Controllers
{
  
    [Route("api/admin")]
    [ApiController]
    public class CategoryController: ControllerBase
    {
        IServiceCategory serviceCategory;
        public CategoryController(IServiceCategory _serviceCategory)
        {
            serviceCategory = _serviceCategory;
        }

        [HttpGet]
        [Route("getCategories")]
        public ActionResult<IEnumerable<CategoryEntity>> GetCategories()
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
        public ResponseModel AddCategory()
        {
            string values = Request.Form["values"];
            var files = Request.Form.Files;

            CategoryEntity model = JsonConvert.DeserializeObject<CategoryEntity>(values);

            foreach(var file in files)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images\\CategoryIcon", file.FileName);
                try
                {
                    var stream = new FileStream(path, FileMode.Create);
                    file.CopyTo(stream);
                    model.ImageURL = path;
                    model.SystemDefinedImageName = file.FileName;
                }
                catch (Exception ex) { }
                
            }

            return serviceCategory.AddCategory(model);
        }

        [HttpPut]
        [Route("deleteCategory")]
        public ResponseModel DeleteCategory(CategoryEntity data)
        {
            return serviceCategory.DeleteCategory(data);
        }

        [HttpGet]
        [Route("getCategoryById/{id}")]
        public ResponseModel GetCategoryById(int? id)
        {
            return serviceCategory.GetCategoryById(id);
        }
    }
}
