using ServiceFinder.DI.Core;
using System.Collections.Generic;

namespace Servicefinder.Core.Response
{
    public class LoginResponseModel : IResponseModel
    {
        public bool isSuccess { get; set; }
        public List<string> errors { get; set; }
        public string successMessage { get; set; }

        public string token { get; set; }
        public bool twoFactorEnabled { get; set; }
        public IList<string> role { get; set; }
        public object loginData { get; set; }
    }
}
