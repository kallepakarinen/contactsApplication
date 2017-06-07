using WebApi.Services;
using WebApi.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
//using WebApi.Repository;

namespace WebApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /*
            var config = Configuration.GetSection("AppSettings").Get<AppSettings>();
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            */

            services.AddSingleton<IContactService, ContactService>();
            services.AddScoped<IContactRepository, ContactRepository>();

            //COnfigure Cors
            services.AddCors(o => o.AddPolicy("DevPolicy", builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            }));

            // Add framework services.
            

            //Configure database
            /*
            services.AddDbContext<DatabaseContext>(options =>
            {
                if (config.UseInMemoryDatabase)
                    options.UseInMemoryDatabase();
                else
                    options.UseSqlServer(Configuration.GetConnectionString("DatabaseConnection"));
            });*/
            
              
    
            services.AddDbContext<DatabaseContext>(options =>
             options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseCors("DevPolicy");
            app.UseMvc();

            var context = app.ApplicationServices.GetService<DatabaseContext>();
            if (context.Database.EnsureCreated())
                context.Database.Migrate();
        }
        private static void InitializeDatabase(IApplicationBuilder app)
        {
            var context = app.ApplicationServices.GetService<DatabaseContext>();
            if (context.Database.EnsureCreated())
                context.Database.Migrate();
        }
    }
}
