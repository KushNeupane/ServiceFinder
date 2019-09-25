using ServiceFinder.DI.Core;
using System;

namespace Servicefinder.Core.Model
{
    public class CategoryModel : ICategoryModel
    {
        public int Id { get; set; }
        //public int CategoryId { get; set; }
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public string SystemDefinedImageName { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
