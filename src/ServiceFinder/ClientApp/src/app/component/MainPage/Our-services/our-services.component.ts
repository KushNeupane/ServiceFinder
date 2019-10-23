import { ViewService } from "./../../../models/user.viewService.model";
import { CategoryModel } from "./../../../models/user.category.model";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AddserviceService } from "src/app/services/Dashboard/AddService/addservice.service";

@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.scss"]
})
export class OurServicesComponent implements OnInit {
  public categoryList: any = [];
  public serviceList: ViewService[] = [];
  public idList: number[] = [];
  public catnames: string[] = [];
  public servicenames: string[] = [];
  public count: number;
  public showServices: boolean = false;
  public Count: number = 0;
  public loadMoreButton: boolean = true;

  constructor(private service: AddserviceService) {}

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.service.getCategoriesWithServiceCount(this.Count).subscribe(res => {
      let result = <any>res;
      this.categoryList = result.data;
    });
  }
  loadMore() {
    this.Count += 4;
    this.service.getCategoriesWithServiceCount(this.Count).subscribe(res => {
      let result = <any>res;
      for (let i = 0; i < result.data.length; i++) {
        this.categoryList.push(result.data[i]);
      }
      if (this.categoryList.length == result.data[0].totalCategory) {
        this.loadMoreButton = false;
      }
    });
  }
}
