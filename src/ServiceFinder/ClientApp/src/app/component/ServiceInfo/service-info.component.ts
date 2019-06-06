import { ViewImages } from './../../models/user.viewImage.model';
import { ViewService } from './../../models/user.viewService.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestOptions, Headers } from '@angular/http';
import { NgbModal, NgbRatingConfig, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceReviewModel } from 'src/app/models/user.serviceReview.model';


@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss'],
  providers: [
    NgbModal,
    NgbRatingConfig,
    NgbModalConfig
  ]
})
export class ServiceInfoComponent implements OnInit {

  public serviceId: number;
  path: string;
  public serviceReview = new ServiceReviewModel();
  public serviceDetail = new ViewService();
  public imageList: ViewImages[] = [];
  public reviewList: ServiceReviewModel[] = [];
  ProfileimageUrl: string = "../../../assets/img/default-service-image.png"
  CoverimageUrl: string = "../../../assets/img/default-cover.gif"
  avgRating: number[] = [];
  averageRating: number = 0;

  showButton: boolean = false;
  updatePic: boolean = false;
  updateCoverPic: boolean = false;

  showCoverButton: boolean = false;


  public selectedProfileImage = new FormData();
  public selectedCoverImage = new FormData();

  public options
  public profileImage: string;
  public CoverImage: string;
  ProfileToUpload: File = null;
  CoverToUpload: File = null;

  constructor(private service: AddserviceService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
    private toastr: ToastrService,
    config: NgbRatingConfig,
    modal: NgbModalConfig) {

    config.max = 5;
    modal.backdrop = 'static';
    modal.keyboard = false;
  }


  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    this.serviceId = routeParams !== null ? Number(routeParams.serviceId) : 0;
    this.getServiceDetail();
    this.getReviewByService();
  }

  getServiceDetail() {
    if (this.serviceId > 0) {
      this.service.GetServiceByServiceItemId(this.serviceId).subscribe(res => {
        this.serviceDetail = res;
        this.profileImage = this.serviceDetail.originalProfileImageName;
        this.CoverImage = this.serviceDetail.originalCoverImageName;
        if (this.CoverImage == null) {
          this.CoverimageUrl = "../../../assets/img/default-cover.gif";
        }
        else {
          this.CoverimageUrl = "../../../../../wwwroot/ServiceCoverPicture/" + this.CoverImage;
        }

        this.service.GetImages(this.serviceId).subscribe(result => {
          this.imageList = result;
          console.log(this.imageList)
        })
      })
    }
  }

  //Service Profile image upload
  serviceProfileUpload(file: FileList) {
    if (this.profileImage) {
      this.updatePic = true;
      this.profileImage = null;
      this.ProfileimageUrl = null;

    }
    this.ProfileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ProfileimageUrl = event.target.result;
      this.showButton = true;
    }
    reader.readAsDataURL(this.ProfileToUpload)
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: headers });
  }

  //Uploading profile Picture to Database Function
  uploadServiceProfileImage(form: NgForm) {
    this.selectedProfileImage.set("image", '');
    this.selectedProfileImage.append('image', this.ProfileToUpload);
    this.selectedProfileImage.append('profile', "profile");
    this.selectedProfileImage.append('cover', "notCover");
    this.service.editService(this.serviceId, this.selectedProfileImage, this.options).subscribe(res => {
      this.toastr.success("Your Service Main Picture is updated", "", { positionClass: 'toast-bottom-right' });
      this.selectedProfileImage.delete("profile")
      this.selectedProfileImage.delete("cover")
      form.reset();
    });
  }

  //Service Cover Image Upload
  serviceCoverUpload(file: FileList) {
    if (this.CoverImage) {
      this.updateCoverPic = true;
      this.CoverImage = null;
      this.CoverimageUrl = null;
    }
    this.CoverToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.CoverimageUrl = event.target.result;
      this.showCoverButton = true;
    }
    reader.readAsDataURL(this.CoverToUpload)
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: headers });
  }

  //for uploading cover phot to database
  uploadServiceCoverImage(form: NgForm) {
    this.selectedCoverImage.set("image", '');
    this.selectedCoverImage.append('image', this.CoverToUpload);
    this.selectedCoverImage.append('cover', "cover");
    this.selectedCoverImage.append('profile', "notProfile");
    this.service.editService(this.serviceId, this.selectedCoverImage, this.options).subscribe(res => {
      this.toastr.success("Your Service Cover Picture is updated", "", { positionClass: 'toast-bottom-right' });
      this.selectedCoverImage.delete("cover");
      this.selectedCoverImage.delete("profile");
      form.reset();
    });
  }
  open(content) {
    this.modalService.open(content);
  }

  onRating(form: NgForm) {

    if (form.value) {
      this.serviceReview = new ServiceReviewModel();
      this.serviceReview.overAllReview = form.value.overAllReview;
      this.serviceReview.reviewTest = form.value.reviewTest;
      this.serviceReview.serviceItemId = this.serviceId;
    }
    this.service.addReview(this.serviceReview).subscribe(res => {
      let response = <any>res;
      if (!response.isSuccess) {
        form.reset();
        response.errors.forEach(error => {
          this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
        });
      }
      else {
        form.reset();
        this.toastr.success("Review Submitted !!", "", { positionClass: 'toast-top-center' });
      }

      this.getReviewByService();
    })

  }

  getReviewByService() {
    this.service.getReviewByServiceId(this.serviceId).subscribe(res => {
      this.reviewList = res;
      if(this.reviewList.length==0){
        this.averageRating=0;
      }
      else{
        for (let review of this.reviewList) {
        this.avgRating.push(review.overAllReview);
      }
      for (let avg of this.avgRating) {
        this.averageRating += avg;
      }
      this.averageRating = parseFloat((this.averageRating / this.reviewList.length).toFixed(2));
   
      }
    })
  }
}
