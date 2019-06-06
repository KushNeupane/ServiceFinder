import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SignInCommonData } from "./signin.commondata";
import { UserSignInService } from "../../services/SignIn/usersignin.service";
import { UserRegistrationModel } from "src/app/models/user.registration.model";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from "@angular/core";
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from "angular-6-social-login";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
  animations: [
    trigger("dialog", [
      transition("void => *", [
        style({ transform: "scale3d(.3, .3, .3)" }),
        animate(100)
      ]),
      transition("* => void", [
        animate(100, style({ transform: "scale3d(.0, .0, .0)" }))
      ])
    ])
  ]
})
export class SigninComponent implements OnInit {
  signInCommonData: SignInCommonData;
  toaster = null;
  user: UserRegistrationModel = new UserRegistrationModel();
  @Output() UpdateSignInCommonData: EventEmitter<SignInCommonData> = new EventEmitter<SignInCommonData>();


  constructor(private signInService: UserSignInService, private socialAuthService: AuthService, private toasterService: ToastrService, private router: Router) {
    this.toaster = toasterService;
  }

  ngOnInit() {
    localStorage.clear();

  }

  //For Email SignIn
  onEmailSignIn(form: NgForm) {
    if (form.value.email == null || form.value.password == null) {
      this.toaster.error("please fill up all fields", "", { positionClass: 'toast-top-center' });
    }
    else {
      this.signInService.postEmailSignInData(form.value).subscribe(res => {
        let result = <any>res;
        if (!result.isSuccess) {
          this.toaster.error(result.errors[0], "", { positionClass: 'toast-top-center' });
        } else {
          localStorage.setItem("initial_record", JSON.stringify(result));
          localStorage.setItem('twoFactorEmail',result.loginData.email);
          localStorage.setItem('twoFactorName',result.loginData.displayName);
          localStorage.setItem('twoFactorphoneNumber',result.loginData.phoneNumber);

          if (result.twoFactorEnabled)
            this.router.navigate(["/twofactor"]);
          else
            this.router.navigate(["/dashboard/userdetail"]);
        }
      });
    }
  }

  //For Third-Party SignIn
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

        if (response.isSuccess) {

          this.router.navigate(["/dashboard"]);
          localStorage.setItem('twoFactorEmail', userData.email);
          localStorage.setItem('twoFactorName', userData.name);
          localStorage.setItem('twoFactorImage', userData.image);
          this.toaster.success(" Log in Successful", "", { positionClass: 'toast-top-center' });

        }
      });
    });
  }

  RegUsingEmail() {
    this.router.navigate(["/signup"]);
  }

}
