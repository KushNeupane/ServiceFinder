import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  baseurl = environment.baseURL;
  constructor(private http: HttpClient) { }

  IsUserValidUser(): boolean {
    return this.getToken() !== null ? true : false;
  }


  public getToken(): string {
    if (typeof localStorage.initial_record !== 'undefined') {
      let obj = JSON.parse(localStorage.initial_record);
      return obj.token;
    }
    return null;
  }

  public getUserData(): any {
    if (typeof localStorage.initial_record !== 'undefined') {
      let obj = JSON.parse(localStorage.initial_record);
      return obj.loginData;
    }
    return null;
  }

  public getRole(): string {
    if (typeof localStorage.initial_record !== 'undefined') {
      let obj = JSON.parse(localStorage.initial_record);
      return obj.role[0].toString().toLowerCase()
      
    }
    return null;
  }

  public logout() {
    localStorage.clear();
  }
}
