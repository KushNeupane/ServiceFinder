using ServiceFinder.DependencyInjection.Usability;
using System.Threading.Tasks;

namespace Service.Framework.Core.Helper
{
  public interface IEmailSender
  {
    Task SendEmailAsync(MailSettingModel mailSetting, string email, string subject, string message);
  }
}
