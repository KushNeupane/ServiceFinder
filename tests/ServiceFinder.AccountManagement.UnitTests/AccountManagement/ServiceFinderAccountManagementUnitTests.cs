using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Moq;
using ServiceFinder.Framework.DataAccess.Services.AccountManagement;
using System;
using TAM.Framework.Model.Models.AccountManagement;
using Xunit;

namespace Tests
{
  public class ServiceFinderAccountManagementUnitTests
    {
        //Global Setup
        ApplicationUserEntity model = new ApplicationUserEntity();
        Mock<IAccountManagementService> accountManagementService = new Mock<IAccountManagementService>();


        [Fact]
        public void FindByEmailAsyn_IsCompleted_ExpectedTrueResult()
        {
            //Arrange
            string email = "kush.neupane@cloudyfox.com";
            try
            {
                accountManagementService.Setup(e => e.FindByEmailAsync(email)).ReturnsAsync(new ApplicationUserEntity { });


            }
            catch (Exception ex)
            {

            }
            //Act
            var result = accountManagementService.Object.FindByEmailAsync(email);

            //ASSERT
            Xunit.Assert.True(result.IsCompletedSuccessfully);

        }

        //testing GetEmailAync method
        //GetEmailAsync method takes Instance oF ApplicationUserEntity as parameter
        //ApplicationUserEntity model = new ApplicationUserEntity();
        [Fact]
        public void GetEmailAsync_IsCompletedSuccessfully_ExpectedTrueResult()
        {
            //Arrange
            try
            {
                accountManagementService.Setup(e => e.GetEmailAsync(new ApplicationUserEntity()));
            }
            catch (Exception ex)
            {

            }

            //ACT
            var GetEmailResult = accountManagementService.Object.GetEmailAsync(model);

            //ASSERT
            Xunit.Assert.True(GetEmailResult.IsCompletedSuccessfully);
        }

        //Testing SignInAsync method
        //SignInAsync method takes Instance of ApplicationUserEntity as paramater and IsPersistent(bool)
        //same instance ApplicationUserEntity can be used here too
        [Fact]
        public void SignInAsync_IsCompletedSuccessfully_ExpectedtrueResult()
        {
            //Arrange
            try
            {
                accountManagementService.Setup(e => e.SignInAsync(new ApplicationUserEntity(), false));
            }
            catch (Exception ex)
            {

            }
            
            //ACT
            var SignInAsyncResult = accountManagementService.Object.SignInAsync(model, false);

            //Assert
            Xunit.Assert.True(SignInAsyncResult.IsCompletedSuccessfully);
        }


        //Testing CreateAsync method
        //It returns IdentityResult as result. IT uses an instance of ApplicationUserEntity.
        //Same instance can be used. and also it uses password as second parameter
        [Fact]
        public void CreateAsync_IsCompletedSuccessfully_ExpectedTrueResult()
        {
            //Arrange
            string password = "KU$h123";
            try
            {
                accountManagementService.Setup(e => e.CreateAsync(new ApplicationUserEntity(), password));
            }
            catch (Exception ex)
            {

            }

            //Act
            var CreateAsyncResult = accountManagementService.Object.CreateAsync(model, "KU$h123");

            //Assert
            Xunit.Assert.True(CreateAsyncResult.IsCompletedSuccessfully);

        }


        //Testing GenerateTwoFactorTokenAsync method
        //It uses two parameter.. Instance of ApplicationUserEntity so, same instance(model) 
        //can be used and tokenProvider as second parameter can be used. In this case
        //Email is the token provider
        [Fact]
        public void GenerateTwoFactorTokenAsync_IsCompletedSuccessfully_ExpectedTrueResult()
        {
            //Arrange
            string tokenProvider = "www.gmail.com";
            try
            {
                accountManagementService.Setup(e => e.GenerateTwoFactorTokenAsync(new ApplicationUserEntity(), tokenProvider));
            }
            catch (Exception ex)
            {

            }

            //ACT
            var GenerateTwoFactorTokenAsyncResult = accountManagementService.Object.GenerateTwoFactorTokenAsync(model, "www.gmail.com");

            //Assert
            Xunit.Assert.True(GenerateTwoFactorTokenAsyncResult.IsCompletedSuccessfully);

        }


        //Testing TwoFactorSignInAsync method
        //It Returns SignInResult as result. It uses four parameter. Provider(Email), code(the code that is provided in the email), isPersistent(bool)
        //and rememberClient(bool)
        [Fact]
        public void TwoFactorSignInAsync_IsCompletedSuccessfully_ExpectedTrueResult()
        {
            //Arrange
            string tokenProvider = "www.gmail.com";
            String code = "445566";
            try
            {
                accountManagementService.Setup(e => e.TwoFactorSignInAsync(tokenProvider, code, false, false)).ReturnsAsync(new SignInResult());
            }
            catch (Exception ex)
            {

            }

            //ACT
            var TwoFactorSignInAsyncAsyncResult = accountManagementService.Object.TwoFactorSignInAsync("www.gmail.com", "445566", false, false);

            //Assert
            Xunit.Assert.True(TwoFactorSignInAsyncAsyncResult.IsCompletedSuccessfully);

        }


        //Testing PasswordSignInAsync method
        //It Returns SignInResult as result. It uses four parameter. userName, password, isPersistent(bool)
        //and lockoutOnFailure(bool)
        [Fact]
        public void PasswordSignInAsync_IsCompletedSuccessfully_ExpectedTrueResult()
        {
            //Arrange
            string username = "Kush";
            string password = "KU$h123";
            try
            {
                accountManagementService.Setup(e => e.PasswordSignInAsync(username, password, false, false)).ReturnsAsync(new SignInResult());
            }
            catch (Exception ex)
            {

            }

            //ACT
            var PasswordSignInAsyncResult = accountManagementService.Object.PasswordSignInAsync("Kush", "KU$h123", false, false);

            //Assert
            Xunit.Assert.True(PasswordSignInAsyncResult.IsCompletedSuccessfully);

        }
    }
}