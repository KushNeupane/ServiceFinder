namespace ServiceFinder.Users.ViewModel
{
    public class VerifyCodeViewModel
    {
        public string Provider { get; set; }
        public string Code { get; set; }
        public bool RememberMe { get; set; }
        public string Email { get; set; }
        public bool RememberBrowser { get; set; }
    }
}
