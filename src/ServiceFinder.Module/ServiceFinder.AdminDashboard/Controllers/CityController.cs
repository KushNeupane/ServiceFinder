using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceFinder.Framework.DataAccess.Services.AdminDashboard.City;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using System;
using System.Collections.Generic;
using TAM.Framework.DataAccess.Contexts.AccountManagement;

namespace ServiceFinder.AdminDashboard.Controllers
{
    [Route("api/city")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private string currentUserId;
        private IServiceProvider service;
        ServiceFinderDbContext serviceFinderContext;

        private IHostingEnvironment hostingEnvironment=>service.GetService(typeof(IHostingEnvironment))as IHostingEnvironment;
        private IServiceCity serviceCity => service.GetService(typeof(IServiceCity)) as IServiceCity;
        private IHttpContextAccessor _httpContextAccessor => service.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;

        public CityController(IServiceProvider _service, ServiceFinderDbContext _serviceFinderDbContext)
        {
            this.service = _service;
            this.serviceFinderContext = _serviceFinderDbContext;
        }

        [HttpGet]
        [Route("getCities")]
        public ActionResult<IEnumerable<CityEntity>> GetCities()
        {
            var cities = serviceCity.GetCities();
            if (cities == null)
            {
                throw new ArgumentNullException("City List is Empty");
            }
            return Ok(cities);
        }

        [HttpPost]
        [Route("addCity")]
        public IActionResult AddCity(CityEntity city)
        {
            return Ok(serviceCity.AddCity(city));
        }

        [HttpDelete]
        [Route("deleteCity/{id}")]
        public IActionResult DeleteCity(int? id)
        {
            return Ok(serviceCity.DeleteCity(id));
        }

        [HttpPut]
        [Route("editCity/{id}")]
        public IActionResult EditCity(CityEntity city, int? id)
        {
            return Ok(serviceCity.EditCity(city,id));
        }

    }
}
