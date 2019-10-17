﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ServiceFinder.Backend.Context;

namespace ServiceFinder.App.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ServiceFinder.Main.Model.CategoryModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 307, DateTimeKind.Local).AddTicks(8250),
                            IsActive = false,
                            Name = "Hospitality"
                        },
                        new
                        {
                            Id = 2,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3153),
                            IsActive = false,
                            Name = "Travel"
                        },
                        new
                        {
                            Id = 3,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3158),
                            IsActive = false,
                            Name = "Transportation"
                        },
                        new
                        {
                            Id = 4,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3159),
                            IsActive = false,
                            Name = "Media"
                        },
                        new
                        {
                            Id = 5,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(3160),
                            IsActive = false,
                            Name = "Entertainment"
                        });
                });

            modelBuilder.Entity("ServiceFinder.Main.Model.CityModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("cities");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6142),
                            IsActive = false,
                            Name = "Kathmandu"
                        },
                        new
                        {
                            Id = 2,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6592),
                            IsActive = false,
                            Name = "Pokhara"
                        },
                        new
                        {
                            Id = 3,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6597),
                            IsActive = false,
                            Name = "Lalitpur"
                        },
                        new
                        {
                            Id = 4,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6598),
                            IsActive = false,
                            Name = "Biratnagar"
                        },
                        new
                        {
                            Id = 5,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6598),
                            IsActive = false,
                            Name = "Birjung"
                        },
                        new
                        {
                            Id = 6,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6599),
                            IsActive = false,
                            Name = "Bharatpur"
                        },
                        new
                        {
                            Id = 7,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6600),
                            IsActive = false,
                            Name = "Dharan"
                        },
                        new
                        {
                            Id = 8,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6601),
                            IsActive = false,
                            Name = "Butwal"
                        },
                        new
                        {
                            Id = 9,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6601),
                            IsActive = false,
                            Name = "Janakpur"
                        },
                        new
                        {
                            Id = 10,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6602),
                            IsActive = false,
                            Name = "Dhangadhi"
                        },
                        new
                        {
                            Id = 11,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6603),
                            IsActive = false,
                            Name = "Bhaktapur"
                        },
                        new
                        {
                            Id = 12,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6607),
                            IsActive = false,
                            Name = "Nepalgunj"
                        },
                        new
                        {
                            Id = 13,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6607),
                            IsActive = false,
                            Name = "Hetauda"
                        },
                        new
                        {
                            Id = 14,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6608),
                            IsActive = false,
                            Name = "Itahari"
                        },
                        new
                        {
                            Id = 15,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6609),
                            IsActive = false,
                            Name = "Banepa"
                        },
                        new
                        {
                            Id = 16,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6609),
                            IsActive = false,
                            Name = "Dhulikhel"
                        },
                        new
                        {
                            Id = 17,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(6610),
                            IsActive = false,
                            Name = "Baglung"
                        });
                });

            modelBuilder.Entity("ServiceFinder.Main.Model.ObjectModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<int>("CityId");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("objects");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryId = 1,
                            CityId = 1,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(8755),
                            IsActive = false,
                            Name = "Hospitality Service 1"
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 1,
                            CityId = 2,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9174),
                            IsActive = false,
                            Name = "Hospitality Service 2"
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 1,
                            CityId = 3,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9178),
                            IsActive = false,
                            Name = "Hospitality Service 3"
                        },
                        new
                        {
                            Id = 4,
                            CategoryId = 1,
                            CityId = 4,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9179),
                            IsActive = false,
                            Name = "Hospitality Service 4"
                        },
                        new
                        {
                            Id = 5,
                            CategoryId = 1,
                            CityId = 5,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9180),
                            IsActive = false,
                            Name = "Hospitality Service 5"
                        },
                        new
                        {
                            Id = 6,
                            CategoryId = 2,
                            CityId = 6,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9370),
                            IsActive = false,
                            Name = "Travel Service 1"
                        },
                        new
                        {
                            Id = 7,
                            CategoryId = 2,
                            CityId = 7,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9372),
                            IsActive = false,
                            Name = "Travel Service 2"
                        },
                        new
                        {
                            Id = 8,
                            CategoryId = 2,
                            CityId = 8,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9373),
                            IsActive = false,
                            Name = "Travel Service 3"
                        },
                        new
                        {
                            Id = 9,
                            CategoryId = 2,
                            CityId = 9,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9374),
                            IsActive = false,
                            Name = "Travel Service 4"
                        },
                        new
                        {
                            Id = 10,
                            CategoryId = 2,
                            CityId = 10,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9375),
                            IsActive = false,
                            Name = "Travel Service 5"
                        },
                        new
                        {
                            Id = 11,
                            CategoryId = 3,
                            CityId = 11,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9391),
                            IsActive = false,
                            Name = "Transportation Service 1"
                        },
                        new
                        {
                            Id = 12,
                            CategoryId = 3,
                            CityId = 12,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9392),
                            IsActive = false,
                            Name = "Transportation Service 2"
                        },
                        new
                        {
                            Id = 13,
                            CategoryId = 3,
                            CityId = 13,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9393),
                            IsActive = false,
                            Name = "Transportation Service 3"
                        },
                        new
                        {
                            Id = 14,
                            CategoryId = 3,
                            CityId = 14,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9394),
                            IsActive = false,
                            Name = "Transportation Service 4"
                        },
                        new
                        {
                            Id = 15,
                            CategoryId = 3,
                            CityId = 15,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9395),
                            IsActive = false,
                            Name = "Transportation Service 5"
                        },
                        new
                        {
                            Id = 16,
                            CategoryId = 4,
                            CityId = 16,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9406),
                            IsActive = false,
                            Name = "Media Service 1"
                        },
                        new
                        {
                            Id = 17,
                            CategoryId = 4,
                            CityId = 17,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9407),
                            IsActive = false,
                            Name = "Media Service 2"
                        },
                        new
                        {
                            Id = 18,
                            CategoryId = 4,
                            CityId = 1,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9408),
                            IsActive = false,
                            Name = "Media Service 3"
                        },
                        new
                        {
                            Id = 19,
                            CategoryId = 4,
                            CityId = 2,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9408),
                            IsActive = false,
                            Name = "Media Service 4"
                        },
                        new
                        {
                            Id = 20,
                            CategoryId = 4,
                            CityId = 3,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9409),
                            IsActive = false,
                            Name = "Media Service 5"
                        },
                        new
                        {
                            Id = 21,
                            CategoryId = 5,
                            CityId = 4,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9420),
                            IsActive = false,
                            Name = "Entertainment Service 1"
                        },
                        new
                        {
                            Id = 22,
                            CategoryId = 5,
                            CityId = 5,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9421),
                            IsActive = false,
                            Name = "Entertainment Service 2"
                        },
                        new
                        {
                            Id = 23,
                            CategoryId = 5,
                            CityId = 6,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9422),
                            IsActive = false,
                            Name = "Entertainment Service 3"
                        },
                        new
                        {
                            Id = 24,
                            CategoryId = 5,
                            CityId = 7,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9423),
                            IsActive = false,
                            Name = "Entertainment Service 4"
                        },
                        new
                        {
                            Id = 25,
                            CategoryId = 5,
                            CityId = 8,
                            CreatedOn = new DateTime(2019, 9, 30, 9, 56, 8, 308, DateTimeKind.Local).AddTicks(9423),
                            IsActive = false,
                            Name = "Entertainment Service 5"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
