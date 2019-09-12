using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement;
using ServiceFinder.Framework.Model.Entity.AdminDashboard;
using ServiceFinder.Framework.Model.Entity.UserDashboard;
using ServiceFinder.Framework.Model.Models.UserDashboard;
using ServiceFinder.Framework.Model.ViewModels;
using ServiceFinder.Framework.Model.ViewModels.ServiceManagement;
using System;
using System.Collections.Generic;
using System.IO;
using TAM.Framework.DataAccess.Contexts.AccountManagement;
using TAM.Framework.Model.Models.AccountManagement;

namespace ServiceFinder.UserDashboard.Controllers
{
    [Route("api/service")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        IServiceManagement serviceManagement;
        ServiceFinderDbContext serviceFinderContext;
        private IHostingEnvironment hostingEnvironment;
        public ServiceController(IServiceManagement _serviceManangment, ServiceFinderDbContext _serviceFinderContext, IHostingEnvironment _hostingEnvironment)
        {
            serviceManagement = _serviceManangment;
            serviceFinderContext = _serviceFinderContext;
            hostingEnvironment = _hostingEnvironment;
        }


        [HttpGet]
        [Route("getCategoriesWithServiceCount/{id}")]
        public ActionResult<IEnumerable<CategoryAndServiceItemViewModel>> GetCategoriesWithServiceCount(int? id)
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
        public ActionResult<IEnumerable<CategoryEntity>> GetCategories()
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
        public IEnumerable<ServiceItemEntity> GetServicesByUserId()
        {
            return serviceManagement.GetServicesByUserId();
        }


        [HttpGet]
        [Route("getServices")]
        public ActionResult<IEnumerable<ServiceItemEntity>> GetServices()
        {
            return Ok(serviceManagement.GetServices());
        }

        [HttpGet]
        [Route("getService/{id}")]
        public ServiceViewModel GetServiceByServiceItemId(int? id)
        {
            if (id == null)
            {
                throw new ArgumentNullException("Please enter correct ID");
            }
            return serviceManagement.GetServiceByServiceItemId(id);
        }

        [HttpGet]
        [Route("getServicesByCategoryId/{id}")]
        public IEnumerable<ServicesByCategoryAndUserNameViewModel> GetServicesByCategoryId(int? id)
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
        public ServiceItemEntity AddService()
        {
            string values = Request.Form["values"];
            var files = Request.Form.Files;

            var images = new List<ServiceItemImageEntity>();
            ServiceItemEntity model = JsonConvert.DeserializeObject<ServiceItemEntity>(values);
            foreach (var file in files)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images", file.FileName);
                var stream = new FileStream(path, FileMode.Create);
                file.CopyTo(stream);
                images.Add(new ServiceItemImageEntity() { OriginalImageName = file.FileName, ImageURL = path });

            }
            return serviceManagement.AddService(model, images);

        }

        [HttpGet]
        [Route("getImages/{id}")]
        public IEnumerable<ServiceItemImageEntity> GetImageByServiceItemImageId(int? id)
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
        public ServiceItemEntity UpdateService(int? id)
        {
            //for updating general services
            string values = Request.Form["values"];

            //checking for profile image
            string pro = Request.Form["profile"];

            //checking for cover photo
            string cov = Request.Form["cover"];

            //reveiving files/images
            var files = Request.Form.Files;
            ServiceItemEntity si = serviceFinderContext.serviceItems.Find(id);
            var userId = si.UserId;
            ApplicationUserEntity user = serviceFinderContext.applicationUsers.Find(userId);
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
                var images = new List<ServiceItemImageEntity>();
                ServiceItemEntity model = JsonConvert.DeserializeObject<ServiceItemEntity>(values);
                if (model == null)
                {
                    throw new ArgumentNullException("model");
                }
                foreach (var file in files)
                {
                    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images", file.FileName);
                    var stream = new FileStream(path, FileMode.Create);
                    file.CopyTo(stream);
                    images.Add(new ServiceItemImageEntity() { OriginalImageName = file.FileName, ImageURL = path });
                }
                return serviceManagement.UpdateService(id, model, images);
            }
            return si;
        }

        [HttpPost]
        [Route("addReview")]
        public ResponseModel AddReview([FromBody] ServiceReviewEntity model)
        {
            return serviceManagement.AddReview(model);
        }

        [HttpGet]
        [Route("getReviewByService/{serviceItemId}")]
        public List<ServiceReviewEntity> GetReviewByService(int serviceItemId)
        {
            return serviceManagement.GetReviewByServiceId(serviceItemId);
        }

        [HttpGet]
        [Route("getReviewByUser")]
        public List<ServiceReviewEntity> GetReviewByUser()
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
        public ResponseModel UpdateReview(int? Id, [FromBody] ServiceReviewEntity model)
        {
            return serviceManagement.UpdateReview(Id, model);

        }

        [HttpPost]
        [Route("addServiceVisitLog/")]
        public void addServiceVisitLog([FromBody] ServiceItemViewLog model)
        {
            serviceManagement.addServiceVisitLog(model);
        }

        [HttpGet]
        [Route("getTotalServiceViewCount")]
        public ActionResult<IEnumerable<ServiceVisitViewModel>> GetTotalVisitedServiceCount()
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
        public ActionResult<IEnumerable<CityEntity>> GetCities()
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
        public List<AdvancedSearchViewModel> GetFIlteredSearch(string value)
        {
            var data =JsonConvert.DeserializeObject<SearchViewModel>(value);
            var services = serviceManagement.GetFilteredService(data.CategoryId,data.CityId,data.SearchTerm, data.LoadMoreCount);
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