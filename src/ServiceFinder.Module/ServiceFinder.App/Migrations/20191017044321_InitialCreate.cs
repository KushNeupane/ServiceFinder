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
                    CityId = table.Column<int>(nullable: false),
                    CategoryId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_objects", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "categories",
                columns: new[] { "Id", "CreatedOn", "ImageUrl", "IsActive", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2019, 10, 17, 10, 28, 21, 591, DateTimeKind.Local).AddTicks(4125), null, false, "Hospitality" },
                    { 2, new DateTime(2019, 10, 17, 10, 28, 21, 591, DateTimeKind.Local).AddTicks(8513), null, false, "Travel" },
                    { 3, new DateTime(2019, 10, 17, 10, 28, 21, 591, DateTimeKind.Local).AddTicks(8519), null, false, "Transportation" },
                    { 4, new DateTime(2019, 10, 17, 10, 28, 21, 591, DateTimeKind.Local).AddTicks(8519), null, false, "Media" },
                    { 5, new DateTime(2019, 10, 17, 10, 28, 21, 591, DateTimeKind.Local).AddTicks(8520), null, false, "Entertainment" }
                });

            migrationBuilder.InsertData(
                table: "cities",
                columns: new[] { "Id", "CreatedOn", "IsActive", "Name" },
                values: new object[,]
                {
                    { 17, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1499), false, "Baglung" },
                    { 16, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1498), false, "Dhulikhel" },
                    { 15, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1498), false, "Banepa" },
                    { 14, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1497), false, "Itahari" },
                    { 13, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1496), false, "Hetauda" },
                    { 11, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1493), false, "Bhaktapur" },
                    { 10, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1492), false, "Dhangadhi" },
                    { 9, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1491), false, "Janakpur" },
                    { 12, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1493), false, "Nepalgunj" },
                    { 7, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1490), false, "Dharan" },
                    { 6, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1489), false, "Bharatpur" },
                    { 5, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1488), false, "Birjung" },
                    { 4, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1487), false, "Biratnagar" },
                    { 3, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1486), false, "Lalitpur" },
                    { 2, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1481), false, "Pokhara" },
                    { 1, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1038), false, "Kathmandu" },
                    { 8, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(1491), false, "Butwal" }
                });

            migrationBuilder.InsertData(
                table: "objects",
                columns: new[] { "Id", "CategoryId", "CityId", "CreatedOn", "IsActive", "Name" },
                values: new object[,]
                {
                    { 15, 3, 15, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4205), false, "Transportation Service 5" },
                    { 16, 4, 16, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4215), false, "Media Service 1" },
                    { 17, 4, 17, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4216), false, "Media Service 2" },
                    { 18, 4, 1, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4217), false, "Media Service 3" },
                    { 22, 5, 5, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4230), false, "Entertainment Service 2" },
                    { 20, 4, 3, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4219), false, "Media Service 5" },
                    { 21, 5, 4, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4229), false, "Entertainment Service 1" },
                    { 23, 5, 6, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4231), false, "Entertainment Service 3" },
                    { 14, 3, 14, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4204), false, "Transportation Service 4" },
                    { 19, 4, 2, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4218), false, "Media Service 4" },
                    { 13, 3, 13, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4204), false, "Transportation Service 3" },
                    { 2, 1, 2, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(3975), false, "Hospitality Service 2" },
                    { 11, 3, 11, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4202), false, "Transportation Service 1" },
                    { 10, 2, 10, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4186), false, "Travel Service 5" },
                    { 9, 2, 9, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4185), false, "Travel Service 4" },
                    { 8, 2, 8, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4184), false, "Travel Service 3" },
                    { 7, 2, 7, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4184), false, "Travel Service 2" },
                    { 6, 2, 6, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4182), false, "Travel Service 1" },
                    { 5, 1, 5, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(3981), false, "Hospitality Service 5" },
                    { 4, 1, 4, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(3981), false, "Hospitality Service 4" },
                    { 3, 1, 3, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(3980), false, "Hospitality Service 3" },
                    { 24, 5, 7, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4231), false, "Entertainment Service 4" },
                    { 1, 1, 1, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(3555), false, "Hospitality Service 1" },
                    { 12, 3, 12, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4203), false, "Transportation Service 2" },
                    { 25, 5, 8, new DateTime(2019, 10, 17, 10, 28, 21, 592, DateTimeKind.Local).AddTicks(4232), false, "Entertainment Service 5" }
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
        }
    }
}
