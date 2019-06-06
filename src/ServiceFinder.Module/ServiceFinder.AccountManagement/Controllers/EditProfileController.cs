﻿using Finder.Framework.Model.ViewModels.AccountManagement;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Service.Framework.Core.Response;
using ServiceFinder.Framework.Model.ViewModels.AccountManagement;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using TAM.Framework.Model.Models.AccountManagement;
using System.Linq;
using Newtonsoft.Json;
using System.IO;
using System.Net.Http;
using System.Net;

namespace ServiceFinder.AccountManagement.Controllers
{
    [Route("api/editProfile")]
    [ApiController]
    public class EditProfileController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly UserManager<ApplicationUserEntity> userManager;
        private string currentUserId;

        public EditProfileController(
                UserManager<ApplicationUserEntity> userManager,
                IHttpContextAccessor _httpContextAccessor
            )
            
        {
            this.currentUserId = _httpContextAccessor.HttpContext.Request.Cookies["UserId"];
            this.userManager = userManager;

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
            var id = this.currentUserId;
            ApplicationUserEntity user = await userManager.FindByIdAsync(id);
            ApplicationUserEntity model = JsonConvert.DeserializeObject<ApplicationUserEntity>(values);

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
                catch (Exception ex) { }
                
                user.ImageUrl = path;
                user.OriginalImageName = file.FileName;
            }
            await userManager.UpdateAsync(user);
            response.isSuccess = true;
            return response;

        }

        //ChangePassword
        [HttpPost]
        [Route("changePassword")]
        public async Task<ResponseModel> ChangePassword ([FromBody] ChangePasswordViewModel model)
        {
            ResponseModel response = new ResponseModel();
            response.isSuccess = false;
            int passDefLength = 6;
            if (ModelState.IsValid)
            {
                var id = this.currentUserId;
                ApplicationUserEntity user = await userManager.FindByIdAsync(id);
            try
            {
                //Custome logic to check identity password Pattern
                if(model.NewPassword.Length >= passDefLength)
                {
                    for (int i=0; i<model.NewPassword.Length; i++)
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
                {
                    response.isSuccess = false;
                }
            }
             catch (Exception ex) { };
            }
            return response;

        }

        [HttpGet]
        [Route("getUserByID")]
        public async Task<EditProfileViewModel> getUserByIdAsync()
        {
            var id = this.currentUserId;
            ApplicationUserEntity user = await userManager.FindByIdAsync(id);
            EditProfileViewModel model = new EditProfileViewModel();
            model.displayName = user.DisplayName;
            model.address = user.Address;
            model.email = user.Email;
            model.phoneNumber = user.PhoneNumber;
            model.originalImageName = user.OriginalImageName;
            return model;
        }
    }
}
