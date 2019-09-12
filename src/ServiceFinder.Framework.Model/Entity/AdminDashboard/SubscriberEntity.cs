using System;
using System.Collections.Generic;
using System.Text;
using TAM.Framework.Model.Models;

namespace ServiceFinder.Framework.Model.Entity.AdminDashboard
{
    public class SubscriberEntity: BaseEntity
    {
        public string Email { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
    }
}
