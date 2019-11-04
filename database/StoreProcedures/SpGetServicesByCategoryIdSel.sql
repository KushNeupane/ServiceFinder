USE [NewFinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpGetServicesByCategoryIdSel]    Script Date: 10/25/2019 2:19:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Kush>
-- Create date: <June 13>
-- Description:	<Getting Services With CategoryId along with table joins>
-- =============================================
CREATE PROCEDURE [dbo].[SpGetServicesByCategoryIdSel]
    -- Add the parameters for the stored procedure here
    @CategoryId INT,
	@loadMoreCount INT
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;
    IF (@CategoryId IS NOT NULL)
	DECLARE @TotalCount INT= (SELECT COUNT(si.Id) FROM dbo.objects AS si WHERE si.CategoryId =@CategoryId);
    BEGIN
        SELECT si.Name,
               si.OriginalProfileImageName,
               si.Id,
               anu.DisplayName,
			   c.Name AS CategoryName,
			   @TotalCount AS TotalCount,
               ISNULL(AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating
        FROM dbo.objects AS si
            INNER JOIN dbo.AspNetUsers AS anu
                ON anu.Id = si.UserId
            LEFT JOIN dbo.reviews AS sr
                ON sr.ObjectId = si.Id
			INNER JOIN dbo.categories AS c
				ON si.CategoryId = c.Id
        WHERE si.CategoryId = @CategoryId
        GROUP BY si.Name,
                 si.OriginalProfileImageName,
                 si.Id,
				 c.Name,
                 anu.DisplayName
		ORDER BY si.Id OFFSET @loadMoreCount  ROWS FETCH NEXT 5 ROWS ONLY		

    END;
END;
