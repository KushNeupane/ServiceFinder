import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ServiceReviewModel } from 'src/app/models/user.serviceReview.model';
import { NgbModalConfig, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myReviews',
  templateUrl: './myReviews.component.html',
  styleUrls: ['./myReviews.component.scss']
})
export class MyReviewsComponent implements OnInit {

  reviewList: ServiceReviewModel[] = [];
  serviceName : string;

  constructor(
    private service : AddserviceService,
    private config: NgbRatingConfig,
    private modal: NgbModalConfig
  ) {
    this.config.max = 5;
    this.config.readonly = true;
    this.modal.backdrop = 'static';
    this.modal.keyboard = false;
   }

  ngOnInit() {
    this.getMyReviews();
  }

  getMyReviews(){
    this.service.getMyReviews().subscribe(res=>{
      let result = <any>res;
      this.reviewList=result;
    
    })
  }
}
