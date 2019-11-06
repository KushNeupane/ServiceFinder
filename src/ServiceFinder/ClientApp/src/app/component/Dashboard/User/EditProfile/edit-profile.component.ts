import { ToastrService } from "ngx-toastr";
import { AddserviceService } from "src/app/services/Dashboard/AddService/addservice.service";
import { NgForm } from "@angular/forms";
import { UserRegistrationModel } from "./../../../../models/user.registration.model";
import { Component, OnInit } from "@angular/core";
import { EditProfileModel } from "src/app/models/user.editProfile.model";
import { Router } from "@angular/router";
import { RequestOptions, Headers } from "@angular/http";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  imageUrl: string = "/assets/img/defaultimg.jpg";
  public options;
  editprofile = new EditProfileModel();
  fileToUpload: File = null;
  public selectedFiles = new FormData();
  public profileImage: string = null;
  updatePic: boolean = false;
  statusActive: boolean;

  constructor(
    private service: AddserviceService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.GetCurrentUser();
  }
  GetCurrentUser() {
    this.service.getCurrentUser().subscribe(res => {
      let result = <any>res;
      this.editprofile = result;
      this.profileImage =
        "../../../../../../../wwwroot/profilePic/" +
        this.editprofile.originalImageName;
    });
  }

  // onImageUpload(form: NgForm) {}
  // //Profile pic Upload
  // handleImageUpload(file: FileList) {
  //   if (this.profileImage) {
  //     this.profileImage = "";
  //     this.imageUrl = "";
  //     this.updatePic = true;
  //   }
  //   this.fileToUpload = file.item(0);
  //   //Show image preview
  //   var reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     this.imageUrl = event.target.result;
  //   };
  //   reader.readAsDataURL(this.fileToUpload);
  //   let headers = new Headers();
  //   headers.append("Accept", "application/json");
  //   this.options = new RequestOptions({ headers: headers });

  // }

  onProfileUpdate(form: NgForm) {
    // let values = JSON.stringify(form.value);+
    // localStorage.setItem("profileData", values);
    // this.profileData = localStorage.getItem("profileData");
    // this.selectedFiles.append("values", this.profileData);
    // this.selectedFiles.append("Image", this.fileToUpload);
    this.editprofile = form.value;
    this.editprofile.originalImageName =
      "../../../../../assets/img/defaultimg.jpg";
    this.statusActive = true;
  }

  changePassword() {
    this.router.navigate(["/dashboard/changePassword"]);
  }
  yes(form: NgForm) {
    this.service.updateUser(this.editprofile).subscribe(res => {
      let response = <any>res;
      if (!response.isSuccess) {
        this.toastr.error("Please Enter All Fields Correctly", "", {
          positionClass: "toast-top-center"
        });
      } else {
        form.reset();
        this.toastr.success("Updated successfully", "User Updated", {
          positionClass: "toast-top-center"
        });
        this.router
          .navigateByUrl("/", { skipLocationChange: true })
          .then(() => this.router.navigate(["/dashboard/userdetail"]));
      }
    });
  }

  //to destroy confirmation box
  destroyConfbox() {
    this.statusActive = false;
  }
}
