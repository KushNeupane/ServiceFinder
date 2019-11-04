using AutoMapper;
using ServiceFinder.App.ViewModel;
using ServiceFinder.DI.ViewModel.App;
using ServiceFinder.DI.ViewModels.App;
using ServiceFinder.Main.Model;
using ServiceFinder.Main.ViewModel;

namespace ServiceFinder.Backend.ModelMap
{
    public class AppModelMap : Profile
    {
        public AppModelMap()
        {
            CreateMap<ICategoryViewModel, CategoryModel>().ReverseMap();
            CreateMap<ICityViewModel, CityModel>().ReverseMap();
            CreateMap<ICategoryViewModel, CategoryViewModel>().ReverseMap();
            CreateMap<ISearchResultViewModel, SearchResultViewModel>().ReverseMap();
            CreateMap<IObjectViewModel, ObjectModel>().ReverseMap();
            CreateMap<ICategoryServicesViewModel, CategoryServicesViewModel>().ReverseMap();
            CreateMap<ObjectViewModel, ObjectModel>().ReverseMap();
            CreateMap<IObjectViewModel, ObjectViewModel>().ReverseMap();
            CreateMap<IObjectVisitViewModel, ObjectVisitViewModel>().ReverseMap();
        }
    }
}
