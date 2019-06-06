import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { UserRegistrationModel } from "../../models/user.registration.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserSignUpService {
  formData: UserRegistrationModel;
  baseurl = environment.baseURL;
  constructor(private http: HttpClient) {}

  signUpUser(formData) {
    return this.http.post(this.baseurl + "api/auth/register", formData);
  }
}
