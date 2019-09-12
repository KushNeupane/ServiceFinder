import { ViewService } from './../../../models/user.viewService.model';
import { CategoryModel } from './../../../models/user.category.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  public categoryList: any = [];
  public serviceList: ViewService[] = [];
  public idList: number[] = [];
  public catnames: string[] = [];
  public servicenames: string[] = [];
  public count: number;
  public showServices: boolean = false;
  public loadMoreCount: number = 0;

  constructor(private service: AddserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {

    this.service.getCategoriesWithServiceCount(this.loadMoreCount).subscribe(res => {   
      this.categoryList = res;

    })
  }
  loadMore() {
    this.loadMoreCount += 4;
    this.service.getCategoriesWithServiceCount(this.loadMoreCount).subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.categoryList.push(res[i])
      }
    })
  }
}