import { Component, OnInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ViewService } from 'src/app/models/user.viewService.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-providerservice',
  templateUrl: './ProviderService.component.html',
  styleUrls: ['./ProviderService.component.scss']
})
export class ProviderServiceComponent implements OnInit {
  public MyServiceList: ViewService[];
  private title: string;
  public statusActive : boolean = false;
  
  constructor(
    private service: AddserviceService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.service.GetServicesByUserId().subscribe(res => {
      this.MyServiceList = res;
    })
  }

  delete(){
    this.statusActive = true;
  }

  edit(id: number) {
    let title: NavigationExtras = {
      queryParams: {
        "title": 'Edit Service'
      }
    };

    this.router.navigate(['dashboard/edit',id],title);
    
  }
  yes(id: number){
    this.service.deleteService(id).subscribe(result =>{
      this.getServices();
      this.toastr.success("Deleted Successfully");
    });
    this.statusActive = false;
  }
  destroyConfbox() {
    this.statusActive = false;
  }
  addservices() {
    this.title="Add Service";
    this.router.navigate(['dashboard/edit/0'])
  }

}
