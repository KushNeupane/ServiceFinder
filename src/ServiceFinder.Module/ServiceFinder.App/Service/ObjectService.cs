using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.App.ViewModel;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Services.App;
using ServiceFinder.DI.ViewModel.App;
using ServiceFinder.DI.ViewModels.App;
using ServiceFinder.Main.Model;
using ServiceFinder.Main.ViewModel;
using ServiceFinder.Users.DatabaseContext;
using ServiceFinder.Users.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceFinder.Main.Service
{
    public class ObjectService : IObjectService
    {
        IServiceProvider service = null;
        AppDbContext appDbContext = null;
        private string currentUserId;
        IMapper mapper => service.GetService(typeof(IMapper)) as IMapper;
        IHttpContextAccessor httpContextAccessor => service.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;
        private UserManager<ApplicationUserModel> userManager => service.GetService(typeof(UserManager<ApplicationUserModel>)) as UserManager<ApplicationUserModel>;
        private SignInManager<ApplicationUserModel> signInManager => service.GetService(typeof(SignInManager<ApplicationUserModel>)) as SignInManager<ApplicationUserModel>;


        public ObjectService(IServiceProvider _service, AppDbContext _appDbContext, UserDbContext _userDbcontext)
        {
            service = _service;
            appDbContext = _appDbContext;
            this.currentUserId = httpContextAccessor.HttpContext.Request.Cookies["UserId"];
        }

        public async Task<IObjectViewModel> AddAsync(IObjectViewModel model)
        {
            ObjectModel objectModel = mapper.Map<ObjectModel>(model);
            await appDbContext.objects.AddAsync(objectModel);
            await appDbContext.SaveChangesAsync();
            return model;
        }

        public async Task<IObjectViewModel> DeleteAsync(int id)
        {
            ObjectModel model = await appDbContext.objects.FindAsync(id);
            appDbContext.Remove(model);
            await appDbContext.SaveChangesAsync();
            return mapper.Map<IObjectViewModel>(model);
        }

        public async Task<List<IObjectViewModel>> GetAllAsync()
        {
            List<ObjectModel> model = new List<ObjectModel>();
            model = appDbContext.objects.ToList();
            return mapper.Map<List<IObjectViewModel>>(model);
        }

        public async Task<IObjectViewModel> GetByIdAsync(int id)
        {
            ObjectModel model = await appDbContext.objects.FindAsync(id);
            return mapper.Map<IObjectViewModel>(model);
        }

        public async Task<IObjectViewModel> UpdateAsync(IObjectViewModel model, int id)
        {
            throw new System.NotImplementedException();
        }
        public async Task<List<ICategoryServicesViewModel>> GetObjectByCategoryId(int? id, int? LoadMoreCount)
        {
            List<CategoryServicesViewModel> model = new List<CategoryServicesViewModel>();
            model = appDbContext.categoryServices.FromSql("EXEC dbo.SpGetServicesByCategoryIdSel @CategoryId = " + id + ", @loadMoreCount = " + LoadMoreCount + "").ToList();
            return mapper.Map<List<ICategoryServicesViewModel>>(model);
        }
        public async Task<List<ISearchResultViewModel>> GetFilteredObject(int? categoryId, int? cityId, string searchTerm, int LoadMoreCount)
        {
            //searchTerm = searchTerm.Replace(" ", string.Empty);
            var sql = "EXEC dbo.SpAdvanceSearchSel @CategoryId = {0},@CityId={1}, @searchTerm = {2}, @Skip = {3}";
            List<SearchResultViewModel> objects = appDbContext.searchResult.FromSql(sql, categoryId, cityId, searchTerm, LoadMoreCount).ToList();
            return mapper.Map<List<ISearchResultViewModel>>(objects);
        }

        public async Task<IObjectViewModel> GetObjectById(int id)
        {
            ObjectModel serviceObject = await appDbContext.objects.FindAsync(id);
            ObjectViewModel objectView = new ObjectViewModel();
            objectView = mapper.Map<ObjectViewModel>(serviceObject);
            ApplicationUserModel appUser = await userManager.FindByIdAsync(serviceObject.UserId);
            CityModel city = await appDbContext.cities.FindAsync(serviceObject.CityId);

            objectView.City = city;
            objectView.AppUser = appUser;

            if (this.currentUserId != null)
            {
                objectView.LoggedIn = true;
                if (serviceObject.UserId == this.currentUserId)
                {
                    objectView.ShowReview = false;
                }
            }
           
            return mapper.Map<IObjectViewModel>(objectView);
        }

        public void AddObjectVisitLog(IObjectLogViewModel model)
        {

            var sql = "EXEC dbo.SpObjectViewLog @UserId = {0}, @ObjectId = {1}";
            var res = appDbContext.Database.ExecuteSqlCommand(sql, currentUserId, model.ObjectId);
        }

        public async Task<IEnumerable<IObjectVisitViewModel>> GetMostVisitedObjects()
        {
            if (appDbContext != null)
            {
                List<ObjectVisitViewModel> totalVisitedObjects = appDbContext.objectVisitView.FromSql($@"EXEC dbo.SpServiceVisitCountSel").ToList();
                return mapper.Map<List<IObjectVisitViewModel>>(totalVisitedObjects);
            }

            return null;
        }

    }
}
