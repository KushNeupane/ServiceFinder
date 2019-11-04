using ServiceFinder.DI.ViewModels.App;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.App.ViewModel
{
    public class ObjectLogViewModel: IObjectLogViewModel
    {
        public int ObjectId { get; set; }
        public string UserId { get; set; }

    }
}
