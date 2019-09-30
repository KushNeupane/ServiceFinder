using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Servicefinder.Core.Response;
using ServiceFinder.Users.Helper;
using ServiceFinder.Users.Model;
using ServiceFinder.Users.ViewModel;
using System;
using System.Threading.Tasks;

namespace ServiceFinder.Users.Controllers
{
    public class ExternalAuthController : ControllerBase
    {
        readonly UserManager<ApplicationUserModel> userManager;
        readonly SignInManager<ApplicationUserModel> signInManager;
        readonly IConfiguration configuration;


        public ExternalAuthController(
           UserManager<ApplicationUserModel> userManager,
           SignInManager<ApplicationUserModel> signInManager,
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
            //a = (model.email == "mrbeankofan@gmail.com") ? 2 : 1;

            LoginResponseModel response = new LoginResponseModel()
            {
                token = null,
                isSuccess = false,
                loginData = null,
                twoFactorEnabled = true
            };

            ApplicationUserModel user = await userManager.FindByEmailAsync(model.email);
            if (user == null)
            {
                ApplicationUserModel newUser = new ApplicationUserModel
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
