using Microsoft.AspNetCore.Identity;
using System;

namespace ServiceFinder.Users.Model
{
    public class ApplicationUserModel : IdentityUser
    {
        public bool IsAdmin { get; set; }
        public string DisplayName { get; set; }
        public string Address { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
