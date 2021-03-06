USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpAddCategory]    Script Date: 7/9/2019 2:15:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Kush Neupane>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SpAddCategory] 
	-- Add the parameters for the stored procedure here
	@name VARCHAR(90),
	@id INT,
	@status BINARY
AS
BEGIN
	
	SET NOCOUNT ON;
	DECLARE @categoryExist INT =
	(
		SELECT COUNT(c.Id) FROM dbo.categories AS c WHERE c.Id = @id
	)

	IF @categoryExist = 0
	BEGIN
		INSERT dbo.categories
		(
		    UserCreatedId,
		    CreatedBy,
		    CreationDate,
		    UserChangedId,
		    ChangedBy,
		    ChangeDate,
		    Name,
		    ImageURL,
		    SystemDefinedImageName,
		    Description,
		    Status
		)
		VALUES
		(   N'',           -- UserCreatedId - nvarchar(max)
		    N'',           -- CreatedBy - nvarchar(max)
		    SYSDATETIME(), -- CreationDate - datetime2(7)
		    N'',           -- UserChangedId - nvarchar(max)
		    N'',           -- ChangedBy - nvarchar(max)
		    SYSDATETIME(), -- ChangeDate - datetime2(7)
			@name,           -- Name - nvarchar(max)
		    N'',           -- ImageURL - nvarchar(max)
		    N'',           -- SystemDefinedImageName - nvarchar(max)
		    N'',           -- Description - nvarchar(max)
		    @status           -- Status - bit
		    )
	END
	IF @categoryExist > 0
	BEGIN
		UPDATE c
		SET c.Name = @name
		FROM dbo.categories AS c
		WHERE c.Id = @id
	END

END
