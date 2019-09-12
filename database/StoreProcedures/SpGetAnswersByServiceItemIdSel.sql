USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpGetAnswersByServiceItemIdSel]    Script Date: 7/15/2019 11:18:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:        <Kush Neupane>
-- Create date: <26 June>
-- Description:    <Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SpGetAnswersByServiceItemIdSel] @ServiceItemId INT
AS
BEGIN
 -- SET NOCOUNT ON added to prevent extra result sets from
 -- interfering with SELECT statements.
 SET NOCOUNT ON;
 IF NOT EXISTS
 (
     SELECT *
     FROM dbo.question AS q
     WHERE q.ServiceItemId = @ServiceItemId
 )
 BEGIN
     SELECT CAST(0 AS INT) AS QuestionId,
            CAST(0 AS INT) AS ServiceItemId,
            CAST(NULL AS VARCHAR(250)) QuestionText,
            CAST(NULL AS VARCHAR(250)) UserId,
            CAST(GETDATE() AS DATETIME) CreationDate,
            CAST(NULL AS VARCHAR(250)) AnswerText,
            CAST(NULL AS VARCHAR(250)) AS UserName,
            (
                SELECT si.UserId FROM dbo.serviceItems AS si WHERE Id = @ServiceItemId
            ) AS ProviderId,
            CONVERT(BIT, 0) AS ShowOptions,
            CONVERT(BIT, 0) AS EditOptions,
             CONVERT(BIT, 1) AS FirstQuestion;
 END;
 ELSE
 BEGIN
     SELECT q.Id AS QuestionId,
            q.ServiceItemId,
            q.QuestionText,
            q.UserId,
            q.CreationDate,
            a.AnswerText,
            anu.DisplayName AS UserName,
            si.UserId AS ProviderId,
            CONVERT(BIT, 0) AS ShowOptions,
            CONVERT(BIT, 0) AS EditOptions,
             CONVERT(BIT, 0) AS FirstQuestion
     FROM dbo.question AS q
         LEFT JOIN dbo.answer AS a
             ON q.Id = a.QuestionId
         INNER JOIN dbo.AspNetUsers AS anu
             ON anu.Id = q.UserId
         INNER JOIN dbo.serviceItems AS si
             ON si.Id = q.ServiceItemId
     WHERE q.ServiceItemId = @ServiceItemId;
 END;
END;