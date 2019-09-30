using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.Users.Model;

namespace ServiceFinder.Users.DatabaseContext
{
    public class UserDbContext : IdentityDbContext<ApplicationUserModel>
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //Seed default User Roles
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole { Name = "admin", NormalizedName = "admin".ToUpper() },
                new IdentityRole { Name = "user", NormalizedName = "user".ToUpper() });

            base.OnModelCreating(builder);
        }
    }
}
