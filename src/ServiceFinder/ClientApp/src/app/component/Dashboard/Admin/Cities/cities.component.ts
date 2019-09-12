import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CityModel } from 'src/app/models/user.city.model';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/Dashboard/Admin/admin.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  public CityList: CityModel[] = [];
  id : number;
  statusActive: boolean = false;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.adminService.GetCities().subscribe(res => {
      let result = <any>res;
      this.CityList = result;
    })
  }

  addCity(id) {
    
    this.router.navigate(['dashboard/addCity',id]);
  }

  edit(id){
    this.router.navigate(['dashboard/addCity',id]);
  }

  delete(id) {
    this.id = id;
    this.statusActive = true;
  }
  


  yes() {
    this.adminService.DeleteCity(this.id).subscribe(res => {
      let result = <any>res;
      this.getCities();
      if(result.isSuccess){
        this.toastr.success(result.successMessage,"", { positionClass: 'toast-top-center' });
      }
      else{
        result.errors.forEach(error => {
          this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
        });
      }
    });
    this.statusActive = false;
  }
  destroyConfbox() {
    this.statusActive = false;
  }

}
