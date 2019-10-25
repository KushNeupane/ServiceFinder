USE[NewFinderDB];
-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SpAdvanceSearchSel]
(
    @CategoryId INT,
    @CityId INT,
    @searchTerm VARCHAR(150),
	@Skip INT
)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;


    IF DATALENGTH(@searchTerm) = 0
    BEGIN
        IF (@CategoryId <>0 AND @CityId<>0)
        BEGIN
            SELECT si.CategoryId,
                   si.Name,
                   si.OriginalProfileImageName,
                   si.Id AS ServiceItemId,
                   si.Description,
                   anu.DisplayName,
                   ISNULL(AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating
            FROM dbo.objects AS si
                INNER JOIN dbo.AspNetUsers AS anu
                    ON anu.Id = si.UserId
                LEFT JOIN dbo.reviews AS sr
                    ON sr.ObjectId = si.Id
				
            WHERE si.CityId = @CityId
                  AND si.CategoryId = @CategoryId
			
            GROUP BY si.CategoryId,
                     si.Name,
                     si.OriginalProfileImageName,
                     si.Id,
                     si.Description,
                     anu.DisplayName
			ORDER BY si.Id OFFSET @Skip ROWS FETCH NEXT 2 ROWS ONLY;
        END;
        ELSE
        BEGIN
            SELECT si.CategoryId,
                   si.Name,
                   si.OriginalProfileImageName,
                   si.Id AS ServiceItemId,
                   si.Description,
                   anu.DisplayName,
                   ISNULL(AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating
            FROM dbo.objects AS si
                INNER JOIN dbo.AspNetUsers AS anu
                    ON anu.Id = si.UserId
                LEFT JOIN dbo.reviews AS sr
                    ON sr.ObjectId = si.Id
            WHERE si.CityId = @CityId
                  OR si.CategoryId = @CategoryId
            GROUP BY si.CategoryId,
                     si.Name,
                     si.OriginalProfileImageName,
                     si.Id,
                     si.Description,
                     anu.DisplayName
			ORDER BY si.Id OFFSET @Skip ROWS FETCH NEXT 2 ROWS ONLY;
        END;
    END;
    ELSE
    BEGIN
        IF (@CategoryId <>0 AND @CityId<>0)
        BEGIN
            SELECT si.CategoryId,
                   si.Name,
                   si.OriginalProfileImageName,
                   si.Id AS ServiceItemId,
                   si.Description,
                   anu.DisplayName,
                   ISNULL(AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating
            FROM dbo.objects AS si
                INNER JOIN dbo.AspNetUsers AS anu
                    ON anu.Id = si.UserId
                LEFT JOIN dbo.reviews AS sr
                    ON sr.ObjectId = si.Id
            WHERE si.CategoryId = @CategoryId
                  AND si.CityId = @CityId
                  AND si.Name LIKE '%'+@searchTerm+'%'
            GROUP BY si.CategoryId,
                     si.Name,
                     si.OriginalProfileImageName,
                     si.Id,
                     si.Description,
                     anu.DisplayName
			ORDER BY si.Id OFFSET @Skip ROWS FETCH NEXT 2 ROWS ONLY;
        END;
        ELSE IF (@CategoryId <>0 OR @CityId<>0)
        BEGIN
            SELECT si.CategoryId,
                   si.Name,
                   si.OriginalProfileImageName,
                   si.Id AS ServiceItemId,
                   si.Description,
                   anu.DisplayName,
                   ISNULL(AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating
            FROM dbo.objects AS si
                INNER JOIN dbo.AspNetUsers AS anu
                    ON anu.Id = si.UserId
                LEFT JOIN dbo.reviews AS sr
                    ON sr.ObjectId = si.Id
            WHERE (
                      si.CategoryId = @CategoryId
                      OR si.CityId = @CityId
                  )
                  AND si.Name LIKE '%' + @searchTerm + '%'
            GROUP BY si.CategoryId,
                     si.Name,
                     si.OriginalProfileImageName,
                     si.Id,
                     si.Description,
                     anu.DisplayName
			ORDER BY si.Id OFFSET @Skip ROWS FETCH NEXT 2 ROWS ONLY;
        END;
		ELSE
		BEGIN
			SELECT si.CategoryId,
                   si.Name,
                   si.OriginalProfileImageName,
                   si.Id AS ServiceItemId,
                   si.Description,
                   anu.DisplayName,
                   ISNULL(AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating
            FROM dbo.objects AS si
                INNER JOIN dbo.AspNetUsers AS anu
                    ON anu.Id = si.UserId
                LEFT JOIN dbo.reviews AS sr
                    ON sr.ObjectId = si.Id
            WHERE si.Name LIKE '%' + @searchTerm + '%'
            GROUP BY si.CategoryId,
                     si.Name,
                     si.OriginalProfileImageName,
                     si.Id,
                     si.Description,
                     anu.DisplayName
			ORDER BY si.Id OFFSET @Skip ROWS FETCH NEXT 2 ROWS ONLY;
		END;
    END;

END;
