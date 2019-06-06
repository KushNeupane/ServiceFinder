using TAM.Framework.Model.Models;
using System.ComponentModel.DataAnnotations;

namespace ServiceFinder.Framework.Model.Models.UserDashboard
{
  public class CategoryEntity : BaseEntity
  {
    //public int CategoryId { get; set; }
    public string Name { get; set; }
    public string ImageURL { get; set; }
    public string SystemDefinedImageName { get; set; }
    public string Description { get; set; }
    public bool Status { get; set; }
  }
}