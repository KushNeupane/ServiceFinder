USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpCatergoryAndServiceItemSel]    Script Date: 7/2/2019 11:49:14 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <Author,,Name>
-- Create date: <Create Date,,>
-- Description: <Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SpCatergoryAndServiceItemSel]
@Skip INT
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;
    -- Insert statements for procedure here
    select c.Id ,c.Name, count(s.Name) as TotalService from categories as c
inner join serviceItems as s on c.Id=s.CategoryId group by c.Id,c.Name
ORDER BY c.Id OFFSET @Skip ROWS FETCH NEXT 2 ROWS ONLY
END