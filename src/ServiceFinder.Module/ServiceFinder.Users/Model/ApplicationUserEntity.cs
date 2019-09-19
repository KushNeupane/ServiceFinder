using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Users.Model
{
    public class ApplicationUserEntity : IdentityUser
    {
        public string DisplayName { get; set; }
        public bool IsAdmin { get; set; }
        public DateTime? CreatedOn { get; set; }
        public bool Status { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string ImageUrl { get; set; }
        public string OriginalImageName { get; set; }
    }
}