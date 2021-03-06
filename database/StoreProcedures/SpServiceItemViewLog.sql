USE [FinderDB]
GO
/****** Object:  StoredProcedure [dbo].[SpServiceItemViewLog]    Script Date: 7/2/2019 11:53:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:        Kush
-- Create date: <Create Date,,>
-- Description:    Increment the count of serviceitem
-- =============================================
CREATE PROCEDURE [dbo].[SpServiceItemViewLog]
(
   @UserId VARCHAR(250),
   @ServiceItemId INT
)
AS
BEGIN

   SET NOCOUNT ON;
   DECLARE @ServiceItemLogCount INT;

   IF (@UserId IS NULL)
   BEGIN

       SELECT @ServiceItemLogCount = (ISNULL(sivl.ViewCount, 0))
       FROM dbo.serviceItemViewLog AS sivl
       WHERE sivl.UserId IS NULL
             AND sivl.ServiceItemId = @ServiceItemId;

       IF @ServiceItemLogCount > 0
       BEGIN
           UPDATE sivl
           SET sivl.ViewCount = @ServiceItemLogCount + 1
           FROM dbo.serviceItemViewLog AS sivl
           WHERE UserId IS NULL
                 AND ServiceItemId = @ServiceItemId;
       END;
       ELSE
       BEGIN
           INSERT INTO dbo.serviceItemViewLog
           (
               UserCreatedId,
               CreatedBy,
               CreationDate,
               UserChangedId,
               ChangedBy,
               ChangeDate,
               UserId,
               ServiceItemId,
               ViewCount
           )
           VALUES
           (   N'',            -- UserCreatedId - nvarchar(max)
               N'',            -- CreatedBy - nvarchar(max)
               SYSDATETIME(),  -- CreationDate - datetime2(7)
               N'',            -- UserChangedId - nvarchar(max)
               N'',            -- ChangedBy - nvarchar(max)
               SYSDATETIME(),  -- ChangeDate - datetime2(7)
               NULL,           -- UserId - nvarchar(450)
               @ServiceItemId, -- ServiceItemId - int
               1               -- ViewCount - int
               );
       END;
   END;

   IF (@UserId IS NOT NULL )
   BEGIN

       SELECT @ServiceItemLogCount = (ISNULL(sivl.ViewCount, 0))
       FROM dbo.serviceItemViewLog AS sivl
       WHERE sivl.UserId = @UserId
             AND sivl.ServiceItemId = @ServiceItemId;
               IF (@ServiceItemLogCount > 0)
       BEGIN
        
           UPDATE sivl
           SET sivl.ViewCount = @ServiceItemLogCount + 1
           FROM dbo.serviceItemViewLog AS sivl
           WHERE sivl.UserId = @UserId
                 AND sivl.ServiceItemId = @ServiceItemId;
       END;
        ELSE

       BEGIN
           INSERT INTO dbo.serviceItemViewLog
           (
               UserCreatedId,
               CreatedBy,
               CreationDate,
               UserChangedId,
               ChangedBy,
               ChangeDate,
               UserId,
               ServiceItemId,
               ViewCount
           )
           VALUES
           (   N'',            -- UserCreatedId - nvarchar(max)
               N'',            -- CreatedBy - nvarchar(max)
               SYSDATETIME(),  -- CreationDate - datetime2(7)
               N'',            -- UserChangedId - nvarchar(max)
               N'',            -- ChangedBy - nvarchar(max)
               SYSDATETIME(),  -- ChangeDate - datetime2(7)
               @UserId,        -- UserId - nvarchar(450)
               @ServiceItemId, -- ServiceItemId - int
               1               -- ViewCount - int
               );
       END;

   END;
--    UPDATE FROM dbo.serviceItemViewLog

END;