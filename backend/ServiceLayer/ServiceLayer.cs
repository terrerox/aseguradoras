using System;
using System.IO;
using System.Text;
using DataLayer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ServiceLayer.AseguradorasService;
using ServiceLayer.Helpers;

namespace ServiceLayer
{
    public static class IServiceCollectionExtension
    {
        public static IServiceCollection ServiceLayer(this IServiceCollection services, IConfiguration Configuration)
        {
            services.DataLayer();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddScoped<IAseguradoraService, AseguradoraService>();
            return services;
        }
    }
}