using ServiceFinder.DI.Core;
using System;
using System.ComponentModel.DataAnnotations;

namespace Servicefinder.Core.Model
{
    public abstract class BaseModel : IBaseModel
    {
        [Key]
        public int Id { get; set; }
        // Row Tracking Properties
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
