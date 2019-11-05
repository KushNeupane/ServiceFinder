import { EditProfileModel } from "src/app/models/user.editProfile.model";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { AddserviceService } from "src/app/services/Dashboard/AddService/addservice.service";
import { ViewService } from "src/app/models/user.viewService.model";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  MyServiceList: ViewService[] = [];
  users: EditProfileModel = new EditProfileModel();
  statusActive: boolean = false;
  public profileImage: string;
  ProfileImageURL: string;

  constructor(
    private service: AddserviceService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.service.getCurrentUser().subscribe(result => {
      this.users = result;
      this.profileImage = this.users.originalImageName;
      if (this.profileImage == null) {
        this.ProfileImageURL = "../../../../assets/img/defaultimg.jpg";
      } else {
        this.ProfileImageURL =
          "../../../../../../wwwroot/profilePic/" + this.profileImage;
      }
    });
    this.getServices();
  }

  getServices() {
    this.service.GetServicesByUserId().subscribe(res => {
      let result = <any>res;
      this.MyServiceList = result.data;
    });
  }

  delete() {
    this.statusActive = true;
  }

  // delete(id: number) {
  //   this.service.deleteService(id).subscribe(result => {
  //     this.getServices();
  //     this.toastr.success("Deleted Successfully");
  //   });
  // }
  edit(id: number) {
    let title: NavigationExtras = {
      queryParams: {
        title: "Edit Service"
      }
    };
    this.route.navigate(["dashboard/edit", id], title);
  }
  yes(id: number) {
    this.service.deleteService(id).subscribe(result => {
      this.getServices();
      this.toastr.success("Deleted Successfully", "", {
        positionClass: "toast-top-center"
      });
    });
    this.statusActive = false;
  }
  destroyConfbox() {
    this.statusActive = false;
  }
}
