using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.DI.ViewModels.App
{
    public interface IObjectLogViewModel
    {
        int ObjectId { get; set; }
        string UserId { get; set; }

    }
}
