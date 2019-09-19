using System.Collections.Generic;

namespace ServiceFinder.DI.Core
{
    public interface IResponseModel
    {
        bool isSuccess { get; set; }
        List<string> errors { get; set; }
        string successMessage { get; set; }
    }
}
