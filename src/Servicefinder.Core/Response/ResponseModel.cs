using ServiceFinder.DI.Response.Core;
using System.Collections.Generic;

namespace Servicefinder.Core.Response
{
    public class ResponseModel : IResponseModel
    {
        public bool isSuccess { get; set; }
        public List<string> errors { get; set; }
        public string successMessage { get; set; }
        public object data { get; set; }
    }
}
