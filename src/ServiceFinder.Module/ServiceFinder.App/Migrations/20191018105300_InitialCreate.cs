using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceFinder.App.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "cities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "objects",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    CityId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    WebLink = table.Column<string>(nullable: true),
                    MapLink = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    AdditionalEmail = table.Column<string>(nullable: true),
                    AdditionalPhoneNumber = table.Column<string>(nullable: true),
                    ServiceOpenTime = table.Column<TimeSpan>(nullable: true),
                    ServiceCloseTime = table.Column<TimeSpan>(nullable: true),
                    Status = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ProfileImageUrl = table.Column<string>(nullable: true),
                    OriginalProfileImageName = table.Column<string>(nullable: true),
                    CoverImageUrl = table.Column<string>(nullable: true),
                    OriginalCoverImageName = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_objects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "reviews",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    ObjectId = table.Column<int>(nullable: false),
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
                    table.PrimaryKey("PK_reviews", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "categories",
                columns: new[] { "Id", "CreatedOn", "ImageUrl", "IsActive", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2019, 10, 18, 16, 38, 0, 471, DateTimeKind.Local).AddTicks(3817), null, false, "Hospitality" },
                    { 2, new DateTime(2019, 10, 18, 16, 38, 0, 471, DateTimeKind.Local).AddTicks(9932), null, false, "Travel" },
                    { 3, new DateTime(2019, 10, 18, 16, 38, 0, 471, DateTimeKind.Local).AddTicks(9938), null, false, "Transportation" },
                    { 4, new DateTime(2019, 10, 18, 16, 38, 0, 471, DateTimeKind.Local).AddTicks(9939), null, false, "Media" },
                    { 5, new DateTime(2019, 10, 18, 16, 38, 0, 471, DateTimeKind.Local).AddTicks(9940), null, false, "Entertainment" }
                });

            migrationBuilder.InsertData(
                table: "cities",
                columns: new[] { "Id", "CreatedOn", "IsActive", "Name" },
                values: new object[,]
                {
                    { 17, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3600), false, "Baglung" },
                    { 16, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3599), false, "Dhulikhel" },
                    { 15, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3598), false, "Banepa" },
                    { 14, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3597), false, "Itahari" },
                    { 13, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3596), false, "Hetauda" },
                    { 11, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3595), false, "Bhaktapur" },
                    { 10, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3594), false, "Dhangadhi" },
                    { 9, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3593), false, "Janakpur" },
                    { 12, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3596), false, "Nepalgunj" },
                    { 7, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3591), false, "Dharan" },
                    { 6, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3590), false, "Bharatpur" },
                    { 5, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3589), false, "Birjung" },
                    { 4, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3588), false, "Biratnagar" },
                    { 3, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3587), false, "Lalitpur" },
                    { 2, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3582), false, "Pokhara" },
                    { 1, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(2999), false, "Kathmandu" },
                    { 8, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(3592), false, "Butwal" }
                });

            migrationBuilder.InsertData(
                table: "objects",
                columns: new[] { "Id", "AdditionalEmail", "AdditionalPhoneNumber", "CategoryId", "CityId", "CompanyName", "CoverImageUrl", "CreatedOn", "Description", "Email", "IsActive", "MapLink", "Name", "OriginalCoverImageName", "OriginalProfileImageName", "PhoneNumber", "ProfileImageUrl", "ServiceCloseTime", "ServiceOpenTime", "Status", "UserId", "WebLink" },
                values: new object[,]
                {
                    { 15, null, null, 3, 15, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7033), null, null, false, null, "Transportation Service 5", null, null, null, null, null, null, false, null, null },
                    { 16, null, null, 4, 16, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7048), null, null, false, null, "Media Service 1", null, null, null, null, null, null, false, null, null },
                    { 17, null, null, 4, 17, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7050), null, null, false, null, "Media Service 2", null, null, null, null, null, null, false, null, null },
                    { 18, null, null, 4, 1, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7051), null, null, false, null, "Media Service 3", null, null, null, null, null, null, false, null, null },
                    { 22, null, null, 5, 5, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7068), null, null, false, null, "Entertainment Service 2", null, null, null, null, null, null, false, null, null },
                    { 20, null, null, 4, 3, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7053), null, null, false, null, "Media Service 5", null, null, null, null, null, null, false, null, null },
                    { 21, null, null, 5, 4, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7067), null, null, false, null, "Entertainment Service 1", null, null, null, null, null, null, false, null, null },
                    { 23, null, null, 5, 6, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7069), null, null, false, null, "Entertainment Service 3", null, null, null, null, null, null, false, null, null },
                    { 14, null, null, 3, 14, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7032), null, null, false, null, "Transportation Service 4", null, null, null, null, null, null, false, null, null },
                    { 19, null, null, 4, 2, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7052), null, null, false, null, "Media Service 4", null, null, null, null, null, null, false, null, null },
                    { 13, null, null, 3, 13, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7031), null, null, false, null, "Transportation Service 3", null, null, null, null, null, null, false, null, null },
                    { 2, null, null, 1, 2, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6711), null, null, false, null, "Hospitality Service 2", null, null, null, null, null, null, false, null, null },
                    { 11, null, null, 3, 11, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6993), null, null, false, null, "Transportation Service 1", null, null, null, null, null, null, false, null, null },
                    { 10, null, null, 2, 10, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6972), null, null, false, null, "Travel Service 5", null, null, null, null, null, null, false, null, null },
                    { 9, null, null, 2, 9, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6971), null, null, false, null, "Travel Service 4", null, null, null, null, null, null, false, null, null },
                    { 8, null, null, 2, 8, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6970), null, null, false, null, "Travel Service 3", null, null, null, null, null, null, false, null, null },
                    { 7, null, null, 2, 7, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6969), null, null, false, null, "Travel Service 2", null, null, null, null, null, null, false, null, null },
                    { 6, null, null, 2, 6, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6967), null, null, false, null, "Travel Service 1", null, null, null, null, null, null, false, null, null },
                    { 5, null, null, 1, 5, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6719), null, null, false, null, "Hospitality Service 5", null, null, null, null, null, null, false, null, null },
                    { 4, null, null, 1, 4, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6718), null, null, false, null, "Hospitality Service 4", null, null, null, null, null, null, false, null, null },
                    { 3, null, null, 1, 3, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6717), null, null, false, null, "Hospitality Service 3", null, null, null, null, null, null, false, null, null },
                    { 24, null, null, 5, 7, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7070), null, null, false, null, "Entertainment Service 4", null, null, null, null, null, null, false, null, null },
                    { 1, null, null, 1, 1, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6117), null, null, false, null, "Hospitality Service 1", null, null, null, null, null, null, false, null, null },
                    { 12, null, null, 3, 12, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(6994), null, null, false, null, "Transportation Service 2", null, null, null, null, null, null, false, null, null },
                    { 25, null, null, 5, 8, null, null, new DateTime(2019, 10, 18, 16, 38, 0, 472, DateTimeKind.Local).AddTicks(7071), null, null, false, null, "Entertainment Service 5", null, null, null, null, null, null, false, null, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "categories");

            migrationBuilder.DropTable(
                name: "cities");

            migrationBuilder.DropTable(
                name: "objects");

            migrationBuilder.DropTable(
                name: "reviews");
        }
    }
}
