USE [FinderDB]
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

   SELECT TOP 10 sivl.ServiceItemId,
          si.OriginalProfileImageName,
          si.Name,
          SUM(sivl.ViewCount) TotalView,
          anu.DisplayName,
           ISNULL( AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating,
           c.Id AS CategoryId,
           c.Name AS CategoryName
   FROM dbo.serviceItemViewLog AS sivl
       INNER JOIN dbo.serviceItems AS si
           ON si.Id = sivl.ServiceItemId
       INNER JOIN dbo.AspNetUsers AS anu
           ON anu.Id = si.UserId
        LEFT JOIN dbo.serviceReview AS sr
            ON si.Id = sr.ServiceItemId
        INNER JOIN dbo.categories AS c
            ON si.CategoryId = c.Id
   GROUP BY sivl.ServiceItemId,
            si.OriginalProfileImageName,
            si.Name,
            anu.DisplayName,
            c.Id,
            c.Name
   ORDER BY TotalView DESC;

END;