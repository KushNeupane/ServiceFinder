using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceFinder.DI.Core
{
    public interface IMailSettingModel
    {
        string SmtpHostName { get; set; }
        string SmtpUserName { get; set; }
        string SmtpPassword { get; set; }
        int SmtpPort { get; set; }
    }
}