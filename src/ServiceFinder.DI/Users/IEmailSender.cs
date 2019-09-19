using ServiceFinder.DI.Core;
using System.Threading.Tasks;

namespace ServiceFinder.DI.Users
{
    public interface IEmailSender
    {
        Task SendEmailAsync(IMailSettingModel mailSetting, string email, string subject, string message);
    }
}
