import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { RoleTypeModel } from 'src/app/Utility/RoleTypeModel';
import { ViewService } from 'src/app/models/user.viewService.model';
import { DashboardService } from 'src/app/services/Dashboard/Dashboard.service';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private role: string;
  private title: string;
  public MyServiceList: ViewService[];
  private roleType: RoleTypeModel = null;

  constructor(private router: Router,
    private dashboardService: DashboardService,
    private service: AddserviceService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.roleType = new RoleTypeModel();
    if (!this.IsValidUser())
      this.router.navigate([""]);
  }

  IsValidUser(): boolean {
    var local = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
    let token: string = local !== null ? local.token : null;

    if (token) {
      this.role = this.dashboardService.getUserRole(token).toLowerCase();
      localStorage.setItem('isUserLogged', "true");
      return true;
    }
    return false;
  }
}
