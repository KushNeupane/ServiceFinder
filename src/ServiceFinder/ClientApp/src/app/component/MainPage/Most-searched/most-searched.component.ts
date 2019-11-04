import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ViewService } from 'src/app/models/user.viewService.model';
import { TotalVisitedServices } from 'src/app/models/user.TotalVisitedServices.model';

@Component({
  selector: 'app-most-searched',
  templateUrl: './most-searched.component.html',
  styleUrls: ['./most-searched.component.scss']
})
export class MostSearchedComponent implements OnInit {
  public arr: any[];
 
 
  constructor(private service: AddserviceService) {
  }

  ngOnInit() {
    this.getServices();
  }
  getServices() {
    
    this.service.getTotalViewCount().subscribe(res => {
     this.arr = res;

    })
  }
}
