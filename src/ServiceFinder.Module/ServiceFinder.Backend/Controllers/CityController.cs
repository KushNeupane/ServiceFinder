using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Backend;
using ServiceFinder.DI.Core;
using System;
using System.Collections.Generic;

namespace ServiceFinder.AdminDashboard.Controllers
{
    [Route("api/city")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private string currentUserId;
        private IServiceProvider service;
        ServiceFinderDbContext serviceFinderContext;

        private IHostingEnvironment hostingEnvironment => service.GetService(typeof(IHostingEnvironment)) as IHostingEnvironment;
        private IServiceCity serviceCity => service.GetService(typeof(IServiceCity)) as IServiceCity;
        private IHttpContextAccessor _httpContextAccessor => service.GetService(typeof(IHttpContextAccessor)) as IHttpContextAccessor;

        public CityController(IServiceProvider _service, ServiceFinderDbContext _serviceFinderDbContext)
        {
            this.service = _service;
            this.serviceFinderContext = _serviceFinderDbContext;
        }

        [HttpGet]
        [Route("getCities")]
        public ActionResult<IEnumerable<ICityModel>> GetCities()
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
        public IActionResult AddCity(ICityModel city)
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
        public IActionResult EditCity(ICityModel city, int? id)
        {
            return Ok(serviceCity.EditCity(city, id));
        }

    }
}
