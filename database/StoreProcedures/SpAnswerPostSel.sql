USE [NewFinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpAnswerPostSel]    Script Date: 7/2/2019 11:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Kush>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SpAnswerPostSel]
	-- Add the parameters for the stored procedure here
    @AnswerText VARCHAR(500),
    @QuestionId INT,
	@AnswerId INT
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	DECLARE @AnswerExists INT =
	(
		SELECT COUNT(a.Id) FROM dbo.answers AS a WHERE a.Id = @AnswerId
	);
   IF @AnswerExists = 0
   BEGIN
		INSERT INTO dbo.answers
		(
		    QuestionId,
		    AnswerText,
		    DateTime
		)
		VALUES
		(   @QuestionId,            -- QuestionId - int
		    @AnswerText,          -- AnswerText - nvarchar(max)
		    SYSDATETIME() -- DateTime - datetime2(7)
		    );
		
   END;
   IF @AnswerExists > 0
   BEGIN
		UPDATE a 
		SET a.AnswerText = @AnswerText
		FROM dbo.answers AS a
		WHERE a.id = @AnswerId
   END;
	
END
