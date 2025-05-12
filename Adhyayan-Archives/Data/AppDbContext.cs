using Microsoft.EntityFrameworkCore;
using Adhyayan_Archives.Models;

namespace Adhyayan_Archives.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}