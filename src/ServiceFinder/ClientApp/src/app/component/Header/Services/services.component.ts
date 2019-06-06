import { ViewService } from './../../../models/user.viewService.model';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public serviceList : ViewService[];

  constructor(private service : AddserviceService) { }

  ngOnInit() {
   
    this.getServices();
  }

getServices(){
  debugger;
  this.service.GetServices().subscribe(result=>{
    this.serviceList=result;
    console.log(this.serviceList);
  })
}
}
