using ServiceFinder.DI.Core;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Servicefinder.Core.Model
{
    public class ServiceItemImageModel : IServiceItemImageModel
    {
        public int Id { get; set; }
        //Including foreignKey form serviceItem
        public int ServiceItemId { get; set; }
        [ForeignKey("ServiceItemId")]
        public ServiceItemModel ServiceItem { get; set; }
        public string ImageURL { get; set; }
        public string OriginalImageName { get; set; }
        public string SystemDefinedImageName { get; set; }
        public DateTime? CreatedOn { get; set; } = DateTime.Now;
        public bool IsDeleted { get; set; } = false;
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
