using Finder.Framework.Model.ViewModels.AccountManagement;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Service.Framework.Core.Helper;
using Service.Framework.Core.Response;
using System;
using System.Threading.Tasks;
using TAM.Framework.Model.Models.AccountManagement;
using Microsoft.AspNetCore.Http;


namespace Finder.AccountManagement.Controllers
{
    public class ExternalAuthController : Controller
    {
        readonly UserManager<ApplicationUserEntity> userManager;
        readonly SignInManager<ApplicationUserEntity> signInManager;
        readonly IConfiguration configuration;


        public ExternalAuthController(
           UserManager<ApplicationUserEntity> userManager,
           SignInManager<ApplicationUserEntity> signInManager,
           IConfiguration configuration)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
        }

        [HttpGet]
        [Route("api/externalauth/clearCookie")]
        public void clearCookie()
        {
            foreach (var cookieKey in Request.Cookies.Keys)
            {
                Response.Cookies.Delete(cookieKey);
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("api/externalauth/login")]
        public async Task<LoginResponseModel> login([FromBody] ExternalRegistrationViewModel model)
        {
            int a = 1;
            //a = (model.email == "mrbeankofan@gmail.com") ? 2 : 1;

            LoginResponseModel response = new LoginResponseModel()
            {
                token = null,
                isSuccess = false,
                loginData = null,
                twoFactorEnabled = true
            };

            ApplicationUserEntity user = await userManager.FindByEmailAsync(model.email);
            if (user == null)
            {
                ApplicationUserEntity newUser = new ApplicationUserEntity
                {
                    DisplayName = model.name,
                    Email = model.email,
                    UserName = model.email
                };
                var identityResult = await this.userManager.CreateAsync(newUser, "S1akYux@");
                Set("UserId", newUser.Id, null);
                if (identityResult.Succeeded)
                {
                    response.isSuccess = true;
                    try
                    {
                        await signInManager.SignInAsync(user, isPersistent: false);
                    }
                    catch (Exception)
                    { };
                }
            }
            else
            {
                Set("UserId", user.Id, null);
            }


            response.isSuccess = true;
            response.loginData = user;
            response.role = await userManager.GetRolesAsync(user);
            response.token = AuthHelper.GenerateToken(user, response.role[0]);
            return response;
        }
        public void Set(string key, string value, int? expireTime)
        {
            CookieOptions option = new CookieOptions();
            if (expireTime.HasValue)
                option.Expires = DateTime.Now.AddMinutes(expireTime.Value);
            else
                option.Expires = DateTime.Now.AddDays(1);
            Response.Cookies.Append(key, value, option);
        }
    }
}
