using ServiceFinder.DI.Model.App;
using System;

namespace ServiceFinder.Main.Model
{
    public class ObjectModel : IObjectModel
    {
        public int Id { get; set; }
        public int CityId { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
