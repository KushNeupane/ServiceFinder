using System;
using System.ComponentModel.DataAnnotations;

namespace ServiceFinder.DI.Core
{
    public interface IBaseModel
    {
        [Key]
        int Id { get; set; }

        // Row Tracking Properties
        string UserCreatedId { get; set; }
        string CreatedBy { get; set; }
        DateTime? CreationDate { get; set; }
        string UserChangedId { get; set; }
        string ChangedBy { get; set; }
        DateTime? ChangeDate { get; set; }
    }
}
