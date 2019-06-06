using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TAM.Framework.Model.Models;

namespace ServiceFinder.Framework.Model.ViewModels
{
    [Table("ServiceView")]
    public class ServiceViewModel:BaseEntity
    {
        public int? ServiceItemId { get; set; }
        public string CateoryName { get; set; }

        //for service profile image
        public string ProfileImageUrl { get; set; }
        public string OriginalProfileImageName { get; set; }
        //for service cover image
        public string CoverImageUrl { get; set; }
        public string OriginalCoverImageName { get; set; }

        public string Name { get; set; }
        public bool Status { get; set; }
        public string Description { get; set; }

        public DateTime? CreatedOn { get; set; }
        public bool IsDeleted { get; set; }
    }
}
