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
  public categoryList: CategoryModel[] = [];
  public serviceList: ViewService[] = [];
  public idList: number[] = [];
  public catnames: string[] = [];
  public servicenames: string[] = [];
  public count: number;
  public showServices: boolean = false;

  constructor(private service: AddserviceService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.service.GetCategories().subscribe(res => {
      
      this.categoryList = res;
      
      
    //   console.log(this.categoryList);
    //  for (let category of this.categoryList) {
    //    this.idList.push(category.id);
    //    console.log(this.idList);
    //  }
    //   for (let id of this.idList) {
    //     this.service.GetServicesByCategoryId(id).subscribe(result => {
         
          
    //       for (let i = 0; i < result.length; i++) {
    //         this.count = result.length;
    //         if (result[i]) {
    //           this.serviceList.push(result[i]);
    //           console.log(result[i]);
    //         }
    //       }
    //     })
    //   }
    })
  }
}
