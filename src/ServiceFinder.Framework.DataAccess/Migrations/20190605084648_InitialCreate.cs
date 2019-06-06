using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceFinder.Framework.DataAccess.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    DisplayName = table.Column<string>(nullable: true),
                    IsAdmin = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    OriginalImageName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true),
                    SystemDefinedImageName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(maxLength: 128, nullable: false),
                    ProviderKey = table.Column<string>(maxLength: 128, nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(maxLength: 128, nullable: false),
                    Name = table.Column<string>(maxLength: 128, nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "serviceItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true),
                    CategoryId = table.Column<int>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    ServiceOpenTime = table.Column<TimeSpan>(nullable: true),
                    ServiceCloseTime = table.Column<TimeSpan>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ProfileImageUrl = table.Column<string>(nullable: true),
                    OriginalProfileImageName = table.Column<string>(nullable: true),
                    CoverImageUrl = table.Column<string>(nullable: true),
                    OriginalCoverImageName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_serviceItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_serviceItems_categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_serviceItems_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "serviceItemImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true),
                    ServiceItemId = table.Column<int>(nullable: false),
                    ImageURL = table.Column<string>(nullable: true),
                    OriginalImageName = table.Column<string>(nullable: true),
                    SystemDefinedImageName = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_serviceItemImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_serviceItemImages_serviceItems_ServiceItemId",
                        column: x => x.ServiceItemId,
                        principalTable: "serviceItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "serviceReview",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    ServiceItemId = table.Column<int>(nullable: false),
                    ReviewTime = table.Column<DateTime>(nullable: false),
                    OverAllReview = table.Column<int>(nullable: false),
                    ReviewTest = table.Column<string>(nullable: true),
                    EverUsed = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_serviceReview", x => x.Id);
                    table.ForeignKey(
                        name: "FK_serviceReview_serviceItems_ServiceItemId",
                        column: x => x.ServiceItemId,
                        principalTable: "serviceItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_serviceReview_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2b8d9187-3377-4dd8-ab3a-3b6b4302705d", "54a13206-61f4-4f34-8931-a3c560347822", "admin", "ADMIN" },
                    { "4f1e6e2e-426b-434e-819f-dc19f227ab89", "190b53e2-27b3-4d14-bd1f-784be98d5654", "user", "USER" }
                });

            migrationBuilder.InsertData(
                table: "categories",
                columns: new[] { "Id", "ChangeDate", "ChangedBy", "CreatedBy", "CreationDate", "Description", "ImageURL", "Name", "Status", "SystemDefinedImageName", "UserChangedId", "UserCreatedId" },
                values: new object[,]
                {
                    { 1, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 965, DateTimeKind.Local), null, null, "Hospitality", false, null, null, null },
                    { 2, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Travel", false, null, null, null },
                    { 3, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Transportation", false, null, null, null },
                    { 4, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Media", false, null, null, null },
                    { 5, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Entertainment", false, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "serviceItems",
                columns: new[] { "Id", "CategoryId", "ChangeDate", "ChangedBy", "CoverImageUrl", "CreatedBy", "CreationDate", "Description", "Email", "Name", "OriginalCoverImageName", "OriginalProfileImageName", "PhoneNumber", "ProfileImageUrl", "ServiceCloseTime", "ServiceOpenTime", "Status", "UserChangedId", "UserCreatedId", "UserId" },
                values: new object[,]
                {
                    { 1, 1, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Hospitality Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 23, 5, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Entertainment Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 22, 5, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Entertainment Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 21, 5, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Entertainment Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 20, 4, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Media Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 19, 4, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Media Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 18, 4, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Media Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 17, 4, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Media Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 16, 4, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Media Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 15, 3, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Transportation Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 14, 3, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Transportation Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 24, 5, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Entertainment Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 13, 3, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Transportation Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 11, 3, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Transportation Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 10, 2, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Travel Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 9, 2, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Travel Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 8, 2, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Travel Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 7, 2, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Travel Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 6, 2, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Travel Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 5, 1, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Hospitality Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 4, 1, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Hospitality Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 3, 1, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Hospitality Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 2, 1, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Hospitality Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 12, 3, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Transportation Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 25, 5, null, null, null, null, new DateTime(2019, 6, 5, 14, 31, 47, 966, DateTimeKind.Local), null, null, "Entertainment Service 5", null, null, null, null, null, null, false, null, null, null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItemImages_ServiceItemId",
                table: "serviceItemImages",
                column: "ServiceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItems_CategoryId",
                table: "serviceItems",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItems_UserId",
                table: "serviceItems",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceReview_ServiceItemId",
                table: "serviceReview",
                column: "ServiceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceReview_UserId",
                table: "serviceReview",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "serviceItemImages");

            migrationBuilder.DropTable(
                name: "serviceReview");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "serviceItems");

            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
