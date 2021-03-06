USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpGetServicesByCategoryIdSel]    Script Date: 7/2/2019 11:52:55 AM ******/
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
	@CategoryId INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	IF(@CategoryId IS NOT NULL)
	BEGIN
		SELECT si.Name, si.OriginalProfileImageName, si.Id, anu.DisplayName ,ISNULL( AVG(CONVERT(FLOAT, sr.OverAllReview)), 0) AverageRating
		FROM dbo.serviceItems AS si INNER JOIN dbo.AspNetUsers AS anu ON anu.Id = si.UserId left JOIN dbo.serviceReview AS sr ON sr.ServiceItemId = si.Id
		WHERE si.CategoryId = @CategoryId 
		GROUP BY si.Name,
                 si.OriginalProfileImageName,
                 si.Id,
                 anu.DisplayName
		
	END
    -- Insert statements for procedure here
END
