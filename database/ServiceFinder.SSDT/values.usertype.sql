/*
	ACL_GROUPS table
*/
SET IDENTITY_INSERT Acc.userTypes ON;
MERGE INTO Acc.userTypes as TARGET
USING (VALUES
	(1, 'User','2019-01-25', False),
	(2, 'Super Admin','2019-01-25', True)
)
AS SOURCE (Id	,Name ,CreatedOn,	IsDeleted)
ON Target.Id = Source.Id
WHEN MATCHED THEN
	UPDATE SET
		Name=Source.Name,	
		CreatedOn=Source.CreatedOn,
		IsDeleted= Source.IsDeleted
WHEN NOT MATCHED BY TARGET THEN
	INSERT(Id	,Name ,CreatedOn,	IsDeleted)
	VALUES(Id	,Name ,CreatedOn,	IsDeleted)
WHEN NOT MATCHED BY SOURCE THEN
	DELETE;
SET IDENTITY_INSERT Acc.userTypes OFF;