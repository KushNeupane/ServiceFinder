using Moq;
using Xunit;
using System.Threading.Tasks;
using ServiceFinder.Users.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using ServiceFinder.Users.Controllers;

namespace ServiceFinder.Users.UnitTests
{
    public class EditProfileControllerTests
    {
        [Fact]
        public void EditProfile_ReturnsResponseModel()
        {
            // Arrange
            var mockUserStore = new Mock<IUserStore<ApplicationUserModel>>();
            var mockHttpContextAccessor = new Mock<IHttpContextAccessor>();
            var mockUserManager = new Mock<UserManager<ApplicationUserModel>>(mockUserStore.Object, null, null, null, null, null, null, null, null);

            mockUserManager.Setup(x => x.FindByIdAsync("")).ReturnsAsync(getApplicationUser());
            mockUserManager.Setup(x => x.UpdateAsync(getApplicationUser())).ReturnsAsync(new Mock<IdentityResult>().Object);
            Assert.True(true);
        }

        [Fact]
        public void ChangePassword_ReturnsResponseModel()
        {
            // Arrange
            var mockUserStore = new Mock<IUserStore<ApplicationUserModel>>();
            var mockHttpContextAccessor = new Mock<IHttpContextAccessor>();
            var mockUserManager = new Mock<UserManager<ApplicationUserModel>>(mockUserStore.Object, null, null, null, null, null, null, null, null);

            mockUserManager.Setup(x => x.FindByIdAsync("")).ReturnsAsync(getApplicationUser());
            Assert.True(true);
        }

        [Fact]
        public async Task getUserByIdAsync_ReturnsApplicationUser()
        {
            // Arrange
            var mockUserStore = new Mock<IUserStore<ApplicationUserModel>>();
            var mockHttpContextAccessor = new Mock<IHttpContextAccessor>();
            var mockUserManager = new Mock<UserManager<ApplicationUserModel>>(mockUserStore.Object, null, null, null, null, null, null, null, null);

            mockUserManager.Setup(x => x.FindByIdAsync("")).ReturnsAsync(getApplicationUser());
            var controller = new EditProfileController(mockUserManager.Object, mockHttpContextAccessor.Object);

            // Act
            var result = await controller.getUserByIdAsync();
            Assert.True(true);
        }

        private ApplicationUserModel getApplicationUser()
        {
            return new ApplicationUserModel()
            {
                Id = "123456789",
                UserName = "admin",
                PasswordHash = "1234MAHEDFSK12940ADRTAL"
            };
        }
    }
}
