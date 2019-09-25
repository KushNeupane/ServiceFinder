using System;
using ServiceFinder.DI.Core;
using ServiceFinder.DI.Backend;
using Microsoft.AspNetCore.Mvc;
using ServiceFinder.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using ServiceFinder.Backend.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServiceFinder.Backend.Service;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using ServiceFinder.FrontEnd.Context;
using ServiceFinder.Users.DatabaseContext;
using Servicefinder.Core.DatabaseContext;

namespace ServiceFinder
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            //Configure CORS
            services.AddCors(o => o.AddPolicy("EnableCORS", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            services.Configure<IMailSettingModel>(Configuration.GetSection("MailSetting"));
            services.Configure<IGeneralSettingModel>(Configuration.GetSection("GeneralSetting"));

            //Register Database Context
            services.AddDbContext<UserDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddDbContext<CommonDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<IServiceManagement, ServiceManagement>();
            //services.AddScoped<IServiceQuestionAnswer, ServiceQuestionAnswer>();
            //services.AddScoped<IServiceCategory, ServiceCategory>();
            //services.AddScoped<IServiceCity, ServiceCity>();

            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/dist"; });

            //Configure JWT
            services.ConfigureJWT();

            //Configure FacebookAuth
            //services.ConfigureFacebookAuth();

            services.AddDefaultIdentity<ApplicationUserModel>().AddRoles<IdentityRole>().AddEntityFrameworkStores<ServiceFinderDbContext>();

            services.AddSingleton(Configuration);
            services.Configure<FormOptions>(x => { x.MultipartBodyLengthLimit = int.MaxValue; });
            services.AddTransient<ServiceFinder.DI.Users.IEmailSender, ServiceFinder.DI.Users.AutoMessageSender>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, UserManager<ApplicationUserModel> userManager)
        {
            if (env.IsDevelopment()) { app.UseDeveloperExceptionPage(); }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }
            app.UseAuthentication();

            app.UseStaticFiles();
            app.UseHttpsRedirection();
            //app.UseStaticFiles(new StaticFileOptions()
            //{
            //    RequestPath = new PathString("/wwwroot"),
            //    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot"))
            //});

            app.UseSpaStaticFiles();

            //Seed default Application User
            //  DefaultUserInitializer.SeedInitialUsers(userManager);
            app.UseCors("EnableCORS");
            app.UseMvc();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                    spa.Options.StartupTimeout = TimeSpan.FromSeconds(6000);
                }
            });
        }
    }
}
