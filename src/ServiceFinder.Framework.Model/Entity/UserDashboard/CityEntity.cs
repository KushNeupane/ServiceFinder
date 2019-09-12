using System;
using System.Collections.Generic;
using System.Text;
using TAM.Framework.Model.Models;

namespace ServiceFinder.Framework.Model.Entity.UserDashboard
{
    public class CityEntity: BaseEntity
    {
        public string Name { get; set; }
        public string Province { get; set; }
        public bool Status { get; set; } = true;
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
    }
}
