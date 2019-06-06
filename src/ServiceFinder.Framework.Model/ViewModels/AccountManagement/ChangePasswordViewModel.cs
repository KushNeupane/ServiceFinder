using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Framework.Model.ViewModels.AccountManagement
{
    public class ChangePasswordViewModel
    {
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
