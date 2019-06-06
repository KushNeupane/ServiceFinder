//using Microsoft.AspNetCore.Http;
//using ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement;
//using ServiceFinder.Framework.Model.Models.UserDashboard;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;

//namespace ServiceFinder.AccountManagement.UnitTests.ServiceManagement
//{
//    class ServiceManagementFake : IServiceManagement
//    {
//        private readonly List<ServiceItemEntity> _serviceList;
//        private readonly List<CategoryEntity> _categoryList;
//        private readonly List<ServiceItemImageEntity> _imageList;

//        public ServiceManagementFake()
//        {
//            _categoryList = new List<CategoryEntity>()
//            {
//                new CategoryEntity()
//                {
//                    Id = 1,
//                    Name = "Educational",
//                    ImageURL="education ko image",
//                    SystemDefinedImageName = "system ko image",
//                    Description="education ko description",
//                    Status = true
//                },
//                 new CategoryEntity()
//                {
//                    Id = 2,
//                    Name = "Medical",
//                    ImageURL="medcal ko image",
//                    SystemDefinedImageName = "system ko image",
//                    Description="medical ko description",
//                    Status = true
//                }

//            };

//            _serviceList = new List<ServiceItemEntity>()
//            {
//                new ServiceItemEntity() {
//                    Id = 1,
//                    Name = "Orange Juice",
//                    CategoryId = 1,
//                    UserTypeId = 2,
//                    Status = true,
//                    Description="YOLO",
//                    IsDeleted= false
//                    },

//                new ServiceItemEntity() {
//                    Id = 2,
//                    Name = "Banana Juice",
//                    CategoryId = 1,
//                    UserTypeId = 2,
//                    Status = true,
//                    Description="BOLO",
//                    IsDeleted= false},

//                new ServiceItemEntity() {
//                    Id = 3,
//                    Name = "Apple Juice",
//                    CategoryId = 1,
//                    UserTypeId = 2,
//                    Status = true,
//                    Description="AOLO",
//                    IsDeleted= false}
//            };

//            _imageList = new List<ServiceItemImageEntity>()
//            {
//                new ServiceItemImageEntity()
//                {
//                ServiceItemId = 1,
//                OriginalImageName = "Image_1.png",
//                ImageURL = "something/nothing/image_1.png",
//                Id = 1,
//                IsDeleted = false
//                }
//            };
//        }


//        public IEnumerable<ServiceItemEntity> GetServices()
//        {
//            return _serviceList;
//        }

//        public ServiceItemEntity AddService(ServiceItemEntity model, List<ServiceItemImageEntity> images)
//        {
//            _serviceList.Add(model);
//            return model;

//        }

//        public ServiceItemEntity GetService(int? Id)
//        {
//            return _serviceList.Where(a => a.Id == Id)
//                .FirstOrDefault();
//        }

//        public void DeleteService(int? Id)
//        {
//            var existing = _serviceList.First(a => a.Id == Id);
//            _serviceList.Remove(existing);
//        }

//        public IEnumerable<CategoryEntity> GetCategories()
//        {
//            return _categoryList;
//        }

//        public ServiceItemEntity UpdateService(int? Id, ServiceItemEntity model)
//        {
//            ServiceItemEntity si = _serviceList.First(a => a.Id == Id);
//            si.IsDeleted = model.IsDeleted;
//            si.Name = model.Name;
//            si.Status = model.Status;
//            si.UserType = model.UserType;
//            si.UserTypeId = model.UserTypeId;
//            si.CategoryId = model.CategoryId;
//            si.Description = model.Description;

//            return si;
//        }

//        public ServiceItemEntity GetServiceByServiceItemId(int? Id)
//        {
//            throw new NotImplementedException();
//        }

//        public IEnumerable<ServiceItemEntity> GetServicesByCategoryId(int? Id)
//        {
//            throw new NotImplementedException();
//        }


//        public void DeleteImageByServiceItemImageId(int? Id)
//        {
//            throw new NotImplementedException();
//        }

//        public IEnumerable<ServiceItemImageEntity> GetImageByServiceItemImageId(int? Id)
//        {
//            throw new NotImplementedException();
//        }
//    }
//}
