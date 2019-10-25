using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Servicefinder.Core.Response;
using ServiceFinder.Users.Model;
using ServiceFinder.Users.ViewModel;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceFinder.Users.Controllers
{
    [Route("api/editProfile")]
    [ApiController]
    public class EditProfileController : ControllerBase
    {
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly UserManager<ApplicationUserModel> userManager;

        public EditProfileController(UserManager<ApplicationUserModel> userManager,
                IHttpContextAccessor httpContextAccessor)
        {
            this.userManager = userManager;
            this.httpContextAccessor = httpContextAccessor;
        }


        //Edit Profile API
        [HttpPut]
        [Route("editUserProfile")]
        public async Task<ResponseModel> EditProfile()
        {

            string values = Request.Form["values"];
            var files = Request.Form.Files;


            ResponseModel response = new ResponseModel();
            response.isSuccess = false;
            var id = httpContextAccessor.HttpContext.Request.Cookies["UserId"];
            ApplicationUserModel user = await userManager.FindByIdAsync(id);
            ApplicationUserModel model = JsonConvert.DeserializeObject<ApplicationUserModel>(values);

            //updating values.
            user.DisplayName = model.DisplayName;
            user.Email = model.Email;
            user.Address = model.Address;
            user.PhoneNumber = model.PhoneNumber;

            //updating images

            foreach (var file in files)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\profilePic", file.FileName);
                try
                {
                    var stream = new FileStream(path, FileMode.Create);
                    file.CopyTo(stream);
                }
                catch (Exception) { }

                //  user.ImageUrl = path;
                // user.OriginalImageName = file.FileName;
            }
            await userManager.UpdateAsync(user);
            response.isSuccess = true;
            return response;

        }

        //ChangePassword
        [HttpPost]
        [Route("changePassword")]
        public async Task<ResponseModel> ChangePassword([FromBody] ChangePasswordViewModel model)
        {
            ResponseModel response = new ResponseModel();
            response.isSuccess = false;
            int passDefLength = 6;
            if (ModelState.IsValid)
            {
                var id = httpContextAccessor.HttpContext.Request.Cookies["UserId"];
                ApplicationUserModel user = await userManager.FindByIdAsync(id);
                try
                {
                    //Custome logic to check identity password Pattern
                    if (model.NewPassword.Length >= passDefLength)
                    {
                        for (int i = 0; i < model.NewPassword.Length; i++)
                        {
                            if (model.NewPassword.Any(char.IsUpper))
                            {
                                if (model.NewPassword.Any(char.IsLower))
                                {
                                    if (model.NewPassword.Any(char.IsNumber))
                                    {
                                        if (model.NewPassword.Contains("!") | model.NewPassword.Contains("@")
                                            | model.NewPassword.Contains("#") | model.NewPassword.Contains("$")
                                            | model.NewPassword.Contains("%") | model.NewPassword.Contains("^")
                                            | model.NewPassword.Contains("&") | model.NewPassword.Contains("*"))
                                        {
                                            IdentityResult result = await userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
                                            response.isSuccess = true;

                                        }
                                    }
                                }
                            }
                        }
                    }
                    else
                        response.isSuccess = false;
                }
                catch (Exception) { };
            }
            return response;

        }

        [HttpGet]
        [Route("getUserByID")]
        public async Task<EditProfileViewModel> getUserByIdAsync()
        {
            var id = httpContextAccessor.HttpContext.Request.Cookies["UserId"];
            ApplicationUserModel user = await userManager.FindByIdAsync(id);
            EditProfileViewModel model = new EditProfileViewModel();

            if (id != null)
            {
                model.displayName = user.DisplayName;
                model.address = user.Address;
                model.email = user.Email;
                model.phoneNumber = user.PhoneNumber;
                model.originalImageName = null;// user.OriginalImageName;
            }
            return model;
        }
    }
}

