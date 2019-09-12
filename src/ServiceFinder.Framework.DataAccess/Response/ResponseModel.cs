using System.Collections.Generic;

namespace Service.Framework.Core.Response
{
    public class ResponseModel : IResponseModel
    {
        public bool isSuccess { get; set; }
        public string successMessage { get; set; }
        public List<string> errors { get; set; }
        public object data { get; set; }
    }
}

