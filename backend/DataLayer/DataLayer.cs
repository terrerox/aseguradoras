using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace DataLayer
{
    public static class IServiceCollectionExtension
    {
        public static IServiceCollection DataLayer(this IServiceCollection services)
        {
            services.AddDbContext<DataContext>(option =>
            {
                option.UseSqlite("Data Source=AseguradoraDB.db;");
            });
            return services;
        }
    }
}