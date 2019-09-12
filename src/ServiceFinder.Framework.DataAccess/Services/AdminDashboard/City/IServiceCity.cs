using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Framework.DataAccess.Services.AdminDashboard.City
{
    public interface IServiceCity
    {
        IEnumerable<CityEntity> GetCities();
        ResponseModel AddCity(CityEntity model);
        ResponseModel DeleteCity(int? id);
        ResponseModel EditCity(CityEntity model, int? id);
    }
}
