using Microsoft.AspNetCore.Identity;
using TAM.Framework.Model.Models.AccountManagement;

namespace Finder.Framework.DataAccess.Contexts.AccountManagement
{
	public static class DefaultUserInitializer
	{
		public static void SeedInitialUsers(UserManager<ApplicationUserEntity> userManager)
		{
			if (userManager.FindByEmailAsync("admin@cloudyfox.com").Result == null)
			{
				ApplicationUserEntity user = new ApplicationUserEntity
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
				ApplicationUserEntity user = new ApplicationUserEntity
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
