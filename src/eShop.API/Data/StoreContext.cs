using eShop.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace eShop.API.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Product> Products { get; set; }
    }
}
