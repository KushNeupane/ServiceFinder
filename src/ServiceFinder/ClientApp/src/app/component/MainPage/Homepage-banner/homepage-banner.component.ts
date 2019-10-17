import { FilterPipe } from "./../../../filter.pipe";
import { ViewService } from "./../../../models/user.viewService.model";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone
} from "@angular/core";
import { AddserviceService } from "src/app/services/Dashboard/AddService/addservice.service";
import { FormsModule, NgForm, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import {
  RouterModule,
  NavigationExtras,
  ActivatedRoute
} from "@angular/router";
import { Router } from "@angular/router";
import { CategoryModel } from "src/app/models/user.category.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MapsAPILoader } from "@agm/core";
import { SearchModel } from "src/app/models/user.search.model";
import { AddServiceModel } from "src/app/models/user.addService.model";
import { CityModel } from "src/app/models/user.city.model";

@Component({
  selector: "app-homepage-banner",
  templateUrl: "./homepage-banner.component.html",
  styleUrls: ["./homepage-banner.component.scss"],
  providers: [AddserviceService, FilterPipe]
})
export class HomepageBannerComponent implements OnInit {
  servy: ViewService = new ViewService();
  public searchTerm: string = "";
  nameList: string[] = [];
  myControl = new FormControl();
  serviceList: ViewService[];
  public filteredOptions: Observable<ViewService[]>;
  public filterValue: string;
  filterServices: any[];
  provider: SearchModel = new SearchModel();
  public count: number;
  cityList: CityModel[] = [];
  public categoryList: CategoryModel[] = [];
  values: string;

  constructor(
    private service: AddserviceService,
    private route: Router,
    private searchPipe: FilterPipe,
    private httpClient: HttpClient,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getServiceNames();
    this.getCategory();
    this.getCities();
    if (this._route.snapshot.queryParamMap.has("searchTerm")) {
      this.searchTerm = this._route.snapshot.queryParamMap.get("searchTerm");
    }
  }

  getCities() {
    this.service.getCities().subscribe(res => {
      let result = <any>res;
      this.cityList = result.data;
    });
  }

  getServiceNames() {
    this.service.GetServices().subscribe(result => {
      this.serviceList = result;
    });
  }

  getCategory() {
    this.service.GetCategories().subscribe(res => {
      let result = <any>res;
      this.categoryList = result.data;
    });
  }

  searchList(form: NgForm) {
    if (form.value.categoryId == undefined) {
      form.value.categoryId = 0;
    }
    if (form.value.cityId == undefined) {
      form.value.cityId = 0;
    }
    this.provider = form.value;
    this.provider.loadMoreCount = 0;
    this.values = JSON.stringify(this.provider);
    this.service.getFilteredSearch(this.values).subscribe(res => {
      let result = <any>res;
      this.filterServices = result;
      this.count = this.filterServices.length;

      let navigationExtras: NavigationExtras = {
        queryParams: {
          searchTerm: this.provider.searchTerm,
          categoryId: this.provider.categoryId,
          cityId: this.provider.cityId,
          loadMoreCount: this.provider.loadMoreCount
        }
      };
      this.route.navigate(["serviceList"], navigationExtras);
    });
  }
}
