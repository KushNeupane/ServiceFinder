using ServiceFinder.DI.Core;
using Microsoft.AspNetCore.Identity;

namespace Finder.Framework.DataAccess.Contexts.AccountManagement
{
	public static class DefaultUserInitializer
	{
		public static void SeedInitialUsers(UserManager<ApplicationUserModel> userManager)
		{
			if (userManager.FindByEmailAsync("admin@cloudyfox.com").Result == null)
			{
				ApplicationUserModel user = new ApplicationUserModel
				{
					IsAdmin = true,
					UserName = "admin@cloudyfox.com",
					Email = "admin@cloudyfox.com"
				};

				IdentityResult result = userManager.CreateAsync(user, "Cloudyfox@01").Result;

				if (result.Succeeded)
				{
					userManager.AddToRoleAsync(user, "admin").Wait();
				}
			}

			if (userManager.FindByEmailAsync("user@cloudyfox.com").Result == null)
			{
				ApplicationUserModel user = new ApplicationUserModel
				{
					IsAdmin = false,
					UserName = "user@cloudyfox.com",
					Email = "user@cloudyfox.com"
				};

				IdentityResult result = userManager.CreateAsync(user, "Cloudyfox@01").Result;

				if (result.Succeeded)
				{
					userManager.AddToRoleAsync(user, "user").Wait();
				}
			}
		}
	}
}
