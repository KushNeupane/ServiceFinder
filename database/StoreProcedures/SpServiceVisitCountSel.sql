USE [NewFinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpServiceVisitCountSel]    Script Date: 7/2/2019 11:53:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:        <Kush Neupane>
-- Create date: <June 13>
-- Description:    <Retrieving the serivce visit log.>
-- =============================================
CREATE PROCEDURE [dbo].[SpServiceVisitCountSel]
-- Add the parameters for the stored procedure here
AS
BEGIN
   -- SET NOCOUNT ON added to prevent extra result sets from
   -- interfering with SELECT statements.
   SET NOCOUNT ON;

   SELECT TOP 10 ov.ObjectId,
          o.OriginalProfileImageName,
          o.Name,
          SUM(ov.ViewCount) TotalView,
          anu.DisplayName,
           ISNULL( AVG(CONVERT(FLOAT, r.OverAllReview)), 0) AverageRating,
           c.Id AS CategoryId,
           c.Name AS CategoryName
   FROM dbo.objectVisit AS ov 
       INNER JOIN dbo.objects AS o 
           ON o.Id = ov.ObjectId
       INNER JOIN dbo.AspNetUsers AS anu
           ON anu.Id = o.UserId
        LEFT JOIN dbo.reviews AS r 
            ON o.Id = r.ObjectId
        INNER JOIN dbo.categories AS c
            ON o.CategoryId = c.Id
   GROUP BY ov.ObjectId,
            o.OriginalProfileImageName,
            o.Name,
            anu.DisplayName,
            c.Id,
            c.Name
   ORDER BY TotalView DESC;

END;