using ServiceFinder.DI.Core;
using System.Collections.Generic;

namespace ServiceFinder.DI.Backend
{
    public interface IServiceCategory
    {
        IEnumerable<ICategoryModel> GetCategories();
        IResponseModel AddCategory(ICategoryModel model);
        IResponseModel DeleteCategory(ICategoryModel model);
        IResponseModel GetCategoryById(int? id);

    }
}
