using System;

namespace ServiceFinder.DI.ViewModel.App
{
    public interface ICityViewModel
    {
        int Id { get; set; }
        string Name { get; set; }
        bool IsActive { get; set; }
        DateTime? CreatedOn { get; set; }
    }
}
