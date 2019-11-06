USE [NewFinderDB];
GO
/****** Object:  StoredProcedure [dbo].[SpGetAnswersByServiceItemIdSel]    Script Date: 7/17/2019 1:28:06 PM ******/
SET ANSI_NULLS ON;
GO
SET QUOTED_IDENTIFIER ON;
GO
-- =============================================
-- Author:        <Kush Neupane>
-- Create date: <26 June>
-- Description:    <Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[SpGetAnswersByServiceItemIdSel] @ObjectId INT
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;
    IF NOT EXISTS
    (
        SELECT *
        FROM dbo.questions AS q
        WHERE q.ServiceItemId = @ObjectId
    )
    BEGIN
        SELECT CAST(0 AS INT) AS QuestionId,
               CAST(0 AS INT) AS ServiceItemId,
               CAST(NULL AS VARCHAR(250)) QuestionText,
               CAST(NULL AS VARCHAR(250)) UserId,
               CAST(GETDATE() AS DATETIME) CreationDate,
               CAST(NULL AS VARCHAR(250)) AnswerText,
               CAST(0 AS INT) AS answerId,
               CAST(NULL AS VARCHAR(250)) AS UserName,
               (
                   SELECT si.UserId FROM dbo.objects AS si WHERE si.Id = @ObjectId
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
               a.AnswerText,
               a.Id AS answerId,
               GETDATE() AS CreationDate,
               anu.DisplayName AS UserName,
               si.UserId AS ProviderId,
               CONVERT(BIT, 0) AS ShowOptions,
               CONVERT(BIT, 0) AS EditOptions,
               CONVERT(BIT, 0) AS FirstQuestion
        FROM dbo.questions AS q
            LEFT JOIN dbo.answers AS a
                ON q.Id = a.QuestionId
            INNER JOIN dbo.AspNetUsers AS anu
                ON anu.Id = q.UserId
            INNER JOIN dbo.objects AS si
                ON si.Id = q.ServiceItemId
        WHERE q.ServiceItemId = @ObjectId;
    END;
END;