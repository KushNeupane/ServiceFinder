using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ServiceFinder.Framework.Model.Configurations;
using ServiceFinder.Framework.Model.Models.UserDashboard;

namespace ServiceFinder.Framework.Model.EntityMap.UserDashboard
{
  public class CategoryEntityMap : TableBaseMap<CategoryEntity>
  {
    public override void Map(EntityTypeBuilder<CategoryEntity> builder)
    {
      this.SchemaName = DatabaseSchemaNameListing.Default;
      this.TableName = DatabaseTableNameListing.Category;

      base.Map(builder);
    }
  }
}
