using ServiceFinder.DI.Models.App;
using ServiceFinder.DI.Response.Core;
using ServiceFinder.DI.ViewModels.App;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ServiceFinder.DI.Services.App
{
    public interface IReviewService
    {
        Task<List<IReviewViewModel>> GetAllAsync();
        Task<IResponseModel> AddAsync(IReviewViewModel model);
        Task<IReviewViewModel> DeleteAsync(int id);
        Task<IReviewViewModel> UpdateAsync(IReviewViewModel model, int id);
        Task<IReviewViewModel> GetByIdAsync(int id);
        Task<List<IReviewViewModel>> GetReviewByObjectId(int objectId);
    }
}
