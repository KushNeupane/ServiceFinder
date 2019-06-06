import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';


@Injectable()
export class DashboardService {

  constructor(private jwtHelper: JwtHelper, private router: Router) { }

  getUserRole(token: string): string {
    var local = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
    return local !== null ? local.role[0] : null;
  }
}




