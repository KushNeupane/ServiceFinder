
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { CategoryModel } from 'src/app/models/user.category.model';
import { RequestOptions, Headers } from '@angular/http';
import { AddServiceModel } from 'src/app/models/user.addService.model';
import { ViewImages } from 'src/app/models/user.viewImage.model';




@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.scss']
})
export class AddServicesComponent implements OnInit {

  statusActive: boolean = false;
  catty: CategoryModel = new CategoryModel;
  public numberVisibility: boolean = true;
  provider: AddServiceModel = new AddServiceModel;
  public categoryList: CategoryModel[];
  show: boolean = false;
  imagePreview: string[] = [];
  myFiles: any[] = [];
  public selectedFiles = new FormData();
  public options
  public serviceData: string;
  imgnameList: string[] = [];
  public id;
  public title: string;
  public arr: any[] = [];
  public remaining: any[] = [];
  public editpPopUP: boolean = false;

  //image Editing variables, and values
  imageEdit: boolean;
  public imageList: ViewImages[] = [];
  public imageId;

  constructor(private toastr: ToastrService,
    private service: AddserviceService,
    private _route: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.arr = null;
    this.selectedFiles.delete('gallery');
    this._route.paramMap.subscribe(parameterMap => {
      this.id = +parameterMap.get('id');
    })

    this.getCategory();
    //to get service id via query parameter    
    // const routeParams = this._route.snapshot.params;
    // this.id = routeParams.id;
    this.getService(this.id);


  }

  getCategory() {
    this.service.GetCategories().subscribe(result => {
      this.categoryList = result;
      console.log(this.categoryList);
    })
  }


  //when upload image button is clicked
  onFileUpload(event: any) {
    this.show = false;
    this.myFiles = event.target.files;
    this.arr = Array.from(this.myFiles);
    this.arr = this.arr.concat(this.remaining);
    this.remaining = this.arr;
    console.log(this.arr);
    console.log(this.selectedFiles);

    if (this.myFiles) {
      for (let file of this.myFiles) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.show = true;
          this.imagePreview.push(e.target.result);
          this.imgnameList.push('File name : ' + file.name + "(" + file.size / 1000 + " kb)");
        }
        reader.readAsDataURL(file);
      }
    }
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    //DON'T SET THE Content-Type to multipart/form-data, You'llget the Missing content-type boundary error
    this.options = new RequestOptions({ headers: headers });
  }

  removeImage(j: number) {
    console.log(this.arr);
    this.arr.splice(j, 1);
    this.remaining = this.arr;

    console.log(this.remaining)
    let tempImage;
    let tempName;
    let tempUpload;
    for (j; j < this.imagePreview.length - 1; j++) {
      if (this.imagePreview[j] == this.imagePreview[length - 1]) {
        this.imagePreview.pop();
        this.imgnameList.pop();
      }
      else {
        //delete image preview
        tempImage = this.imagePreview[j + 1];
        this.imagePreview[j + 1] = this.imagePreview[j];
        this.imagePreview[j] = tempImage;

        //delete image name
        tempName = this.imgnameList[j + 1];
        this.imgnameList[j + 1] = this.imgnameList[j];
        this.imgnameList[j] = tempName;

      }
    }

    this.imagePreview.pop();
    this.imgnameList.pop();
    // this.selectedFiles.nativeElement.value = null;
    console.log(this.imagePreview);
    console.log(this.imgnameList);
    console.log(this.arr);
  }


  //when add button is clicked

  onSignUp(form: NgForm) {
    if (form.value.name == null || form.value.description == null || form.value.status == null) {
      this.toastr.error("Please fill up all the fields", "", { positionClass: 'toast-top-center' });
    }
    if (this.arr !== null) {
      for (let i = 0; i < this.arr.length; i++) {
        this.selectedFiles.append('gallery', this.arr[i]);
        console.log(this.arr[i]);
      }
    }
    let values = JSON.stringify(form.value);
    localStorage.setItem('ServiceData', values);
    this.serviceData = localStorage.getItem('ServiceData');
    this.selectedFiles.append('values', this.serviceData);
    if (this.id == 0) {
      this.service.AddService(this.selectedFiles, this.options).subscribe(res => {
        this.show = false;
        this.toastr.success("Your Service is added", "", { positionClass: 'toast-bottom-right' });
        form.reset();
        this.route.navigate(['dashboard/myservices']);
      })
    }
    else {
      //to call popup
      this.statusActive = true;
    }

  }


  //Editing the services. Binding the retrieved items to provider
  getService(id: number) {
    if (id == 0) {
      this.imageEdit = false;
      this.provider = {
        categoryId: null,
        name: null,
        description: null,
        userTypeId: null,
        email: null,
        phoneNumber: null,
        workingShift: null,
        status: null,
        createdOn: null,
        isDeleted: null
      }
    }
    else {
      //to show image retrieved from database to carry out edit operation
      this.imageEdit = true;
      this.service.GetServiceByServiceItemId(id).subscribe(res => {
        this.provider = res;
        this.service.GetImages(this.id).subscribe(result => {
          this.imageList = result;
        })
      })
    }
  }
  deleteImage(id: number) {
    this.service.deleteImageById(id).subscribe(res => {
      this.toastr.success("image deleted successfully", "", { positionClass: 'toast-bottom-right' });
      this.getService(this.id);
    })
  }
  destroyConfbox() {
    this.statusActive = false;
  }

  yes(form: NgForm) {
    this.selectedFiles.set("gallery", '');
    this.selectedFiles.delete("values");
    if (this.arr !== null) {
      for (let i = 0; i < this.arr.length; i++) {
        this.selectedFiles.append('gallery', this.arr[i]);
        console.log(this.arr[i]);
      }
    }
    this.selectedFiles.append('values', JSON.stringify(form.value));
    this.service.editService(this.id, this.selectedFiles, this.options).subscribe(res => {
      this.toastr.success("Your Service is updated", "", { positionClass: 'toast-bottom-right' });
      form.reset();
      this.route.navigate(['dashboard/myservices']);
    });
    this.statusActive = false;
  }
}
