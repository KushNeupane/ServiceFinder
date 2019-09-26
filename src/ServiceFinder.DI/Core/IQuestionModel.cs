using System;

namespace ServiceFinder.DI.Core
{
    public interface IQuestionModel : IBaseModel
    {
        string UserId { get; set; }
        int ServiceItemId { get; set; }
        string QuestionText { get; set; }
        DateTime DateTime { get; set; }
    }
}

