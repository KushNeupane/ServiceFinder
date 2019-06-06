using System.Collections.Generic;

namespace Service.Framework.Core.Response
{
  public interface IResponseModel
  {
    bool isSuccess { get; set; }
    List<string> errors { get; set; }
    string successMessage { get; set; }
  }
}
