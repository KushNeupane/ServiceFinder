USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpGetQuestionsByIdSel]    Script Date: 7/2/2019 11:52:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:        <Kush Neupane>
-- Create date: <June 25>
-- Description:    <Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SpGetQuestionsByIdSel]
@ServiceItemId INT

AS
BEGIN
   -- SET NOCOUNT ON added to prevent extra result sets from
   -- interfering with SELECT statements.
   SET NOCOUNT ON;
   SELECT q.Id AS QuestionId,
          q.QuestionText,
          q.UserId,
           q.ServiceItemId,
           anu.DisplayName AS UserName
          
   FROM dbo.question AS q
       INNER JOIN dbo.AspNetUsers AS anu
           ON anu.Id = q.UserId
    WHERE q.ServiceItemId = @ServiceItemId
    GROUP BY q.Id, q.QuestionText, q.UserId, anu.DisplayName, q.ServiceItemId
END;