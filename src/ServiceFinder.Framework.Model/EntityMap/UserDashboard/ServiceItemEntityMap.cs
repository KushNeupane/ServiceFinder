using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ServiceFinder.Framework.Model.Configurations;
using ServiceFinder.Framework.Model.Models.UserDashboard;

namespace ServiceFinder.Framework.Model.EntityMap.UserDashboard
{
  public class ServiceItemEntityMap : TableBaseMap<ServiceItemEntity>
  {
    public override void Map(EntityTypeBuilder<ServiceItemEntity> builder)
    {
      this.SchemaName = DatabaseSchemaNameListing.Default;
      this.TableName = DatabaseTableNameListing.ServiceItem;

      base.Map(builder);
    }
  }
}
