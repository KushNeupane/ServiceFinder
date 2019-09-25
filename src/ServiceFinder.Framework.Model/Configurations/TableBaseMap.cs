using Microsoft.EntityFrameworkCore;
using ServiceFinder.Framework.Model.Configuration;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ServiceFinder.Framework.Model.Configurations
{
  public abstract class TableBaseMap<TEntity> : EntityMappingConfiguration<TEntity> where TEntity : BaseEntity
  {
    // Private Variables
    private string mTableName = string.Empty;

    // Protected Properties
    protected string TableName
    {
      get => string.IsNullOrEmpty(this.mTableName) ? typeof(TEntity).Name : this.mTableName;
      set => this.mTableName = value;
    }

    protected string SchemaName { get; set; } = DatabaseSchemaNameListing.Default;

    // Entity Mapping
    public override void Map(EntityTypeBuilder<TEntity> builder)
    {
      builder.ToTable(this.TableName, this.SchemaName);

      builder.HasKey(entity => entity.Id);
      builder.Property(entity => entity.Id).HasColumnName($"{this.TableName}ID");
      builder.Property(e => e.UserChangedId).HasColumnName("UserChangedID").HasColumnType("nvarchar(450)").HasMaxLength(450);
      builder.Property(e => e.UserCreatedId).HasColumnName("UserCreatedID").HasColumnType("nvarchar(450)").HasMaxLength(450);
      builder.Property(entity => entity.CreationDate).ValueGeneratedOnAddOrUpdate().HasDefaultValueSql("GETDATE()");
      builder.Property(entity => entity.ChangeDate).ValueGeneratedOnAdd().HasDefaultValueSql("GETDATE()");
      builder.Property(entity => entity.ChangedBy).HasComputedColumnSql("''");
      builder.Property(entity => entity.CreatedBy).HasComputedColumnSql("''");
    }
  }
}
