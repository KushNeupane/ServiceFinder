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
                    CreatedOn = table.Column<DateTime>(nullable: true)
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
                columns: new[] { "Id", "CreatedOn", "IsActive", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2019, 9, 30, 9, 56, 8, 307, DateTimeKind.Local).AddTicks(8250), false, "Hospitality" },
                    { 2, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3153), false, "Travel" },
                    { 3, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3158), false, "Transportation" },
                    { 4, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3159), false, "Media" },
                    { 5, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3160), false, "Entertainment" }
                });

            migrationBuilder.InsertData(
                table: "cities",
                columns: new[] { "Id", "CreatedOn", "IsActive", "Name" },
                values: new object[,]
                {
                    { 17, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6610), false, "Baglung" },
                    { 16, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6609), false, "Dhulikhel" },
                    { 15, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6609), false, "Banepa" },
                    { 14, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6608), false, "Itahari" },
                    { 13, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6607), false, "Hetauda" },
                    { 11, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6603), false, "Bhaktapur" },
                    { 10, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6602), false, "Dhangadhi" },
                    { 9, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6601), false, "Janakpur" },
                    { 12, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6607), false, "Nepalgunj" },
                    { 7, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6600), false, "Dharan" },
                    { 6, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6599), false, "Bharatpur" },
                    { 5, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6598), false, "Birjung" },
                    { 4, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6598), false, "Biratnagar" },
                    { 3, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6597), false, "Lalitpur" },
                    { 2, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6592), false, "Pokhara" },
                    { 1, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6142), false, "Kathmandu" },
                    { 8, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6601), false, "Butwal" }
                });

            migrationBuilder.InsertData(
                table: "objects",
                columns: new[] { "Id", "CategoryId", "CityId", "CreatedOn", "IsActive", "Name" },
                values: new object[,]
                {
                    { 15, 3, 15, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9395), false, "Transportation Service 5" },
                    { 16, 4, 16, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9406), false, "Media Service 1" },
                    { 17, 4, 17, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9407), false, "Media Service 2" },
                    { 18, 4, 1, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9408), false, "Media Service 3" },
                    { 22, 5, 5, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9421), false, "Entertainment Service 2" },
                    { 20, 4, 3, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9409), false, "Media Service 5" },
                    { 21, 5, 4, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9420), false, "Entertainment Service 1" },
                    { 23, 5, 6, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9422), false, "Entertainment Service 3" },
                    { 14, 3, 14, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9394), false, "Transportation Service 4" },
                    { 19, 4, 2, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9408), false, "Media Service 4" },
                    { 13, 3, 13, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9393), false, "Transportation Service 3" },
                    { 2, 1, 2, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9174), false, "Hospitality Service 2" },
                    { 11, 3, 11, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9391), false, "Transportation Service 1" },
                    { 10, 2, 10, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9375), false, "Travel Service 5" },
                    { 9, 2, 9, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9374), false, "Travel Service 4" },
                    { 8, 2, 8, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9373), false, "Travel Service 3" },
                    { 7, 2, 7, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9372), false, "Travel Service 2" },
                    { 6, 2, 6, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9370), false, "Travel Service 1" },
                    { 5, 1, 5, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9180), false, "Hospitality Service 5" },
                    { 4, 1, 4, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9179), false, "Hospitality Service 4" },
                    { 3, 1, 3, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9178), false, "Hospitality Service 3" },
                    { 24, 5, 7, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9423), false, "Entertainment Service 4" },
                    { 1, 1, 1, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(8755), false, "Hospitality Service 1" },
                    { 12, 3, 12, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9392), false, "Transportation Service 2" },
                    { 25, 5, 8, new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9423), false, "Entertainment Service 5" }
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
