using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ServiceFinder.Framework.Model.Configuration
{
  public abstract class EntityMappingConfiguration<T> : IEntityTypeConfiguration<T> where T : class
  {
    public abstract void Map(EntityTypeBuilder<T> builder);

    public void Configure(EntityTypeBuilder<T> entityTypeBuilder)
    {
      this.Map(entityTypeBuilder);
    }
  }
}
