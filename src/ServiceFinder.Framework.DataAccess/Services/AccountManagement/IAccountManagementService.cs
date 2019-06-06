using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using TAM.Framework.Model.Models.AccountManagement;

namespace ServiceFinder.Framework.DataAccess.Services.AccountManagement
{
  public interface IAccountManagementService
  {
    Task<string> GetEmailAsync(ApplicationUserEntity user);

    Task<ApplicationUserEntity> FindByEmailAsync(string email);

    Task SignInAsync(ApplicationUserEntity user, bool isPersistent);

    Task<IdentityResult> CreateAsync(ApplicationUserEntity user, string password);

    Task<string> GenerateTwoFactorTokenAsync(ApplicationUserEntity user, string tokenProvider);

    Task<SignInResult> TwoFactorSignInAsync(string provider, string code, bool isPersistent, bool rememberClient);

    Task<SignInResult> PasswordSignInAsync(string userName, string password, bool isPersistent, bool lockoutOnFailure);
  }
}
