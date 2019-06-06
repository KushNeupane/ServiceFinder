import { FilterPipe } from './../../../filter.pipe';
import { ViewService } from './../../../models/user.viewService.model';
import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { RouterModule, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/user.category.model';


@Component({
  selector: 'app-homepage-banner',
  templateUrl: './homepage-banner.component.html',
  styleUrls: ['./homepage-banner.component.scss'],
  providers: [AddserviceService,FilterPipe]      

})
export class HomepageBannerComponent implements OnInit {
  servy: ViewService = new ViewService;
  public searchTerm: string;
  nameList: string[] = [];
  myControl = new FormControl();
  private serviceList: ViewService[];
  public filteredOptions: Observable<ViewService[]>;
  public filterValue: string;
  public searchedList: ViewService[];

  constructor(
    private service: AddserviceService,
    private route: Router,
    private searchPipe: FilterPipe
  ) { }

  ngOnInit() {
    this.getServiceNames();
  }


  getServiceNames() {
    this.service.GetServices().subscribe(result => {
      this.serviceList = result;
      console.log(this.serviceList);

    })
  }

  searchList() {
    this.searchedList = this.searchPipe.transform(this.serviceList, this.searchTerm);
    localStorage.setItem('searchedList', JSON.stringify(this.searchedList));
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "searchTerm": this.searchTerm
      }
    };
    this.route.navigate(['serviceList'], navigationExtras);
  }
}
