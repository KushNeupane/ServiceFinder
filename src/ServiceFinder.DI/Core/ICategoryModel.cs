namespace ServiceFinder.DI.Core
{
    public interface ICategoryModel : IBaseModel
    {
        //public int CategoryId { get; set; }
        string Name { get; set; }
        string ImageURL { get; set; }
        string SystemDefinedImageName { get; set; }
        string Description { get; set; }
        bool Status { get; set; }
    }
}