using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Finder.Framework.Model.ViewModels.AccountManagement
{
    public class EmailRegistrationViewModel
    {
        public string displayName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string confirmPassword { get; set; }
        public string phoneNumber { get; set; }
        public string address{ get; set; }
        public string imageUrl { get; set; }
    }
}
