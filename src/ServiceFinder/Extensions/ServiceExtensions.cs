﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ServiceFinder.Extensions
{
    public static class ServiceExtensions
    {
        //configure cors
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
        }

        //configure JWT
        public static void ConfigureJWT(this IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = "https://localhost:44332",
                    ValidAudience = "https://localhost:44332",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SuperDuperSecretKey@123#"))
                };
            });
        }

        //configure FacebookAuth for Login
        public static void ConfigureFacebookAuth(this IServiceCollection services)
        {
            services.AddAuthentication(option =>
            {
            }).AddFacebook(facebookOptions =>
            {
                facebookOptions.AppId = "";
                facebookOptions.AppSecret = "";
            });
        }
    }
}
