using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using System.Collections.Generic;

namespace ServiceFinder.Framework.DataAccess.Services.AdminDashboard.Category
{
    public interface IServiceCategory
    {
        IEnumerable<CategoryEntity> GetCategories();
        ResponseModel AddCategory(CategoryEntity model);
        ResponseModel DeleteCategory(CategoryEntity model);
        ResponseModel GetCategoryById(int? id);

    }
}
