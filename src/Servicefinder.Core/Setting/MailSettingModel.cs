using ServiceFinder.DI.Core;

namespace Servicefinder.Core.Setting
{
    public class MailSettingModel : IMailSettingModel
    {
        public string SmtpHostName { get; set; }
        public string SmtpUserName { get; set; }
        public string SmtpPassword { get; set; }
        public int SmtpPort { get; set; }
    }
}

