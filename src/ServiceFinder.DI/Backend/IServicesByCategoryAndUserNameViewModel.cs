namespace ServiceFinder.DI.Backend
{
    public interface IServicesByCategoryAndUserNameViewModel
    {
        int Id { get; set; }
        string Name { get; set; }
        string OriginalProfileImageName { get; set; }
        string DisplayName { get; set; }
        double AverageRating { get; set; }
    }
}
