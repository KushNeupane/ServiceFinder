using System.Threading.Tasks;

namespace ServiceFinder.DI.Users
{
    public interface IEmailSender
    {
        Task SendEmailAsync(object mailSetting, string email, string subject, string message);
    }
}
