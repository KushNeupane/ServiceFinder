using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TAM.Framework.Model.Models;

namespace ServiceFinder.Framework.Model.Models.UserDashboard
{
  public class ServiceItemImageEntity : BaseEntity
  {
    //public int? ServiceItemImageId { get; set; }

    //Including foreignKey form serviceItem
    public int ServiceItemId { get; set; }
    [ForeignKey("ServiceItemId")]
    public ServiceItemEntity ServiceItem { get; set; }

    public string ImageURL { get; set; }
    public string OriginalImageName { get; set; }
    public string SystemDefinedImageName { get; set; }

    public DateTime? CreatedOn { get; set; } = DateTime.Now;
    public bool IsDeleted { get; set; } = false;
  }
}