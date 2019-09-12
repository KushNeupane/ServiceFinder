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
SET ANSI_NULLS ON;
GO
SET QUOTED_IDENTIFIER ON;
GO
-- =============================================
-- Author:		<Kush Neupane>
-- Create date: <July 9>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SpDeleteCategory]
    -- Add the parameters for the stored procedure here
    @categoryId INT
AS
BEGIN

    SET NOCOUNT ON;
    DELETE dbo.categories
    WHERE Id = @categoryId

END;
GO
