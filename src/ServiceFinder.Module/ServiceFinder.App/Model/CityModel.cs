using ServiceFinder.DI.Model.App;
using System;

namespace ServiceFinder.Main.Model
{
    public class CityModel : ICityModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
