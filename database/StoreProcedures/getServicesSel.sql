USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[getServicesSel]    Script Date: 7/2/2019 11:47:04 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Kush Neupane>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[getServicesSel]
    -- Add the parameters for the stored procedure here
    @Skip INT
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;
    SELECT si.Id,
           si.Name,
           si.OriginalProfileImageName,
           sr.OverAllReview,
           anu.DisplayName
    FROM dbo.serviceItems AS si
        INNER JOIN dbo.AspNetUsers AS anu
            ON anu.Id = si.UserId
        INNER JOIN dbo.serviceReview AS sr
            ON sr.ServiceItemId = si.Id
		GROUP BY si.Id, si.Name,si.OriginalProfileImageName,sr.OverAllReview,anu.DisplayName
		ORDER BY si.Id OFFSET @Skip ROWS FETCH NEXT 10 ROWS ONLY
-- Insert statements for procedure here

END;
