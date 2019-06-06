import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { EmailVerificationModel } from "src/app/models/user.email-verification.model";

@Injectable({
  providedIn: "root"
})
export class TwofactorauthenticationService {
  baseurl = environment.baseURL;
  formData: EmailVerificationModel;
  constructor(private http: HttpClient) {}

  postEmailCode(formData: any) {
    return this.http.post(this.baseurl + "api/auth/verifycode", {
      code: formData.code,
      email: localStorage.email
    });
  }
}
