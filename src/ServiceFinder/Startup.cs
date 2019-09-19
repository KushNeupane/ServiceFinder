using Finder.Framework.DataAccess.Contexts.AccountManagement;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using ServiceFinder.DependencyInjection.Usability;
using ServiceFinder.Extensions;
using ServiceFinder.Framework.DataAccess.Services.AdminDashboard.Category;
using ServiceFinder.Framework.DataAccess.Services.AdminDashboard.City;
using ServiceFinder.Framework.DataAccess.Services.Dashboard.ServiceManagement;
using ServiceFinder.Framework.DataAccess.Services.UserDashboard.QuestionAnswer;
using System;
using System.IO;
using TAM.Framework.DataAccess.Contexts.AccountManagement;
using TAM.Framework.Model.Models.AccountManagement;

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

            services.Configure<MailSettingModel>(Configuration.GetSection("MailSetting"));
            services.Configure<GeneralSettingModel>(Configuration.GetSection("GeneralSetting"));

            //Register Database Context
            services.AddDbContext<ServiceFinderDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<IServiceManagement, ServiceManagement>();
            services.AddScoped<IServiceQuestionAnswer, ServiceQuestionAnswer>();
            services.AddScoped<IServiceCategory, ServiceCategory>();
            services.AddScoped<IServiceCity, ServiceCity>();

            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/dist"; });

            //Configure JWT
            services.ConfigureJWT();

            //Configure FacebookAuth
            //services.ConfigureFacebookAuth();

            services.AddDefaultIdentity<ApplicationUserEntity>().AddRoles<IdentityRole>().AddEntityFrameworkStores<ServiceFinderDbContext>();

            services.AddSingleton<IConfiguration>(Configuration);
            services.Configure<FormOptions>(x => { x.MultipartBodyLengthLimit = int.MaxValue; });
            services.AddTransient<Service.Framework.Core.Helper.IEmailSender, Service.Framework.Core.Helper.AutoMessageSender>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, UserManager<ApplicationUserEntity> userManager)
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
