using ServiceFinder.DI.Core;
using System;

namespace Servicefinder.Core.Model
{
    public class CityModel : ICityModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Province { get; set; }
        public bool Status { get; set; } = true;
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
