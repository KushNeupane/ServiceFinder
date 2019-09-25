using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.DI.Core;

namespace ServiceFinder.Users.DatabaseContext
{
    public class UserDbContext : IdentityDbContext<ApplicationUserModel>
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        { }

        public virtual DbSet<ApplicationUserModel> applicationUsers { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            //Seed default User Roles
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole { Name = "admin", NormalizedName = "admin".ToUpper() },
                new IdentityRole { Name = "user", NormalizedName = "user".ToUpper() });

            //  builder.AddEntityConfigurationsFromAssembly(this.GetType().GetTypeInfo().Assembly);
            base.OnModelCreating(builder);
        }
    }
}
