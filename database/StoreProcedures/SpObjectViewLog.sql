USE [NewFinderDB]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[SpObjectViewLog]
(
	@UserId VARCHAR(250),
    @ObjectId INT
)
AS	
BEGIN
	SET NOCOUNT ON;
	DECLARE @ObjectLogCount INT;
	
	IF (@UserId IS NULL)
	BEGIN
			SELECT @ObjectLogCount = (ISNULL(ov.ViewCount, 0))
			FROM dbo.objectVisit AS ov
			WHERE ov.UserId IS NULL AND ov.ObjectId = @ObjectId;
	
		IF @ObjectLogCount > 0
		BEGIN
			UPDATE ov
			SET ov.ViewCount = @ObjectLogCount +1
			FROM dbo.objectVisit AS ov
			WHERE UserId IS NULL AND ObjectId = @ObjectId;
		END;
		ELSE
		BEGIN
			INSERT INTO dbo.objectVisit
			(
			    UserId,
			    ObjectId,
			    ViewCount
			)
			VALUES
			(   null, -- UserId - nvarchar(450)
			    @ObjectId,   -- ObjectId - int
			    1    -- ViewCount - int
			    )
		END;
	END;
	IF (@UserId IS NOT NULL )
	BEGIN
		SELECT @ObjectLogCount = (ISNULL(ov.ViewCount, 0))
		FROM dbo.objectVisit AS ov
		WHERE ov.UserId = @UserId AND ov.ObjectId = @ObjectId;

		IF (@ObjectLogCount >0)
		BEGIN
			UPDATE ov
			SET ov.ViewCount = @ObjectLogCount +1
			FROM dbo.objectVisit AS ov
			WHERE ov.UserId = @UserId AND ov.ObjectId = @ObjectId;
		END;
		ELSE
		BEGIN
			INSERT INTO dbo.objectVisit
			(
			    UserId,
			    ObjectId,
			    ViewCount
			)
			VALUES
			(   @UserId, -- UserId - nvarchar(450)
			    @ObjectId,   -- ObjectId - int
			    1    -- ViewCount - int
			    )
		END;

	END;
	--UPDATE FROM dbo.objectVisit

END;
