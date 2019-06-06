import { FilterPipe } from './../../filter.pipe';
import { ActivatedRoute, NavigationExtras,Router } from '@angular/router';
import { ViewService } from '../../models/user.viewService.model';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
import { AddServiceModel } from '../../models/user.addService.model';
import { CategoryModel } from 'src/app/models/user.category.model';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';



@Component({
  selector: 'app-serviceList',
  templateUrl: './serviceList.component.html',
  styleUrls: ['./serviceList.component.scss'],
  providers: [FilterPipe]

})
export class ServiceListComponent implements OnInit {
  public filteredOptions: Observable<ViewService[]>;
  public searchedList: ViewService[];
  public searchTerm: string = null;
  myControl = new FormControl();
  public categoryList: CategoryModel[];
  provider: AddServiceModel = new AddServiceModel;
  private serviceList: ViewService[];
  public filterValue: string;
  public count: number;
  public categoryName: string = null;

  constructor(
    private service: AddserviceService,
    private route: ActivatedRoute,
    private searchPipe: FilterPipe,
    private router : Router
  ) { }

  @ViewChild(MatPaginator) paginator : MatPaginator;
  ngOnInit() {
    if (this.route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this.route.snapshot.queryParamMap.get('searchTerm');
    }
    this.searchedList = JSON.parse(localStorage.getItem('searchedList'));
    
    this.getCategory();
    this.getServiceNames();
  }

  getCategory() {

    this.service.GetCategories().subscribe(result => {
      this.categoryList = result;
      console.log(this.categoryList);
    })
  }
  getServiceNames() {
    this.service.GetServices().subscribe(result => {
      this.serviceList = result;
      console.log(this.serviceList);
    })
  }

  
  onClick(searchTerm: any) {
    this.getServiceNames();
    this.searchedList = [];

    //Search if only searchTerm available and if both category and searchTearm available
    if (searchTerm) {
      this.searchTerm= this.searchPipe.whitespace(searchTerm);
      this.serviceList = this.searchPipe.transform(this.serviceList, this.searchTerm);

      //arranging services according to category
      if(this.provider.categoryId){
      this.serviceList.forEach(service => {
        if(service.categoryId==this.provider.categoryId){
          this.searchedList.push(service);
        }      
      });
    }
    else{
      this.searchedList=this.serviceList;
    }
    }

    //Search only if categoryID is available. Search according to category only
    else{
      if(this.provider.categoryId){
        this.serviceList.forEach(service => {
          if(service.categoryId==this.provider.categoryId){
            this.searchedList.push(service);
          }      
        });
      }
      else{
          this.searchedList = null;
          this.count=0;
      }
    }
    this.count=this.searchedList.length
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "searchTerm": this.searchTerm,
        "categoryId": this.provider.categoryId

      }
    };
    this.router.navigate(['serviceList'], navigationExtras);
  }

}


