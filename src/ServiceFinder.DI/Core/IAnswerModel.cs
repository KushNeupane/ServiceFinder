using System;

namespace ServiceFinder.DI.Core
{
    public interface IAnswerModel : IBaseModel
    {
        int QuestionId { get; set; }
        string AnswerText { get; set; }
        DateTime DateTime { get; set; }

    }
}
