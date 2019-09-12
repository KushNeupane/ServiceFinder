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
                name: "city",
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
                    Province = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_city", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "subscriber",
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
                    Email = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_subscriber", x => x.Id);
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
                    CityId = table.Column<int>(nullable: true),
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
                        name: "FK_serviceItems_city_CityId",
                        column: x => x.CityId,
                        principalTable: "city",
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
                name: "question",
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
                    QuestionText = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_question", x => x.Id);
                    table.ForeignKey(
                        name: "FK_question_serviceItems_ServiceItemId",
                        column: x => x.ServiceItemId,
                        principalTable: "serviceItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_question_AspNetUsers_UserId",
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
                name: "serviceItemViewLog",
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
                    ViewCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_serviceItemViewLog", x => x.Id);
                    table.ForeignKey(
                        name: "FK_serviceItemViewLog_serviceItems_ServiceItemId",
                        column: x => x.ServiceItemId,
                        principalTable: "serviceItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_serviceItemViewLog_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
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
                    IsDeleted = table.Column<bool>(nullable: false),
                    ShowOptions = table.Column<bool>(nullable: false)
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

            migrationBuilder.CreateTable(
                name: "answer",
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
                    QuestionId = table.Column<int>(nullable: false),
                    AnswerText = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_answer", x => x.Id);
                    table.ForeignKey(
                        name: "FK_answer_question_QuestionId",
                        column: x => x.QuestionId,
                        principalTable: "question",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "54881c24-a805-42a3-bc59-b3bc56dfb9d0", "b70c903e-df38-4c26-b8c0-a990ef043459", "admin", "ADMIN" },
                    { "9f183b8e-eda5-456a-9004-3ea217e96588", "422ef34b-7414-4e9a-a608-6e50ef7c6820", "user", "USER" }
                });

            migrationBuilder.InsertData(
                table: "categories",
                columns: new[] { "Id", "ChangeDate", "ChangedBy", "CreatedBy", "CreationDate", "Description", "ImageURL", "Name", "Status", "SystemDefinedImageName", "UserChangedId", "UserCreatedId" },
                values: new object[,]
                {
                    { 3, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 638, DateTimeKind.Local), null, null, "Transportation", false, null, null, null },
                    { 2, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 638, DateTimeKind.Local), null, null, "Travel", false, null, null, null },
                    { 1, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 638, DateTimeKind.Local), null, null, "Hospitality", false, null, null, null },
                    { 4, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 638, DateTimeKind.Local), null, null, "Media", false, null, null, null },
                    { 5, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 638, DateTimeKind.Local), null, null, "Entertainment", false, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "city",
                columns: new[] { "Id", "ChangeDate", "ChangedBy", "CreatedBy", "CreatedOn", "CreationDate", "Description", "Name", "Province", "Status", "UserChangedId", "UserCreatedId" },
                values: new object[,]
                {
                    { 6, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Bharatpur", "3", true, null, null },
                    { 1, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Kathmandu", "3", true, null, null },
                    { 2, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Pokhara", "Gandaki", true, null, null },
                    { 3, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Lalitpur", "3", true, null, null },
                    { 17, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Baglung", "Gandaki", true, null, null },
                    { 16, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Dhulikhel", "3", true, null, null },
                    { 15, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Banepa", "3", true, null, null },
                    { 5, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Birjung", "2", true, null, null },
                    { 14, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Itahari", "1", true, null, null },
                    { 12, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Nepalgunj", "5", true, null, null },
                    { 11, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Bhaktapur", "3", true, null, null },
                    { 4, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Biratnagar", "1", true, null, null },
                    { 9, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Janakpur", "2", true, null, null },
                    { 8, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Butwal", "5", true, null, null },
                    { 7, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Dharan", "1", true, null, null },
                    { 13, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Hetauda", "3", true, null, null },
                    { 10, null, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Dhangadhi", "Sudurpashchim", true, null, null }
                });

            migrationBuilder.InsertData(
                table: "serviceItems",
                columns: new[] { "Id", "CategoryId", "ChangeDate", "ChangedBy", "CityId", "CoverImageUrl", "CreatedBy", "CreationDate", "Description", "Email", "Name", "OriginalCoverImageName", "OriginalProfileImageName", "PhoneNumber", "ProfileImageUrl", "ServiceCloseTime", "ServiceOpenTime", "Status", "UserChangedId", "UserCreatedId", "UserId" },
                values: new object[,]
                {
                    { 1, 1, null, null, 1, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Hospitality Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 23, 5, null, null, 6, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Entertainment Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 22, 5, null, null, 5, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Entertainment Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 21, 5, null, null, 4, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Entertainment Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 20, 4, null, null, 3, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Media Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 19, 4, null, null, 2, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Media Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 18, 4, null, null, 1, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Media Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 17, 4, null, null, 17, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Media Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 16, 4, null, null, 16, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Media Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 15, 3, null, null, 15, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Transportation Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 14, 3, null, null, 14, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Transportation Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 24, 5, null, null, 7, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Entertainment Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 13, 3, null, null, 13, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Transportation Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 11, 3, null, null, 11, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Transportation Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 10, 2, null, null, 10, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Travel Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 9, 2, null, null, 9, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Travel Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 8, 2, null, null, 8, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Travel Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 7, 2, null, null, 7, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Travel Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 6, 2, null, null, 6, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Travel Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 5, 1, null, null, 5, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Hospitality Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 4, 1, null, null, 4, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Hospitality Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 3, 1, null, null, 3, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Hospitality Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 2, 1, null, null, 2, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Hospitality Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 12, 3, null, null, 12, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Transportation Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 25, 5, null, null, 8, null, null, new DateTime(2019, 7, 17, 10, 0, 39, 639, DateTimeKind.Local), null, null, "Entertainment Service 5", null, null, null, null, null, null, false, null, null, null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_answer_QuestionId",
                table: "answer",
                column: "QuestionId");

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
                name: "IX_question_ServiceItemId",
                table: "question",
                column: "ServiceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_question_UserId",
                table: "question",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItemImages_ServiceItemId",
                table: "serviceItemImages",
                column: "ServiceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItems_CategoryId",
                table: "serviceItems",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItems_CityId",
                table: "serviceItems",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItems_UserId",
                table: "serviceItems",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItemViewLog_ServiceItemId",
                table: "serviceItemViewLog",
                column: "ServiceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_serviceItemViewLog_UserId",
                table: "serviceItemViewLog",
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
                name: "answer");

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
                name: "serviceItemViewLog");

            migrationBuilder.DropTable(
                name: "serviceReview");

            migrationBuilder.DropTable(
                name: "subscriber");

            migrationBuilder.DropTable(
                name: "question");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "serviceItems");

            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "city");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
