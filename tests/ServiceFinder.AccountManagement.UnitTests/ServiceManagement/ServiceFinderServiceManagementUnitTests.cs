//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using ServiceFinder.Dashboard.Controllers;
//using ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement;
//using ServiceFinder.Framework.Model.Models.UserDashboard;
//using System;
//using System.Collections.Generic;
//using System.Text;
//using Xunit;

//namespace ServiceFinder.AccountManagement.UnitTests.ServiceManagement
//{
//    public class ServiceFinderServiceManagementUnitTests
//    {
//        ServiceController _controller;
//        IServiceManagement _service;

//        public ServiceFinderServiceManagementUnitTests()
//        {
//            _service = new ServiceManagementFake();
//            _controller = new ServiceController(_service);
//        }

//        [Fact]
//        public void GetServices_WhenCalled_ReturnsOkResult()
//        {
//            // Act
//            var okResult = _controller.GetServices();

//            // Assert
//            Assert.IsType<OkObjectResult>(okResult.Result);
//        }

//        [Fact]
//        public void GetCategories_WhenCalled_ReturnsOkResult()
//        {
//            //Act
//            var okResult = _controller.GetCategories();

//            //Assert
//            Assert.IsType<OkObjectResult>(okResult.Result);
//        }

//        [Fact]
//        public void GetService_ExistingIdPassed_ReturnsOkResult()
//        {
//            // Arrange
//            var Id = 1;
//            // Act
//            var okResult = _controller.GetServiceByServiceItemId(Id);

//            // Assert
//            Assert.IsType<OkObjectResult>(okResult.Result);
//        }

//        [Theory]
//        [InlineData(4, "Mango juice", 1, 2, true, "MOLO", false)]
//        public void AddService_ValidObjectPassed_ReturnsCreatedResponse(int serviceItemId, string name, int categoryId, int userTypeId, bool status, string description, bool isDeleted)
//        {
//            // Arrange
//            ServiceItemEntity model = new ServiceItemEntity()
//            {
//                Id = serviceItemId,
//                Name = name,
//                CategoryId = categoryId,
//                UserTypeId = userTypeId,
//                Status = status,
//                Description = description,
//                IsDeleted = isDeleted
//            };

//            // Act
//            ServiceItemEntity okResult = new ServiceItemEntity();
//            okResult = _controller.AddService();

//            // Assert
//            Assert.Matches("Mango juice", okResult.Name);

//        }

//        [Fact]
//        public void DeleteService_ExistingId_ReturnsOkResult()
//        {
//            // Arrange
//            var Id = 3;

//            // Act
//            var okResponse = _controller.DeleteService(Id);

//            // Assert
//            Assert.IsType<OkResult>(okResponse);

//        }

//        [Theory]
//        [InlineData(1, "Apple Cider", 3, 5, true, "", false)]
//        public void UpdateService_OnExistingId_ReturnOkResult(int serviceItemId, string name, int categoryId, int userTypeId, bool status, string description, bool isDeleted)
//        {
//            //Arrange
//            ServiceItemEntity service = new ServiceItemEntity()
//            {
//                Id = serviceItemId,
//                Name = name,
//                CategoryId = categoryId,
//                UserTypeId = userTypeId,
//                Status = status,
//                Description = description,
//                IsDeleted = isDeleted
//            };

//            //Act
//            ServiceItemEntity okresult = new ServiceItemEntity();
//            okresult = _controller.UpdateService(serviceItemId, service);

//            //Assert
//            Assert.Matches("Apple Cider", okresult.Name);

//        }
//    }
//}
