using Microsoft.EntityFrameworkCore;
using System;

namespace Service.Framework.Core
{
  public class ChatAppContext : DbContext
  {
    public ChatAppContext(DbContextOptions<ChatAppContext> options)
       : base(options)
    {
    }

    //public DbSet<Category> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
    }
  }
}
