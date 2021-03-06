USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[ServiceItemSel]    Script Date: 7/2/2019 11:47:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:        <Kush Raj>
-- Create date: <Create Date,,>
-- Description:    <Load More Logic>
-- =============================================
CREATE PROCEDURE [dbo].[ServiceItemSel]
    -- Add the parameters for the stored procedure here
    @skip INT
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;
    SELECT * FROM dbo.serviceItems AS si
    ORDER BY si.Id OFFSET @skip ROWS FETCH NEXT 10 ROW ONLY
    
END