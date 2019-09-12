import { FilterPipe } from './../../filter.pipe';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ViewService } from '../../models/user.viewService.model';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
import { AddServiceModel } from '../../models/user.addService.model';
import { CategoryModel } from 'src/app/models/user.category.model';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';
import { SearchModel } from 'src/app/models/user.search.model';
import { CityModel } from 'src/app/models/user.city.model';


@Component({
  selector: 'app-serviceList',
  templateUrl: './serviceList.component.html',
  styleUrls: ['./serviceList.component.scss'],
  providers: [FilterPipe]

})
export class ServiceListComponent implements OnInit {
  public filteredOptions: Observable<ViewService[]>;
  public searchList: any[];
  public searchTerm: string = null;
  myControl = new FormControl();
  public categoryList: CategoryModel[];
  provider: SearchModel = new SearchModel;
  private serviceList: ViewService[];
  public filterValue: string;
  public count: number;
  public categoryName: string = null;
  public arr: any[];
  cityList: CityModel[] = [];


  constructor(
    private service: AddserviceService,
    private route: ActivatedRoute,
    private searchPipe: FilterPipe,
    private router: Router
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    if (this.route.snapshot.queryParamMap.has('searchTerm')) {
      this.provider.searchTerm = this.route.snapshot.queryParamMap.get('searchTerm');
    }

    if (this.route.snapshot.queryParamMap.has('cityId')) {
      this.provider.cityId = JSON.parse(this.route.snapshot.queryParamMap.get('cityId'));
    }

    if (this.route.snapshot.queryParamMap.has('categoryId')) {
      this.provider.categoryId = JSON.parse(this.route.snapshot.queryParamMap.get('categoryId'));
    }

    if (this.route.snapshot.queryParamMap.has('loadMoreCount')) {
      this.provider.loadMoreCount = JSON.parse(this.route.snapshot.queryParamMap.get('loadMoreCount'));
    }


    this.loadFiltered(this.provider);
    this.getServiceNames();
    this.getCities();
    this.getCategory();
  }

  getCities() {
    this.service.getCities().subscribe(res => {
      let result = <any>res;
      this.cityList = result;
    })
  }

  getCategory() {

    this.service.GetCategories().subscribe(result => {
      this.categoryList = result;
      console.log(this.categoryList);
    })
  }
  getServiceNames() {
    this.service.GetServices().subscribe(res => {
      this.serviceList = res;
    })
  }

  loadMore() {
    this.provider.loadMoreCount += 5;
    let values = JSON.stringify(this.provider);

    this.service.getFilteredSearch(values).subscribe(res => {     
      let result = <any>res
      for (let i = 0; i < result.length; i++) {
        this.searchList.push(res[i]);
      }
    })
  }

  loadFiltered(searchValue) {
    if (searchValue.categoryId == undefined) {
      searchValue.categoryId = 0;
    }
    if (searchValue.cityId == undefined) {
      searchValue.cityId = 0;
    }
    let values = JSON.stringify(searchValue);
    this.service.getFilteredSearch(values).subscribe(res => {
      let result = <any>res;
      this.searchList = result;
      this.count = this.searchList.length;

      let navigationExtras: NavigationExtras = {
        queryParams: {
          "searchTerm": searchValue.searchTerm,
          "categoryId": searchValue.categoryId,
          "cityId": searchValue.cityId,
          "loadMoreCount": this.provider.loadMoreCount
        }
      };
      this.router.navigate(['serviceList'], navigationExtras);
    });
  }
}
