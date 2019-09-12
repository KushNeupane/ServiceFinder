import { UserSigninModel } from "./../../models/user.signin.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserSignInService {
  fromData1: UserSigninModel;
  baseurl = environment.baseURL;

  constructor(private http: HttpClient) { }

  postEmailSignInData(formData: any) {
    return this.http.post(this.baseurl + "api/auth/login", formData);
  }

  postExternalSignInData(data: any) {
    return this.http.post(this.baseurl + "api/externalauth/login", {
      email: data.email,
      name: data.name
    });
  }

  forgotpassword(email: any) {
  let data = { "email": email };
  return this.http.post(this.baseurl + "api/auth/forgotpassword", data);
  }

  resetPassByEmail(formData: any) {
    return this.http.post(this.baseurl +"api/auth/resetpassword", formData)
  }
}
