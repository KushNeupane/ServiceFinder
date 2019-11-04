using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.DI.Models.App
{
    public interface IObjectVisitModel
    {
        int Id { get; set; }
        string UserId { get; set; }
        int ObjectId { get; set; }
        int ViewCount { get; set; }
    }
}
