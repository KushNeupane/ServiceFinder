USE [NewFinderDB];
GO
/****** Object:  StoredProcedure [dbo].[PostQuestionSp]    Script Date: 7/2/2019 11:47:22 AM ******/
SET ANSI_NULLS ON;
GO
SET QUOTED_IDENTIFIER ON;
GO
-- =============================================
-- Author:        <Kush Neupane>
-- Create date: <June 25,>
-- Description:    <Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PostQuestionSp]
    -- Add the parameters for the stored procedure here
    @UserId VARCHAR(250),
    @ObjectId INT,
    @QuestionText VARCHAR(500),
    @QuestionId INT
--@ReturnMessage VARCHAR(200) OUTPUT
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;

    --IF (@UserId IS NULL)
    --    SET @ReturnMessage = 'Not Logged In';
    --RETURN;

    DECLARE @QuestionExists INT =
            (
                SELECT COUNT(q.Id) FROM dbo.questions AS q WHERE q.Id = @QuestionId
            );
    IF @QuestionExists = 0
    BEGIN
        INSERT INTO dbo.questions
        (
            UserId,
            ServiceItemId,
            QuestionText,
            DateTime
        )
        VALUES
        (   @UserId,       -- UserId - nvarchar(max)
            @ObjectId,     -- ServiceItemId - int
            @QuestionText, -- QuestionText - nvarchar(max)
            SYSDATETIME()  -- DateTime - datetime2(7)
            );
    END;
    IF @QuestionExists > 0
    BEGIN
        UPDATE q
        SET q.QuestionText = @QuestionText
        FROM dbo.questions AS q
        WHERE q.Id = @QuestionId
              AND q.UserId = @UserId;
    END;
END;