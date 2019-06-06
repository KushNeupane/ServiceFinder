using System.Collections.Generic;
using TAM.Framework.Model.Models.AccountManagement;

namespace Service.Framework.Core.Response
{
    public class LoginResponseModel : ResponseModel
    {
        public string token { get; set; }
        public bool twoFactorEnabled { get; set; }
        public IList<string> role { get; set; }
        public ApplicationUserEntity loginData { get; set; }
    }
}