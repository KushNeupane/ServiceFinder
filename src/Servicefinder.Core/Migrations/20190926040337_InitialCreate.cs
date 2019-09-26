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

            migrationBuilder.InsertData(
                table: "categories",
                columns: new[] { "Id", "ChangeDate", "ChangedBy", "CreatedBy", "CreationDate", "Description", "ImageURL", "Name", "Status", "SystemDefinedImageName", "UserChangedId", "UserCreatedId" },
                values: new object[,]
                {
                    { 1, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 287, DateTimeKind.Local).AddTicks(8428), null, null, "Hospitality", false, null, null, null },
                    { 2, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(4029), null, null, "Travel", false, null, null, null },
                    { 3, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(4035), null, null, "Transportation", false, null, null, null },
                    { 4, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(4036), null, null, "Media", false, null, null, null },
                    { 5, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(4037), null, null, "Entertainment", false, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "city",
                columns: new[] { "Id", "ChangeDate", "ChangedBy", "CreatedBy", "CreatedOn", "CreationDate", "Description", "Name", "Province", "Status", "UserChangedId", "UserCreatedId" },
                values: new object[,]
                {
                    { 17, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8626), null, null, "Baglung", "Gandaki", true, null, null },
                    { 16, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8625), null, null, "Dhulikhel", "3", true, null, null },
                    { 15, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8624), null, null, "Banepa", "3", true, null, null },
                    { 14, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8623), null, null, "Itahari", "1", true, null, null },
                    { 13, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8620), null, null, "Hetauda", "3", true, null, null },
                    { 11, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8618), null, null, "Bhaktapur", "3", true, null, null },
                    { 10, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8617), null, null, "Dhangadhi", "Sudurpashchim", true, null, null },
                    { 9, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8616), null, null, "Janakpur", "2", true, null, null },
                    { 12, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8619), null, null, "Nepalgunj", "5", true, null, null },
                    { 7, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8614), null, null, "Dharan", "1", true, null, null },
                    { 6, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8613), null, null, "Bharatpur", "3", true, null, null },
                    { 5, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8612), null, null, "Birjung", "2", true, null, null },
                    { 4, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8610), null, null, "Biratnagar", "1", true, null, null },
                    { 3, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8608), null, null, "Lalitpur", "3", true, null, null },
                    { 2, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8604), null, null, "Pokhara", "Gandaki", true, null, null },
                    { 1, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8137), null, null, "Kathmandu", "3", true, null, null },
                    { 8, null, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 288, DateTimeKind.Local).AddTicks(8615), null, null, "Butwal", "5", true, null, null }
                });

            migrationBuilder.InsertData(
                table: "serviceItems",
                columns: new[] { "Id", "CategoryId", "ChangeDate", "ChangedBy", "CityId", "CoverImageUrl", "CreatedBy", "CreationDate", "Description", "Email", "Name", "OriginalCoverImageName", "OriginalProfileImageName", "PhoneNumber", "ProfileImageUrl", "ServiceCloseTime", "ServiceOpenTime", "Status", "UserChangedId", "UserCreatedId", "UserId" },
                values: new object[,]
                {
                    { 15, 3, null, null, 15, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1846), null, null, "Transportation Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 16, 4, null, null, 16, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1858), null, null, "Media Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 17, 4, null, null, 17, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1859), null, null, "Media Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 18, 4, null, null, 1, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1860), null, null, "Media Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 22, 5, null, null, 5, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1939), null, null, "Entertainment Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 20, 4, null, null, 3, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1923), null, null, "Media Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 21, 5, null, null, 4, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1938), null, null, "Entertainment Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 23, 5, null, null, 6, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1940), null, null, "Entertainment Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 14, 3, null, null, 14, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1845), null, null, "Transportation Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 19, 4, null, null, 2, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1920), null, null, "Media Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 13, 3, null, null, 13, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1844), null, null, "Transportation Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 2, 1, null, null, 2, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1600), null, null, "Hospitality Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 11, 3, null, null, 11, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1841), null, null, "Transportation Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 10, 2, null, null, 10, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1824), null, null, "Travel Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 9, 2, null, null, 9, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1823), null, null, "Travel Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 8, 2, null, null, 8, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1822), null, null, "Travel Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 7, 2, null, null, 7, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1821), null, null, "Travel Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 6, 2, null, null, 6, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1819), null, null, "Travel Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 5, 1, null, null, 5, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1609), null, null, "Hospitality Service 5", null, null, null, null, null, null, false, null, null, null },
                    { 4, 1, null, null, 4, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1607), null, null, "Hospitality Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 3, 1, null, null, 3, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1606), null, null, "Hospitality Service 3", null, null, null, null, null, null, false, null, null, null },
                    { 24, 5, null, null, 7, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1941), null, null, "Entertainment Service 4", null, null, null, null, null, null, false, null, null, null },
                    { 1, 1, null, null, 1, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1104), null, null, "Hospitality Service 1", null, null, null, null, null, null, false, null, null, null },
                    { 12, 3, null, null, 12, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1843), null, null, "Transportation Service 2", null, null, null, null, null, null, false, null, null, null },
                    { 25, 5, null, null, 8, null, null, new DateTime(2019, 9, 26, 9, 48, 37, 289, DateTimeKind.Local).AddTicks(1942), null, null, "Entertainment Service 5", null, null, null, null, null, null, false, null, null, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "answer");

            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "city");

            migrationBuilder.DropTable(
                name: "question");

            migrationBuilder.DropTable(
                name: "serviceItemImages");

            migrationBuilder.DropTable(
                name: "serviceItems");

            migrationBuilder.DropTable(
                name: "ServiceItemViewLogModel");

            migrationBuilder.DropTable(
                name: "serviceReview");

            migrationBuilder.DropTable(
                name: "subscriber");
        }
    }
}
