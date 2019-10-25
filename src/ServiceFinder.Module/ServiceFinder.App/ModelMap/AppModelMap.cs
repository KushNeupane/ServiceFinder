using AutoMapper;
using ServiceFinder.App.ViewModel;
using ServiceFinder.DI.ViewModel.App;
using ServiceFinder.Main.Model;

namespace ServiceFinder.Backend.ModelMap
{
    public class AppModelMap : Profile
    {
        public AppModelMap()
        {
            CreateMap<ICategoryViewModel, CategoryModel>().ReverseMap();
            CreateMap<ICityViewModel, CityModel>().ReverseMap();
            CreateMap<IObjectViewModel, ObjectModel>().ReverseMap();
            CreateMap<ISearchResultViewModel, SearchResultViewModel>().ReverseMap();
        }
    }
}
