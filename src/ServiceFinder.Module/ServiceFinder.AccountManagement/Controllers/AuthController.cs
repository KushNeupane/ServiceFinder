using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Service.Framework.Core.Helper;
using Microsoft.AspNetCore.Identity;
using Service.Framework.Core.Response;
using Microsoft.Extensions.Configuration;
using TAM.Framework.Model.Models.AccountManagement;
using TAM.Framework.Model.ViewModels.AccountManagement;
using Finder.Framework.Model.ViewModels.AccountManagement;
using TAM.Framework.DataAccess.Contexts.AccountManagement;
using Microsoft.AspNetCore.Http;
using ServiceFinder.Framework.Model.ViewModels.AccountManagement;

namespace TAM.AccountManagement
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IEmailSender emailSender;
        private readonly IConfiguration configuration;
        private readonly ILogger<AuthController> logger;
        private readonly UserManager<ApplicationUserEntity> userManager;
        private readonly SignInManager<ApplicationUserEntity> signInManager;
        private readonly ServiceFinderDbContext serviceFinderContext = null;

        public AuthController(
        UserManager<ApplicationUserEntity> userManager,
        SignInManager<ApplicationUserEntity> signInManager,
        IConfiguration configuration,
        IEmailSender emailSender,
        ServiceFinderDbContext _serviceFinderContext,
        ILogger<AuthController> _logger)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
            this.logger = _logger;
            this.emailSender = emailSender;
            this.serviceFinderContext = _serviceFinderContext;
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
                    if(user == null)
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
                    await emailSender.SendEmailAsync(await userManager.GetEmailAsync(user), "Security Code", "Your security code is: " + await userManager.GenerateTwoFactorTokenAsync(user, "Email"));
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
            RegistrationResponseModel response = new RegistrationResponseModel();
            response.isSuccess = false;

            if (ModelState.IsValid)
            {
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
                        // var resetLink = Url.Action("resetPassword", "AuthController", new { token = token}, protocol: HttpContext.Request.Scheme);
                        var resetLink = "http://localhost:42146/resetPassword?token=" + token;
                        await emailSender.SendEmailAsync(await userManager.GetEmailAsync(user), "Password Reset Link", "Your PasswordReset Link is:   <a href='" + resetLink + "'>'" + resetLink + "'</a>");
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
