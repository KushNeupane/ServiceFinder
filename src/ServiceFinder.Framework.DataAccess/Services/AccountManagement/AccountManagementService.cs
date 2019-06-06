using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using TAM.Framework.Model.Models.AccountManagement;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace ServiceFinder.Framework.DataAccess.Services.AccountManagement
{
    public class AccountManagementService : IAccountManagementService
    {
        readonly UserManager<ApplicationUserEntity> userManager;
        readonly SignInManager<ApplicationUserEntity> signInManager;
        readonly IConfiguration configuration;

        public AccountManagementService(UserManager<ApplicationUserEntity> userManager, SignInManager<ApplicationUserEntity> signInManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
        }

        public async Task<string> GetEmailAsync(ApplicationUserEntity user)
        {
            return await userManager.GetEmailAsync(user);
        }

        public async Task<ApplicationUserEntity> FindByEmailAsync(string email)
        {
            return await userManager.FindByEmailAsync(email);
        }

        public async Task SignInAsync(ApplicationUserEntity user, bool isPersistent)
        {
            await signInManager.SignInAsync(user, isPersistent);
        }

        public async Task<IdentityResult> CreateAsync(ApplicationUserEntity user, string password)
        {
            return await userManager.CreateAsync(user, password);
        }

        public async Task<string> GenerateTwoFactorTokenAsync(ApplicationUserEntity user, string tokenProvider)
        {
            return await userManager.GenerateTwoFactorTokenAsync(user, tokenProvider);
        }

        public async Task<SignInResult> TwoFactorSignInAsync(string provider, string code, bool isPersistent, bool rememberClient)
        {
            return await signInManager.TwoFactorSignInAsync(provider, code, isPersistent, rememberClient);
        }

        public async Task<SignInResult> PasswordSignInAsync(string userName, string password, bool isPersistent, bool lockoutOnFailure)
        {
            return await signInManager.PasswordSignInAsync(userName, password, isPersistent, lockoutOnFailure);
        }

        public async Task<IList<string>> GetUserRolesAsync(ApplicationUserEntity user)
        {
            return await userManager.GetRolesAsync(user);
        }
    }
}
