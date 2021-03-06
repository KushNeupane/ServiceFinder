using System.Collections.Generic;

namespace ServiceFinder.DI.Response.Core
{
    public interface IResponseModel
    {
        bool isSuccess { get; set; }
        List<string> errors { get; set; }
        string successMessage { get; set; }
        object data { get; set; }
    }
}
