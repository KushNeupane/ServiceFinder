CREATE TABLE [Acc].[userTypes] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [Name]      NVARCHAR (MAX) NULL,
    [CreatedOn] DATETIME2 (7)  NULL,
    [IsDeleted] BIT            NOT NULL,
    CONSTRAINT [PK_userTypes] PRIMARY KEY CLUSTERED ([Id] ASC)
);

