import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ViewService } from 'src/app/models/user.viewService.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  public arr: any[];
  public serviceList: ViewService[] = [];
  public categoryId: number;
  constructor(private service: AddserviceService,
    private activeRoute: ActivatedRoute, ) { }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    this.categoryId = routeParams.categoryId;
    this.servicesUnderCategory();
    window.scrollTo(0, 0)


  }
  servicesUnderCategory() {
    this.service.GetServicesByCategoryId(this.categoryId).subscribe(res => {
      this.serviceList = res;
    })

  }
}
