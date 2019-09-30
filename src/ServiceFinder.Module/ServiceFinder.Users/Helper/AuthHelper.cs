using Microsoft.IdentityModel.Tokens;
using ServiceFinder.Users.Model;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ServiceFinder.Users.Helper
{
    public static class AuthHelper
    {
        public static string GenerateToken(ApplicationUserModel user, string assignedRole)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var userClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, assignedRole)
            };

            var tokeOptions = new JwtSecurityToken(
                issuer: "https://localhost:44332",
                audience: "https://localhost:44332",
                claims: userClaims,
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );
            string tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return tokenString;
        }
    }
}
