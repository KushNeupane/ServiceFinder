using System;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading.Tasks;


namespace Service.Framework.Core.Helper
{
    public class AutoMessageSender : IEmailSender
  {
        

        public Task SendEmailAsync(string email, string subject, string message)
    {
      string text = message;
      string html = message;
      MailMessage msg = new MailMessage();
      msg.From = new MailAddress("letmeteachyoucode@gmail.com");
      msg.To.Add(new MailAddress(email));
      msg.Subject = subject;
      msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
      msg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));

      SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", Convert.ToInt32(587));
      smtpClient.EnableSsl = true;
      System.Net.NetworkCredential credentials = new System.Net.NetworkCredential("letmeteachyoucode@gmail.com", "135dip79");
      smtpClient.Credentials = credentials;
      msg.IsBodyHtml = true;
      smtpClient.Send(msg);

      return Task.FromResult(0);
    }

     
  }
}
