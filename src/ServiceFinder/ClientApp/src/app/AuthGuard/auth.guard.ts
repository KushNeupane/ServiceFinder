import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    var local = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
    var token = local !== null ? local.token : null;

    if (token)
      return true;

    this.router.navigate(['/signin']);
    return false;
  }

}
