using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.Framework.Model.ViewModels
{
    class UserTypeViewModel
    {
        public int UserTypeId { get; set; }
        public string Name { get; set; }
        public bool Status { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
        public bool IsDeleted { get; set; }
    }
}
