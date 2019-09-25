using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Servicefinder.Core.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApplicationUserModel",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(nullable: true),
                    NormalizedUserName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    NormalizedEmail = table.Column<string>(nullable: true),
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
                    table.PrimaryKey("PK_ApplicationUserModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true),
                    SystemDefinedImageName = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
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
                    Name = table.Column<string>(nullable: true),
                    Province = table.Column<string>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
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
                    Email = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_subscriber", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "serviceItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
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
                    OriginalCoverImageName = table.Column<string>(nullable: true),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
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
                        name: "FK_serviceItems_ApplicationUserModel_UserId",
                        column: x => x.UserId,
                        principalTable: "ApplicationUserModel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "question",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    ServiceItemId = table.Column<int>(nullable: false),
                    QuestionText = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
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
                        name: "FK_question_ApplicationUserModel_UserId",
                        column: x => x.UserId,
                        principalTable: "ApplicationUserModel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "serviceItemImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ServiceItemId = table.Column<int>(nullable: false),
                    ImageURL = table.Column<string>(nullable: true),
                    OriginalImageName = table.Column<string>(nullable: true),
                    SystemDefinedImageName = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
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
                name: "ServiceItemViewLogModel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    ServiceItemId = table.Column<int>(nullable: false),
                    ViewCount = table.Column<int>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceItemViewLogModel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ServiceItemViewLogModel_serviceItems_ServiceItemId",
                        column: x => x.ServiceItemId,
                        principalTable: "serviceItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceItemViewLogModel_ApplicationUserModel_UserId",
                        column: x => x.UserId,
                        principalTable: "ApplicationUserModel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "serviceReview",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    ServiceItemId = table.Column<int>(nullable: false),
                    ReviewTime = table.Column<DateTime>(nullable: false),
                    OverAllReview = table.Column<int>(nullable: false),
                    ReviewTest = table.Column<string>(nullable: true),
                    EverUsed = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    ShowOptions = table.Column<bool>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
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
                        name: "FK_serviceReview_ApplicationUserModel_UserId",
                        column: x => x.UserId,
                        principalTable: "ApplicationUserModel",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "answer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    QuestionId = table.Column<int>(nullable: false),
                    AnswerText = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false),
                    UserCreatedId = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: true),
                    UserChangedId = table.Column<string>(nullable: true),
                    ChangedBy = table.Column<string>(nullable: true),
                    ChangeDate = table.Column<DateTime>(nullable: true)
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
                table: "categories",
                columns: new[] { "Id", "ChangeDate", "ChangedBy", "CreatedBy", "CreationDate", "Description", "ImageURL", "Name", "Status", "SystemDefinedImageName", "UserChangedId", "UserCreatedId" },
                values: new object[,]
                {
                    { 1, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 971, DateTimeKind.Local).AddTicks(1148), null, null, "Hospitality", false, null, null, null },
                    { 2, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 971, DateTimeKind.Local).AddTicks(6195), null, null, "Travel", false, null, null, null },
                    { 3, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 971, DateTimeKind.Local).AddTicks(6201), null, null, "Transportation", false, null, null, null },
                    { 4, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 971, DateTimeKind.Local).AddTicks(6202), null, null, "Media", false, null, null, null },
                    { 5, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 971, DateTimeKind.Local).AddTicks(6204), null, null, "Entertainment", false, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "city",
                columns: new[] { "Id", "ChangeDate", "ChangedBy", "CreatedBy", "CreatedOn", "CreationDate", "Description", "Name", "Province", "Status", "UserChangedId", "UserCreatedId" },
                values: new object[,]
                {
                    { 15, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(638), null, null, "Banepa", "3", true, null, null },
                    { 14, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(637), null, null, "Itahari", "1", true, null, null },
                    { 13, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(635), null, null, "Hetauda", "3", true, null, null },
                    { 12, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(633), null, null, "Nepalgunj", "5", true, null, null },
                    { 11, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(631), null, null, "Bhaktapur", "3", true, null, null },
                    { 10, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(629), null, null, "Dhangadhi", "Sudurpashchim", true, null, null },
                    { 9, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(628), null, null, "Janakpur", "2", true, null, null },
                    { 6, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(622), null, null, "Bharatpur", "3", true, null, null },
                    { 7, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(624), null, null, "Dharan", "1", true, null, null },
                    { 16, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(639), null, null, "Dhulikhel", "3", true, null, null },
                    { 5, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(620), null, null, "Birjung", "2", true, null, null },
                    { 4, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(618), null, null, "Biratnagar", "1", true, null, null },
                    { 3, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(616), null, null, "Lalitpur", "3", true, null, null },
                    { 2, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(612), null, null, "Pokhara", "Gandaki", true, null, null },
                    { 1, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(189), null, null, "Kathmandu", "3", true, null, null },
                    { 8, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(625), null, null, "Butwal", "5", true, null, null },
                    { 17, null, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(642), null, null, "Baglung", "Gandaki", true, null, null }
                });

            migrationBuilder.InsertData(
                table: "serviceItems",
                columns: new[] { "Id", "CategoryId", "ChangeDate", "ChangedBy", "CityId", "CoverImageUrl", "CreatedBy", "CreationDate", "Description", "Email", "Name", "OriginalCoverImageName", "OriginalProfileImageName", "PhoneNumber", "ProfileImageUrl", "ServiceCloseTime", "ServiceOpenTime", "Status", "UserChangedId", "UserCreatedId", "UserId" },
                values: new object[,]
                {
                    { 1, 1, null, null, 1, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(2852), null, null, "Hospitality Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 15, 3, null, null, 15, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3634), null, null, "Transportation Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 14, 3, null, null, 14, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3573), null, null, "Transportation Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 13, 3, null, null, 13, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3572), null, null, "Transportation Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 12, 3, null, null, 12, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3571), null, null, "Transportation Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 11, 3, null, null, 11, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3570), null, null, "Transportation Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 10, 2, null, null, 10, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3552), null, null, "Travel Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 9, 2, null, null, 9, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3551), null, null, "Travel Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 25, 5, null, null, 8, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3669), null, null, "Entertainment Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 8, 2, null, null, 8, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3550), null, null, "Travel Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 24, 5, null, null, 7, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3667), null, null, "Entertainment Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 16, 4, null, null, 16, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3649), null, null, "Media Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 7, 2, null, null, 7, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3549), null, null, "Travel Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 6, 2, null, null, 6, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3547), null, null, "Travel Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 22, 5, null, null, 5, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3665), null, null, "Entertainment Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 5, 1, null, null, 5, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3298), null, null, "Hospitality Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 21, 5, null, null, 4, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3664), null, null, "Entertainment Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 4, 1, null, null, 4, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3297), null, null, "Hospitality Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 20, 4, null, null, 3, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3652), null, null, "Media Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 3, 1, null, null, 3, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3296), null, null, "Hospitality Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 19, 4, null, null, 2, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3651), null, null, "Media Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 2, 1, null, null, 2, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3290), null, null, "Hospitality Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 18, 4, null, null, 1, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3651), null, null, "Media Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 23, 5, null, null, 6, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3666), null, null, "Entertainment Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 17, 4, null, null, 17, null, null, new DateTime(2019, 9, 25, 13, 35, 27, 972, DateTimeKind.Local).AddTicks(3650), null, null, "Media Service 2", null, null, null, null, null, null, false, null, null, null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_answer_QuestionId",
                table: "answer",
                column: "QuestionId");

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
                name: "IX_ServiceItemViewLogModel_ServiceItemId",
                table: "ServiceItemViewLogModel",
                column: "ServiceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceItemViewLogModel_UserId",
                table: "ServiceItemViewLogModel",
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
                name: "serviceItemImages");

            migrationBuilder.DropTable(
                name: "ServiceItemViewLogModel");

            migrationBuilder.DropTable(
                name: "serviceReview");

            migrationBuilder.DropTable(
                name: "subscriber");

            migrationBuilder.DropTable(
                name: "question");

            migrationBuilder.DropTable(
                name: "serviceItems");

            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "city");

            migrationBuilder.DropTable(
                name: "ApplicationUserModel");
        }
    }
}
