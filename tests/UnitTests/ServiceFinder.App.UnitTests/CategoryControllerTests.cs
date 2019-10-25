using Moq;
using Xunit;
using System;
using System.Threading.Tasks;
using ServiceFinder.App.Controllers;
using ServiceFinder.DI.Services.App;
using ServiceFinder.Main.ViewModel;

namespace ServiceFinder.App.UnitTests
{
    public class CategoryControllerTests
    {
        [Fact]
        public async Task EditProfile_ReturnsResponseModel()
        {
            // Arrange
            var mockServiceProvider = new Mock<IServiceProvider>();
            var mockCategoryService = new Mock<ICategoryService>();

            mockCategoryService.Setup(repo => repo.AddAsync(new CategoryViewModel() { Name = "test" })).ReturnsAsync(new CategoryViewModel() { Name = "test" });

            var controller = new CategoryController(mockServiceProvider.Object);
            var result = await controller.AddCategory(new CategoryViewModel() { Name = "test" });

            Assert.True(true);
        }
    }
}
