using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Servicefinder.Core.DatabaseContext;
using Servicefinder.Core.Model;
using ServiceFinder.Backend.Context;
using ServiceFinder.DI.Backend;
using ServiceFinder.DI.Core;
using System;
using System.Collections.Generic;
using System.IO;

namespace ServiceFinder.Backend.Controllers
{
    [Route("api/service")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        IServiceManagement serviceManagement;
        CommonDbContext serviceFinderContext;
        private IHostingEnvironment hostingEnvironment;
        public ServiceController(IServiceManagement _serviceManangment, CommonDbContext _serviceFinderContext, IHostingEnvironment _hostingEnvironment)
        {
            serviceManagement = _serviceManangment;
            serviceFinderContext = _serviceFinderContext;
            hostingEnvironment = _hostingEnvironment;
        }


        [HttpGet]
        [Route("getCategoriesWithServiceCount/{id}")]
        public ActionResult<IEnumerable<ICategoryAndServiceItemViewModel>> GetCategoriesWithServiceCount(int? id)
        {
            var categories = serviceManagement.GetCategoriesWithServiceCount(id);
            if (categories == null)
            {
                throw new ArgumentNullException("Category List is Empty");
            }
            return Ok(categories);

        }

        [HttpGet]
        [Route("getCategories")]
        public ActionResult<IEnumerable<ICategoryModel>> GetCategories()
        {
            var categories = serviceManagement.GetCategories();
            if (categories == null)
            {
                throw new ArgumentNullException("Category List is Empty");
            }
            return Ok(categories);

        }

        [HttpGet]
        [Route("getServicesByUserId")]
        public IEnumerable<IServiceItemModel> GetServicesByUserId()
        {
            return serviceManagement.GetServicesByUserId();
        }


        [HttpGet]
        [Route("getServices")]
        public ActionResult<IEnumerable<IServiceItemModel>> GetServices()
        {
            return Ok(serviceManagement.GetServices());
        }

        [HttpGet]
        [Route("getService/{id}")]
        public IServiceViewModel GetServiceByServiceItemId(int? id)
        {
            if (id == null)
            {
                throw new ArgumentNullException("Please enter correct ID");
            }
            return serviceManagement.GetServiceByServiceItemId(id);
        }

        [HttpGet]
        [Route("getServicesByCategoryId/{id}")]
        public IEnumerable<IServicesByCategoryAndUserNameViewModel> GetServicesByCategoryId(int? id)
        {
            var servicesUnderCategories = serviceManagement.GetServicesByCategoryId(id);
            {
                if (servicesUnderCategories == null)
                {
                    throw new ArgumentNullException("Category List is Empty");
                }
            }
            return servicesUnderCategories;
        }

        [HttpPost]
        [Route("addService")]
        public IServiceItemModel AddService()
        {
            string values = Request.Form["values"];
            var files = Request.Form.Files;

            var images = new List<IServiceItemImageModel>();
            IServiceItemModel model = JsonConvert.DeserializeObject<IServiceItemModel>(values);
            foreach (var file in files)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images", file.FileName);
                var stream = new FileStream(path, FileMode.Create);
                file.CopyTo(stream);
                images.Add(new ServiceItemImageModel() { OriginalImageName = file.FileName, ImageURL = path });

            }
            return serviceManagement.AddService(model, images);
        }

        [HttpGet]
        [Route("getImages/{id}")]
        public IEnumerable<IServiceItemImageModel> GetImageByServiceItemImageId(int? id)
        {
            if (id == null)
            {
                throw new ArgumentNullException("Please enter correct ID");
            }
            return serviceManagement.GetImageByServiceItemImageId(id);
        }

        [HttpDelete]
        [Route("deleteImageByServiceItemImageId/{id}")]
        public ActionResult DeleteImageByServiceItemImageId(int? Id)
        {
            serviceManagement.DeleteImageByServiceItemImageId(Id);
            return Ok();
        }

        [HttpDelete]
        [Route("deleteService/{id}")]
        public ActionResult DeleteService(int? Id)
        {
            serviceManagement.DeleteService(Id);
            return Ok();
        }

