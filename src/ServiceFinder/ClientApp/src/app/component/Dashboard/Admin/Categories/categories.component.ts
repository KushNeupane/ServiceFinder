import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/user.category.model';

import { AdminService } from 'src/app/services/Dashboard/Admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  imageUrl: string = "/assets/img/defaultimg.jpg";
  fileToUpload: File = null;
  public categoryList: CategoryModel[] = [];
  public statusActive: boolean = false;
  public showList: boolean = true;
  public changeButton: boolean = false;

  public selectedFiles = new FormData();
  public profileData: string;
  public profileImage: string = null;
  updatePic: boolean = false;
  public options
  updateCategory: boolean = false;
  deleteId: number
  editId: number;


  categoryModel= new CategoryModel();


  constructor(private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getCategory()
  }

  delete(id: number) {
    this.deleteId = id;
    this.statusActive = true;
  }

  edit(id: number) {
    this.adminService.GetCategoryById(id).subscribe(res=>{
       ;
      this.categoryModel = null;
      let result = <any>res;
      this.categoryModel = result.data;
      this.showList = false;
      this.changeButton = true;
      this.updateCategory = true;
      
    })
  }

  destroyConfbox() {
    this.statusActive = false;
  }

 

  getCategory() {
    this.adminService.GetCategories().subscribe(res => {
      this.categoryList = res;
    })
  }

  addcategory() {
    this.showList = false;
    this.changeButton = true;

  }
  backToList() {
    this.changeButton = false;
    this.showList = true;
  }

  handleImageUpload(file: FileList) {
    if (this.profileImage) {
      this.profileImage = "";
      this.imageUrl = "";
      this.updatePic = true;
    }
    this.fileToUpload = file.item(0);
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload)
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: headers });
  }


  postCategory(form: NgForm) {
     ;
    let values = JSON.stringify(form.value);
    localStorage.setItem('profileData', values)
    this.profileData = localStorage.getItem('profileData')
    this.selectedFiles.append('values', this.profileData);
    this.selectedFiles.append('Image', this.fileToUpload);
    this.adminService.AddCategory(this.selectedFiles, this.options).subscribe(res => {
      let result = <any>res;
      if (result.isSuccess) {
        this.categoryList.unshift(result.data);
        form.reset();
        this.selectedFiles = null;
        this.toastr.success("Category Added successfully")
      }
    })
  }

  updateCatgory(form: NgForm){
     ;
    let values = JSON.stringify(form.value);
    localStorage.setItem('profileData', values)
    this.profileData = localStorage.getItem('profileData')
    this.selectedFiles.append('values', this.profileData);
    this.selectedFiles.append('Image', this.fileToUpload);
    this.adminService.AddCategory(this.selectedFiles, this.options).subscribe(res => {
      let result = <any>res;
      if (result.isSuccess) {
        this.categoryList.unshift(result.data);
        this.selectedFiles = null;
        form.reset();
        this.toastr.success("Category Updated successfully")
      }
    })
  }

  yes() {
    this.categoryModel.id = this.deleteId;
    this.categoryModel.status = false;
     ;
    this.adminService.DeleteCategory(this.categoryModel).subscribe(result => {
      this.getCategory();
      this.toastr.success("Deleted Successfully");
    });
    this.statusActive = false;
  }
}
