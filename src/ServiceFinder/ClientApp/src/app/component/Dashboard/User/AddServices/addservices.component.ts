import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { Component, OnInit } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AddserviceService } from "src/app/services/Dashboard/AddService/addservice.service";
import { CategoryModel } from "src/app/models/user.category.model";
import { RequestOptions, Headers } from "@angular/http";
import { AddServiceModel } from "src/app/models/user.addService.model";
import { ViewImages } from "src/app/models/user.viewImage.model";
import { ViewServiceById } from "src/app/models/user.ViewServiceById.model";
import { CityModel } from "src/app/models/user.city.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-addservices",
  templateUrl: "./addservices.component.html",
  styleUrls: ["./addservices.component.scss"]
})
export class AddServicesComponent implements OnInit {
  statusActive: boolean = false;
  catty: CategoryModel = new CategoryModel();
  public numberVisibility: boolean = true;
  public categoryList: CategoryModel[];
  show: boolean = false;
  imagePreview: string[] = [];
  myFiles: any[] = [];
  serviceFile: AddServiceModel = new AddServiceModel();
  public options;
  imgnameList: string[] = [];
  public id;
  public title: string;
  public remaining: any[] = [];
  public editpPopUP: boolean = false;
  cityList: CityModel[] = [];

  //image Editing variables, and values
  imageEdit: boolean;
  public imageList: ViewImages[] = [];
  public imageId;

  constructor(
    private toastr: ToastrService,
    private service: AddserviceService,
    private _route: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      this.id = +parameterMap.get("id");
    });

    this.getCategory();
    this.getCities();
    //to get service id via query parameter
    // const routeParams = this._route.snapshot.params;
    // this.id = routeParams.id;
    this.getService(this.id);
  }

  getCategory() {
    this.service.GetCategories().subscribe(res => {
      let result = <any>res;
      this.categoryList = result.data;
    });
  }

  getCities() {
    this.service.getCities().subscribe(res => {
      let result = <any>res;
      this.cityList = result.data;
    });
  }

  // onFileUpload(event: any) {
  //   this.show = false;
  //   this.myFiles = event.target.files;
  //   this.arr = Array.from(this.myFiles);
  //   this.arr = this.arr.concat(this.remaining);
  //   this.remaining = this.arr;
  //   console.log(this.arr);
  //   console.log(this.selectedFiles);

  //   if (this.myFiles) {
  //     for (let file of this.myFiles) {
  //       let reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         this.show = true;
  //         this.imagePreview.push(e.target.result);
  //         this.imgnameList.push(
  //           "File name : " + file.name + "(" + file.size / 1000 + " kb)"
  //         );
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   }
  //   let headers = new Headers();
  //   headers.append("Accept", "application/json");
  //   this.options = new RequestOptions({ headers: headers });
  // }

  // removeImage(j: number) {
  //   console.log(this.arr);
  //   this.arr.splice(j, 1);
  //   this.remaining = this.arr;

  //   console.log(this.remaining);
  //   let tempImage;
  //   let tempName;
  //   let tempUpload;
  //   for (j; j < this.imagePreview.length - 1; j++) {
  //     if (this.imagePreview[j] == this.imagePreview[length - 1]) {
  //       this.imagePreview.pop();
  //       this.imgnameList.pop();
  //     } else {
  //       //delete image preview
  //       tempImage = this.imagePreview[j + 1];
  //       this.imagePreview[j + 1] = this.imagePreview[j];
  //       this.imagePreview[j] = tempImage;

  //       //delete image name
  //       tempName = this.imgnameList[j + 1];
  //       this.imgnameList[j + 1] = this.imgnameList[j];
  //       this.imgnameList[j] = tempName;
  //     }
  //   }

  //   this.imagePreview.pop();
  //   this.imgnameList.pop();
  //   // this.selectedFiles.nativeElement.value = null;
  //   console.log(this.imagePreview);
  //   console.log(this.imgnameList);
  //   console.log(this.arr);
  // }

  //when add button is clicked

  onSignUp(form: NgForm) {
    if (form.value.name == null || form.value.description == null) {
      this.toastr.error("Please fill up all the fields", "", {
        positionClass: "toast-top-center"
      });
    }
    this.serviceFile.name = form.value.name;
    this.serviceFile.categoryId = form.value.categoryId;
    this.serviceFile.cityId = form.value.cityId;
    this.serviceFile.phoneNumber = form.value.phoneNumber;
    this.serviceFile.email = form.value.email;
    this.serviceFile.webLink = form.value.webLink;
    this.serviceFile.mapLink = form.value.mapLink;
    this.serviceFile.imageURL = "C:\\Users\\User\\Downloads\\gallery";

    if (this.id == 0) {
      this.service.AddService(this.serviceFile).subscribe(res => {
        this.show = false;
        this.toastr.success("Your Service is added", "", {
          positionClass: "toast-bottom-right"
        });
        form.reset();
        this.route.navigate(["dashboard/myservices"]);
      });
    } else {
      //to call popup
      this.statusActive = true;
    }
  }

  //Editing the services. Binding the retrieved items to provider
  getService(id: number) {
    if (id == 0) {
      this.serviceFile = {
        userId: null,
        additionalEmail: null,
        additionalPhoneNumber: null,
        categoryId: 0,
        cityId: 0,
        companyName: null,
        coverImageUrl: null,
        description: null,
        email: null,
        imageURL: null,
        mapLink: null,
        name: null,
        webLink: null,
        originalCoverImageName: null,
        originalProfileImageName: null,
        phoneNumber: null,
        profileImageUrl: null
      };
    } else {
      //to show image retrieved from database to carry out edit operation
      this.imageEdit = true;
      this.service.GetServiceByServiceItemId(id).subscribe(res => {
        let result = <any>res;
        this.serviceFile = result.data;
        // this.service.GetImages(this.id).subscribe(result => {
        //   this.imageList = result;
        // });
      });
    }
  }
  deleteImage(id: number) {
    this.service.deleteImageById(id).subscribe(res => {
      this.toastr.success("image deleted successfully", "", {
        positionClass: "toast-bottom-right"
      });
      this.getService(this.id);
    });
  }
  destroyConfbox() {
    this.statusActive = false;
  }

  yes(form: NgForm) {
    this.service.editService(this.id, this.serviceFile).subscribe(res => {
      this.toastr.success("Your Service is updated", "", {
        positionClass: "toast-bottom-right"
      });
      form.reset();
      this.route.navigate(["dashboard/myservices"]);
    });
    this.statusActive = false;
  }
}
