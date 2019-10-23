using ServiceFinder.DI.Model.App;
using System;
using System.ComponentModel.DataAnnotations;

namespace ServiceFinder.Main.Model
{
    public class CategoryModel : ICategoryModel
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ImageUrl { get; set; }
    }
}
