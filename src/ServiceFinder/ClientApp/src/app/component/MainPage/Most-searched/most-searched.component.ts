import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ViewService } from 'src/app/models/user.viewService.model';

@Component({
  selector: 'app-most-searched',
  templateUrl: './most-searched.component.html',
  styleUrls: ['./most-searched.component.scss']
})
export class MostSearchedComponent implements OnInit {
  public serviceList : ViewService[];
  constructor(private service : AddserviceService) { 

  }
  
  ngOnInit() {
    this.getServices();
  }
  getServices(){
    this.service.GetServices().subscribe(result=>{
      this.serviceList=result;
    })
  }

}