        [HttpPut]
        [Route("updateService/{id}")]
        public IServiceItemModel UpdateService(int? id)
        {
            //for updating general services
            string values = Request.Form["values"];

            //checking for profile image
            string pro = Request.Form["profile"];

            //checking for cover photo
            string cov = Request.Form["cover"];

            //reveiving files/images
            var files = Request.Form.Files;
            IServiceItemModel si = serviceFinderContext.serviceItems.Find(id);
            var userId = si.UserId;
            ApplicationUserModel user = null;// serviceFinderContext.applicationUsers.Find(userId);
            var userName = user.DisplayName;
            //For Updating Service Profile Picture and Service Cover Photo
            //it only updates profile picture and cover photo without changing other values.


            if (values == null && pro.Contains("profile") && cov.Contains("notCover"))
            {
                string userPath = hostingEnvironment.WebRootPath + "\\ServiceProfilePicture\\" + userName + "\\";
                //checking whether the path exits of not
                if (Directory.Exists(userPath))
                {
                    //checking whether uploaded profle image already exits or not.
                    if (!files.Equals(si.OriginalProfileImageName))
                    {
                        //copying service profile picture to (ServiceProfilePicture) folder inside wwwroot
                        foreach (var file in files)
                        {
                            var path = Path.Combine(Directory.GetCurrentDirectory(), userPath, file.FileName);
                            var stream = new FileStream(path, FileMode.Create);
                            file.CopyTo(stream);
                            si.ProfileImageUrl = path;
                            si.OriginalProfileImageName = file.FileName;
                        }
                    }
                    serviceFinderContext.SaveChanges();
                    cov.Replace("cover", "kush");
                }
                else
                {
                    DirectoryInfo di = Directory.CreateDirectory(userPath);
                    if (!files.Equals(si.OriginalProfileImageName))
                    {
                        //copying service profile picture to (ServiceProfilePicture) folder inside wwwroot
                        foreach (var file in files)
                        {
                            var path = Path.Combine(Directory.GetCurrentDirectory(), userPath, file.FileName);
                            var stream = new FileStream(path, FileMode.Create);
                            file.CopyTo(stream);
                            si.ProfileImageUrl = path;
                            si.OriginalProfileImageName = file.FileName;
                        }
                    }
                    serviceFinderContext.SaveChanges();
                    cov.Replace("cover", "kush");
                }
            }

            else
                if (values == null && cov.Contains("cover") && pro.Contains("notProfile"))
            {
                string userPath = hostingEnvironment.WebRootPath + "\\ServiceCoverPicture\\" + userName + "\\";
                if (Directory.Exists(userPath))
                {
                    //checking whether cover image already exits or not
                    if (!files.Equals(si.OriginalCoverImageName))
                    {
                        //copying service cover picture to (ServiceCoverPicture) folder inside wwwroot
                        foreach (var file in files)
                        {
                            var path = Path.Combine(Directory.GetCurrentDirectory(), userPath, file.FileName);
                            var stream = new FileStream(path, FileMode.Create);
                            file.CopyTo(stream);
                            si.CoverImageUrl = path;
                            si.OriginalCoverImageName = file.FileName;
                        }
                        pro = null;
                    }
                    serviceFinderContext.SaveChanges();
                    cov.Replace("profile", "kush");
                }
                else
                {
                    DirectoryInfo di = Directory.CreateDirectory(userPath);
                    if (!files.Equals(si.OriginalCoverImageName))
                    {
                        //copying service cover picture to (ServiceCoverPicture) folder inside wwwroot
                        foreach (var file in files)
                        {
                            var path = Path.Combine(Directory.GetCurrentDirectory(), userPath, file.FileName);
                            var stream = new FileStream(path, FileMode.Create);
                            file.CopyTo(stream);
                            si.CoverImageUrl = path;
                            si.OriginalCoverImageName = file.FileName;
                        }
                        pro = null;
                    }
                    serviceFinderContext.SaveChanges();
                    cov.Replace("profile", "kush");
                }
            }
            else
            {
                var images = new List<IServiceItemImageModel>();
                IServiceItemModel model = JsonConvert.DeserializeObject<IServiceItemModel>(values);
                if (model == null)
                {
                    throw new ArgumentNullException("model");
                }
                foreach (var file in files)
                {
                    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images", file.FileName);
                    var stream = new FileStream(path, FileMode.Create);
                    file.CopyTo(stream);
                    images.Add(new ServiceItemImageModel() { OriginalImageName = file.FileName, ImageURL = path });
                }
                return serviceManagement.UpdateService(id, model, images);
            }
            return si;
        }

        [HttpPost]
        [Route("addReview")]
        public IResponseModel AddReview([FromBody] IServiceReviewModel model)
        {
            return serviceManagement.AddReview(model);
        }

        [HttpGet]
        [Route("getReviewByService/{serviceItemId}")]
        public List<IServiceReviewModel> GetReviewByService(int serviceItemId)
        {
            return serviceManagement.GetReviewByServiceId(serviceItemId);
        }

        [HttpGet]
        [Route("getReviewByUser")]
        public List<IServiceReviewModel> GetReviewByUser()
        {
            return serviceManagement.GetReviewByUserId();
        }

        [HttpDelete]
        [Route("deleteReview/{id}")]
        public ActionResult DeleteReview(int? Id)
        {
            serviceManagement.DeleteReview(Id);
            return Ok();
        }

        [HttpPut]
        [Route("updateReview/{id}")]
        public IResponseModel UpdateReview(int? Id, [FromBody] IServiceReviewModel model)
        {
            return serviceManagement.UpdateReview(Id, model);
        }

        [HttpPost]
        [Route("addServiceVisitLog/")]
        public void addServiceVisitLog([FromBody] IServiceItemViewLogModel model)
        {
            serviceManagement.addServiceVisitLog(model);
        }

        [HttpGet]
        [Route("getTotalServiceViewCount")]
        public ActionResult<IEnumerable<IServiceVisitViewModel>> GetTotalVisitedServiceCount()
        {
            var vistedServices = serviceManagement.GetTotalVisitedServiceCount();
            if (vistedServices == null)
            {
                throw new ArgumentNullException("Category List is Empty");
            }
            return Ok(vistedServices);
        }

        [HttpGet]
        [Route("getCities")]
        public ActionResult<IEnumerable<ICityModel>> GetCities()
        {
            var cities = serviceManagement.GetCities();
            if (cities == null)
            {
                throw new ArgumentNullException("City List is Empty");
            }
            return Ok(cities);
        }

        [HttpGet]
        [Route("getFilteredService/{value}")]
        public List<IAdvancedSearchViewModel> GetFIlteredSearch(string value)
        {
            var data = JsonConvert.DeserializeObject<ISearchViewModel>(value);
            var services = serviceManagement.GetFilteredService(data.CategoryId, data.CityId, data.SearchTerm, data.LoadMoreCount);
            return services;
        }

        [HttpGet]
        [Route("addSubscriber/{email}")]
        public IActionResult AddSubscriber(string email)
        {
            return Ok(serviceManagement.AddSubsciber(email));
        }
    }
}