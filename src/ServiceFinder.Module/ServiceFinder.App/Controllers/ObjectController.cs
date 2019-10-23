﻿using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Servicefinder.Core.Response;
using ServiceFinder.App.ViewModel;
using ServiceFinder.DI.Services.App;
using System;
using System.Threading.Tasks;

namespace ServiceFinder.App.Controllers
{
    [Route("object")]
    public class ObjectController : Controller
    {
        IServiceProvider service = null;
        IObjectService objectService => service.GetService(typeof(IObjectService)) as IObjectService;
        public ObjectController(IServiceProvider _service) => service = _service;

        [Route("all-object")]
        public async Task<ResponseModel> GetAllObject()
        {
            ResponseModel response = new ResponseModel();
            try
            {
                response.data = await objectService.GetAllAsync();
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }
        [Route("category/{value}")]
        public async Task<ResponseModel> GetServiceByCategoryId(string value)
        {
            ResponseModel response = new ResponseModel();
            var data = JsonConvert.DeserializeObject<SearchResultViewModel>(value);
            try
            {
                response.data = await objectService.GetServicesByCategoryId(data.CategoryId, data.LoadMoreCount);
                response.isSuccess = true;
            }
            catch (Exception ex) { }
            return response;
        }

    }
}