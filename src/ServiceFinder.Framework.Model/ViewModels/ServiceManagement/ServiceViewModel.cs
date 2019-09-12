using ServiceFinder.Framework.Model.Models.UserDashboard;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TAM.Framework.Model.Models;

namespace ServiceFinder.Framework.Model.ViewModels
{
    public class ServiceViewModel : BaseEntity
    {
        public ServiceItemEntity serviceData { get; set; }

        public bool ShowReview { get; set; } = true;

        public bool LoggedIn { get; set; } = false;


    }
}

