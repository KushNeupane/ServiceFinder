using ServiceFinder.DependencyInjection.Usability;
using System;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading.Tasks;


namespace Service.Framework.Core.Helper
{
  public class AutoMessageSender : IEmailSender
  {
    public Task SendEmailAsync(MailSettingModel setting, string email, string subject, string message)
    {
      string text = message;
      string html = message;
      MailMessage msg = new MailMessage();
      msg.From = new MailAddress(setting.SmtpUserName);
      msg.To.Add(new MailAddress(email));
      msg.Subject = subject;
      msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
      msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));

      SmtpClient smtpClient = new SmtpClient(setting.SmtpHostName, Convert.ToInt32(setting.SmtpPort));
      smtpClient.EnableSsl = true;
      System.Net.NetworkCredential credentials = new System.Net.NetworkCredential(setting.SmtpUserName, setting.SmtpPassword);
      smtpClient.Credentials = credentials;
      msg.IsBodyHtml = true;
      smtpClient.Send(msg);

      return Task.FromResult(0);
    }
  }
}
