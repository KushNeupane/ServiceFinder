import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailVerificationModel } from './../../models/user.email-verification.model';
import { TwofactorauthenticationService } from '../../Services/TwoFactorAuth/twofactorauthentication.service';

@Component({
  selector: 'app-twofactorauthentication',
  templateUrl: './twofactorauthentication.component.html',
  styleUrls: ['./twofactorauthentication.component.scss']
})
export class TwofactorauthenticationComponent implements OnInit {
  [x: string]: any;

  emailVerify: EmailVerificationModel = new EmailVerificationModel;
  constructor(
    private toastr: ToastrService,
    private emailVerificationService: TwofactorauthenticationService,
    private router: Router) { }

  ngOnInit() {
  }
  onEmailVerification(form: NgForm) {
    this.emailVerificationService.postEmailCode(form.value).subscribe(res => {
      let result = <any>res;
      if (result.success) {

        this.router.navigate(["/dashboard"]);
        this.toastr.success("login successful", "via twoFactor", { positionClass: 'toast-top-center' });

      }
      else {
        this.toastr.error("Please enter valid verification code", "", { positionClass: 'toast-top-center' });
      }
    });
  }
}
