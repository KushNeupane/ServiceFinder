using AutoMapper;
using Servicefinder.Core.Response;
using ServiceFinder.App.Model;
using ServiceFinder.App.ViewModel;
using ServiceFinder.DI.Response.Core;
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
            CreateMap<IObjectViewModel, ObjectViewModel>().ReverseMap();
            CreateMap<ICategoryServicesViewModel, CategoryServicesViewModel>().ReverseMap();
            CreateMap<ObjectViewModel, ObjectModel>().ReverseMap();
            CreateMap<IObjectViewModel, ObjectViewModel>().ReverseMap();
            CreateMap<IObjectVisitViewModel, ObjectVisitViewModel>().ReverseMap();
            CreateMap<ReviewViewModel, ReviewModel>().ReverseMap();
            CreateMap<ReviewModel, IReviewViewModel>().ReverseMap();
            CreateMap<QuestionViewModel, IQuestionViewModel>().ReverseMap();
            CreateMap<QuestionModel, IQuestionViewModel>().ReverseMap();
            CreateMap<AnswerViewModel, IAnswerViewModel>().ReverseMap();
            CreateMap<AnswerModel, IAnswerViewModel>().ReverseMap();
            CreateMap<IQuestionAnswerViewModel, QuestionAnswerViewModel>().ReverseMap();

        }
    }
}
