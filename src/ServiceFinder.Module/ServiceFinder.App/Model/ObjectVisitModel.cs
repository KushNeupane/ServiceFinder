using ServiceFinder.DI.Models.App;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ServiceFinder.App.Model
{
    public class ObjectVisitModel: IObjectVisitModel
    {
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; }
        public int ObjectId { get; set; }
        public int ViewCount { get; set; }
    }
}
