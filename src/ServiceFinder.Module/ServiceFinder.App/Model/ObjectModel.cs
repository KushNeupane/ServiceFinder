﻿using ServiceFinder.DI.Model.App;
using ServiceFinder.Users.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServiceFinder.Main.Model
{
    public class ObjectModel : IObjectViewModel
    {
        [Key]
        public int Id { get; set; }
        public string UserId { get; set; }
        public int CityId { get; set; }
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public string WebLink { get; set; }
        public string MapLink { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string AdditionalEmail { get; set; }
        public string AdditionalPhoneNumber { get; set; }
        public TimeSpan? ServiceOpenTime { get; set; }
        public TimeSpan? ServiceCloseTime { get; set; }
        public bool Status { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
        public string ProfileImageUrl { get; set; }
        public string OriginalProfileImageName { get; set; }
        public string CoverImageUrl { get; set; }
        public string OriginalCoverImageName { get; set; }
        public bool IsActive { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
