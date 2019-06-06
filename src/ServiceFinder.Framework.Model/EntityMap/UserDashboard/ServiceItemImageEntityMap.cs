using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ServiceFinder.Framework.Model.Configurations;
using ServiceFinder.Framework.Model.Models.UserDashboard;

namespace ServiceFinder.Framework.Model.EntityMap.UserDashboard
{
  public class ServiceItemImageEntityMap : TableBaseMap<ServiceItemImageEntity>
  {
    public override void Map(EntityTypeBuilder<ServiceItemImageEntity> builder)
    {
      this.SchemaName = DatabaseSchemaNameListing.Default;
      this.TableName = DatabaseTableNameListing.ServiceItemImage;

      base.Map(builder);
    }
  }
}
