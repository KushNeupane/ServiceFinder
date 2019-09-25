namespace ServiceFinder.DI.Frontend
{
    public interface IAnswerViewModel
    {
        int questionId { get; set; }
        int answerId { get; set; }
        string AnswerText { get; set; }
    }
}

