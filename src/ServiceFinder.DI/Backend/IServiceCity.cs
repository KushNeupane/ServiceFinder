using ServiceFinder.DI.Core;
using System.Collections.Generic;

namespace ServiceFinder.DI.Backend
{
    public interface IServiceCity
    {
        IEnumerable<ICityModel> GetCities();
        IResponseModel AddCity(ICityModel model);
        IResponseModel DeleteCity(int? id);
        IResponseModel EditCity(ICityModel model, int? id);
    }
}
