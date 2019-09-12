import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/models/user.city.model';
import { AdminService } from 'src/app/services/Dashboard/Admin/admin.service';
import { ActivatedRoute, Router} from '@angular/router';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addcities',
  templateUrl: './addcities.component.html',
  styleUrls: ['./addcities.component.scss']
})
export class AddcitiesComponent implements OnInit {

  public provider: CityModel = new CityModel;
  public CityList: CityModel[] = [];
  public statusActive: boolean = false;
  public id;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private service: AddserviceService,
    private toastr: ToastrService,
    private router : Router

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap => {
      this.id = +parameterMap.get('id');
    })

    this.getCity(this.id);
  }

  getCity(id) {
    if (id == 0) {
      this.provider = {
        id: 0,
        name: null,
        status: false,
        description: null,
        province: null
      };
    }
    else {
      this.service.getCities().subscribe(res => {
         
        let result = <any>res;
        this.CityList = result;
        for (let city of this.CityList) {
          if (city.id == id) {
            this.provider = city;
          }
        }
      })
    }
  }

  addCity(form) {
    this.adminService.AddCity(form).subscribe(res => {
      let result = <any>res;
      if (result.isSuccess) {
        this.toastr.success(result.successMessage, "", { positionClass: 'toast-top-center' });
        this.router.navigate(["/dashboard/cities"]);
      }
      else {
        result.errors.forEach(error => {
          this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
        });
      }
    });
  }

  updateCity() {
    this.statusActive = true;
  }

  destroyConfbox() {
    this.statusActive = false;
  }

  yes(form, id) {
    this.provider.name = form.name;
    this.provider.province = form.province;
    this.adminService.UpdateCity(this.provider, id).subscribe(res => {
      let result = <any>res;
      if (result.isSuccess) {
        this.toastr.success(result.successMessage, "", { positionClass: 'toast-top-center' });
      }
      else {
        result.errors.forEach(error => {
          this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
        });
      }
    })
    this.statusActive = false;
  }
}
