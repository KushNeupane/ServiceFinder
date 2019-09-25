using System;
using ServiceFinder.DI.Backend;

namespace ServiceFinder.Backend.ViewModel
{
    public class ServiceViewModel : IServiceViewModel
    {
        public int Id { get; set; }
        public object serviceData { get; set; }
        public bool ShowReview { get; set; } = true;
        public bool LoggedIn { get; set; } = false;
        public string UserCreatedId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreationDate { get; set; }
        public string UserChangedId { get; set; }
        public string ChangedBy { get; set; }
        public DateTime? ChangeDate { get; set; }
    }
}
