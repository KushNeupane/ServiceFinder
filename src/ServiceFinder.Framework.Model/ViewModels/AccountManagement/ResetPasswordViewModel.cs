using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Framework.Model.ViewModels.AccountManagement
{
    public class ResetPasswordViewModel
    {
        public string email { get; set; }
        public string password { get; set; }
        public string confirmPassword { get; set; }
        public string token { get; set; }
    }
}
