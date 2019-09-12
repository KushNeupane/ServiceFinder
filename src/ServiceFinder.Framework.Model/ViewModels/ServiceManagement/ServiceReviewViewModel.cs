using ServiceFinder.Framework.Model.Entity.UserDashboard;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Framework.Model.ViewModels.ServiceManagement
{
    public class ServiceReviewViewModel
    {
        public ServiceReviewEntity reviewData { get; set; }

        public bool ShowEdit { get; set; } = false;

    }
}
