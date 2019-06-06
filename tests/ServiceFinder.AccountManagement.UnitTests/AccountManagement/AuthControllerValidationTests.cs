using Finder.Framework.Model.ViewModels.AccountManagement;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using System;
using TAM.Framework.Model.Models.AccountManagement;
using TAM.Framework.Model.ViewModels.AccountManagement;
using Xunit;

namespace Finder.AccountManagement.UnitTests
{
  public class AuthControllerValidationTests

  {
   
    [Fact]
    public void Login_EmailIndex_AcceptsAtZeroIndex()
    {
        LoginViewModel model = new LoginViewModel();
        model.email = "manish.manandhar@cloudyfox.com";
        var actual = false;
        if (model.email.IndexOf('@') > 1)
        {
            actual = true;
        }
        Assert.True(actual);
    }

    [Fact]
    public void Register_DisplayNameValidation_ShouldNotBeNull()
    {
        EmailRegistrationViewModel nameModel = new EmailRegistrationViewModel();
        nameModel.displayName = "manish";
        var actual = true;
        if (nameModel.displayName == null || nameModel.displayName.Contains(" ") || nameModel.displayName == "")
        {
            actual = false;
        }
        Assert.True(actual);
    }

    [Theory]
    [InlineData("M@Nish123")]
    public void Registration_ConfirmPasswordValidation_ShouldMatchPassword(string x)
    {
        EmailRegistrationViewModel confirmModel = new EmailRegistrationViewModel();
        var expected = confirmModel.password = x;
        var actual = confirmModel.confirmPassword = "M@Nish123";
        Assert.Equal(expected, actual);
    }
  }
}
