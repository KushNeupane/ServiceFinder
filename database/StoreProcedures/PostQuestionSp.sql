USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[PostQuestionSp]    Script Date: 7/2/2019 11:47:22 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:        <Kush Neupane>
-- Create date: <June 25,>
-- Description:    <Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PostQuestionSp]
   -- Add the parameters for the stored procedure here
   @UserId VARCHAR(250),
   @ServiceItemId INT,
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
               SELECT COUNT(q.Id) FROM dbo.question AS q WHERE q.Id = @QuestionId
           );
   IF @QuestionExists = 0
   BEGIN
       INSERT INTO dbo.question
       (
           UserCreatedId,
           CreatedBy,
           CreationDate,
           UserChangedId,
           ChangedBy,
           ChangeDate,
           UserId,
           ServiceItemId,
           QuestionText,
           DateTime
       )
       VALUES
       (   N'',            -- UserCreatedId - nvarchar(max)
           N'',            -- CreatedBy - nvarchar(max)
           SYSDATETIME(),  -- CreationDate - datetime2(7)
           N'',            -- UserChangedId - nvarchar(max)
           N'',            -- ChangedBy - nvarchar(max)
           SYSDATETIME(),  -- ChangeDate - datetime2(7)
           @UserId,        -- UserId - nvarchar(450)
           @ServiceItemId, -- ServiceItemId - int
           @QuestionText,  -- QuestionText - nvarchar(max)
           SYSDATETIME()   -- DateTime - datetime2(7)
           );
   END;
   IF @QuestionExists > 0
   BEGIN
       UPDATE q
       SET q.QuestionText = @QuestionText
       FROM dbo.question AS q
       WHERE q.Id = @QuestionId
             AND q.UserId = @UserId;
   END;
END;