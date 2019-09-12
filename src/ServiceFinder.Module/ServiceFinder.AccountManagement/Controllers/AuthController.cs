using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using Service.Framework.Core.Helper;
using Microsoft.AspNetCore.Identity;
using Service.Framework.Core.Response;
using ServiceFinder.DependencyInjection.Usability;
using TAM.Framework.Model.Models.AccountManagement;
using TAM.Framework.Model.ViewModels.AccountManagement;
using Finder.Framework.Model.ViewModels.AccountManagement;
using ServiceFinder.Framework.Model.ViewModels.AccountManagement;

namespace TAM.AccountManagement
{
  [Route("api/auth")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    private IServiceProvider service;
    private IEmailSender emailSender => service.GetService(typeof(IEmailSender)) as IEmailSender;
    private ILogger<AuthController> logger => service.GetService(typeof(ILogger<AuthController>)) as ILogger<AuthController>;
    private IOptions<MailSettingModel> mailSetting => service.GetService(typeof(IOptions<MailSettingModel>)) as IOptions<MailSettingModel>;
    private IOptions<GeneralSettingModel> generalSetting => service.GetService(typeof(IOptions<GeneralSettingModel>)) as IOptions<GeneralSettingModel>;
    private UserManager<ApplicationUserEntity> userManager => service.GetService(typeof(UserManager<ApplicationUserEntity>)) as UserManager<ApplicationUserEntity>;
    private SignInManager<ApplicationUserEntity> signInManager => service.GetService(typeof(SignInManager<ApplicationUserEntity>)) as SignInManager<ApplicationUserEntity>;


    public AuthController(IServiceProvider service)
    {
      this.service = service;
    }


    [HttpPost]
    [Route("login")]
    public async Task<LoginResponseModel> Login([FromBody]LoginViewModel model)
    {
      ApplicationUserEntity user = new ApplicationUserEntity();
      Microsoft.AspNetCore.Identity.SignInResult result = null;
      LoginResponseModel response = new LoginResponseModel() { errors = new List<string>() };

      try
      {
        //Check for email
        if (model.email.IndexOf('@') > -1)
        {
          user = await userManager.FindByEmailAsync(model.email);
          if (user == null)
          {
            response.errors.Add("Email not registered yet");
            return response;
          }
          else
          {
            Set("UserId", user.Id, null);
            string emailSource = user != null ? user.Email.ToLower() : null;
            string emailDestination = model.email != null ? model.email.ToLower() : model.email;

            if (emailSource != emailDestination)
            {
              response.errors.Add("Email not registered yet");
              return response;
            }

          }

        }
        else
        {
          response.errors.Add("Invalid email pattern");
          return response;
        }

        //Check for password
        result = await signInManager.PasswordSignInAsync(model.email, model.password, isPersistent: false, lockoutOnFailure: true);
        if (result.Succeeded)
        {
          response.isSuccess = true;
          response.loginData = user;
          response.role = await userManager.GetRolesAsync(user);
          response.token = AuthHelper.GenerateToken(user, response.role[0]);
        }
        else
        {
          response.errors.Add("Username or Password doesnot match");
        }

        if (result.RequiresTwoFactor)
        {
          response.isSuccess = true;
          response.loginData = user;
          response.twoFactorEnabled = true;
          response.role = await userManager.GetRolesAsync(user);
          if (response.role != null)
          {
            response.token = AuthHelper.GenerateToken(user, response.role[0]);
          }
          await emailSender.SendEmailAsync(this.mailSetting.Value, await userManager.GetEmailAsync(user), "Security Code", "Your security code is: " + await userManager.GenerateTwoFactorTokenAsync(user, "Email"));
        }

        //if (result.IsLockedOut)
        //{
        //    response.errors.Add("Username or Password doesnot match");
        //}
      }
      catch (Exception ex) { response.errors.Add("Something went wrong, Please contact to admin"); }
      return response;
    }

    [HttpPost]
    [Route("register")]
    public async Task<RegistrationResponseModel> Register([FromBody] EmailRegistrationViewModel formData)
    {
      RegistrationResponseModel response = new RegistrationResponseModel() { errors = new List<string>() };
            response.isSuccess = false;

      if (ModelState.IsValid)
      {
        ApplicationUserEntity existingUser = await userManager.FindByEmailAsync(formData.email);
        if (existingUser!=null)
        {
            response.errors.Add("Email already exists!");
            return response;
        }
        var user = new ApplicationUserEntity
        {
          IsAdmin = false,
          Email = formData.email,
          CreatedOn = DateTime.Now,
          UserName = formData.email,
          DisplayName = formData.displayName,
          Address = formData.address,
          PhoneNumber = formData.phoneNumber
        };

        try
        {
          var identityResult = await userManager.CreateAsync(user, formData.password);
          if (identityResult.Succeeded)
          {
            response.isSuccess = true;
            try
            {
              await signInManager.SignInAsync(user, isPersistent: false);
              userManager.AddToRoleAsync(user, "user").Wait();
            }
            catch (Exception) { };
          }
        }
        catch (Exception ex) { };
      }
      return response;
    }

    [HttpPost]
    [Route("verifycode")]
    public async Task<LoginResponseModel> VerifyCode(VerifyCodeViewModel model)
    {

      LoginResponseModel response = new LoginResponseModel();
      response.isSuccess = false;

      var result = await signInManager.TwoFactorSignInAsync("Email", model.Code, model.RememberMe, model.RememberBrowser);
      if (result.Succeeded)
      {
        response.isSuccess = true;
        response.loginData = await userManager.FindByEmailAsync(model.Email);
      }

      if (result.IsLockedOut)
      {
        response.isSuccess = false;
        response.errors.Add("Account has been locked");
        logger.LogWarning(7, "User account locked out.");
      }
      return response;
    }
    //setting userId to cookies
    public void Set(string key, string value, int? expireTime)
    {
      CookieOptions option = new CookieOptions();
      if (expireTime.HasValue)
      {
        option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
      }
      else
      {
        option.Expires = DateTime.Now.AddDays(1);
        Response.Cookies.Append(key, value, option);
      }

    }

    //To get reset link and token in url
    [HttpPost]
    [Route("forgotpassword")]
    public async Task<LoginResponseModel> ForgotPassword([FromBody] ForgotPasswordViewModel model)
    {
      string AppBaseUrl = this.generalSetting.Value.AppBaseUrl;

      ApplicationUserEntity user = new ApplicationUserEntity();
      LoginResponseModel response = new LoginResponseModel();
      response.isSuccess = false;

      try
      {
        user = await userManager.FindByEmailAsync(model.email);
        if (user == null)
        {
          return response;
        }
        else
        {
          var token = userManager.GeneratePasswordResetTokenAsync(user).Result;
          try
          {
            var resetLink = AppBaseUrl.Trim() + "resetPassword?token=" + token;

            await emailSender.SendEmailAsync(this.mailSetting.Value, await userManager.GetEmailAsync(user), "Password Reset Link", "Your PasswordReset Link is:   <a href='" + resetLink + "'>'" + resetLink + "'</a>");
          }
          catch (Exception e) { }
          response.isSuccess = true;
          response.loginData = user;
          response.token = token;
        }
      }
      catch (Exception ex)
      {
      }
      return response;
    }

    //to reset password by using email
    [HttpPost]
    [Route("resetpassword")]
    public async Task<ResponseModel> ResetPasswordByEmail([FromBody] ResetPasswordViewModel model)
    {
      ApplicationUserEntity user = new ApplicationUserEntity();
      ResponseModel response = new ResponseModel();
      response.isSuccess = false;

      try
      {
        user = await userManager.FindByEmailAsync(model.email);

        if (user == null)
          return response;
        else
        {
          IdentityResult result = await userManager.ResetPasswordAsync(user, model.token, model.password);

          if (result.Succeeded)
            response.isSuccess = true;
        }
      }

      catch (Exception ex)
      {

      }
      return response;

    }
  }
}

