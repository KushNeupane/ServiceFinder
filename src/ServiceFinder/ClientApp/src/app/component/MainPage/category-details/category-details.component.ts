import { Component, OnInit } from "@angular/core";
import { AddserviceService } from "src/app/services/Dashboard/AddService/addservice.service";
import { ViewService } from "src/app/models/user.viewService.model";
import { ActivatedRoute } from "@angular/router";
import { SearchModel } from "src/app/models/user.search.model";
import { debugOutputAstAsTypeScript } from "@angular/compiler";

@Component({
  selector: "app-category-details",
  templateUrl: "./category-details.component.html",
  styleUrls: ["./category-details.component.scss"]
})
export class CategoryDetailsComponent implements OnInit {
  public arr: any[];
  public serviceList: ViewService[] = [];
  public categoryId: number;
  public categoryName: string;
  public loadmore: number = 0;
  public loadMoreButton: boolean = true;
  provider: SearchModel = new SearchModel();

  constructor(
    private service: AddserviceService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    this.categoryId = routeParams.categoryId;
    this.servicesUnderCategory();
    window.scrollTo(0, 0);
  }

  loadMore() {
    this.provider.loadMoreCount += 5;
    this.provider.categoryId = this.categoryId;
    let value = JSON.stringify(this.provider);
    this.service.GetServicesByCategoryId(value).subscribe(res => {
      let result = <any>res;
      for (let i = 0; i < result.data.length; i++) {
        this.serviceList.push(result.data[i]);
      }
      if (this.serviceList.length == result.data[0].totalCount) {
        this.loadMoreButton = false;
      }
    });
  }

  servicesUnderCategory() {
    this.provider.categoryId = this.categoryId;
    this.provider.loadMoreCount = this.loadmore;
    let value = JSON.stringify(this.provider);
    this.service.GetServicesByCategoryId(value).subscribe(res => {
      debugger;
      let result = <any>res;
      this.categoryName = result.data[0].categoryName;
      this.serviceList = result.data;
      if (this.serviceList.length == result.data[0].totalCount) {
        this.loadMoreButton = false;
      }
    });
  }
}
