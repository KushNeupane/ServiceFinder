import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserSignUpService } from "../../services/SignUp/usersignup.service";
import { ToastrService } from "ngx-toastr";
import { UserRegistrationModel } from "src/app/models/user.registration.model";
import { Router } from "@angular/router";
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { UserSignInService } from 'src/app/services/SignIn/usersignin.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {

  user: UserRegistrationModel = new UserRegistrationModel;
  passPattern : "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$"

  constructor(
    private signUpService: UserSignUpService,
    private signInService: UserSignInService,
    private toastr: ToastrService,
    private socialAuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.clear();
  }
  onSignUp(form: NgForm) {
   
    if (form.value.email == null || form.value.password == null || form.value.displayName == null || form.value.phoneNumber == null || form.value.confirmPassword == null) {
      this.toastr.error("Please fill up all the fields", "", { positionClass: 'toast-top-center' });
    }
  else if(form.value.password!= form.value.confirmPassword){
      this.toastr.error("Password does not match", "", { positionClass: 'toast-top-center' });
    }
    else {
      this.signUpService.signUpUser(form.value).subscribe(res => {
        debugger
        let response = <any>res;
        if (!response.isSuccess) {
          response.errors.forEach(error => {
            this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
          });         
        }
        else {
          form.reset();
          this.toastr.success("Inserted Successfully", "User Registered", { positionClass: 'toast-top-center' });
        }
      });
    }
  }

  public OnSocialSignIn(socialPlatform: string) {
    let socialPlatformProvider;

    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;

    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    }

    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      this.signInService.postExternalSignInData(userData).subscribe(res => {
        let response = <any>res;

        if (response.success) {
          this.router.navigate(["/dashboard"]);
          localStorage.setItem('twoFactorEmail', userData.email);
          localStorage.setItem('twoFactorName', userData.name);
          localStorage.setItem('twoFactorImage', userData.image);
          this.toastr.success(" Log in Successful", "User Logged in", { positionClass: 'toast-top-center' });
        }
      });
    });
  }
}
