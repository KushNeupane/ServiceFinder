import { Component, OnInit } from '@angular/core';
import { UserResetPass } from 'src/app/models/user.resetpass.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserSignInService } from 'src/app/services/SignIn/usersignin.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  token: string;
  resetPass: UserResetPass;
  resetModel: UserResetPass = null;
  constructor(private signInService: UserSignInService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    debugger;
    this.resetPass = new UserResetPass();
    this.token =  localStorage.resetPasswordToken ;
  }
  onResetPass(form: NgForm) {
    debugger;
    if (form.value) {
      this.resetModel = new UserResetPass();
      this.resetModel.email = form.value.email;
      this.resetModel.password = form.value.password;
      this.resetModel.token = this.token

      this.signInService.resetPassByEmail(this.resetModel).subscribe(res => {
        
        //Clear reset model data
        this.resetModel = null;

        let response = <any>res;
        if (!response.isSuccess) {
          this.toastr.error("Error while resetting the password!", "", { positionClass: 'toast-top-center' });
        }
        else {
          this.toastr.success("Password Reset Successful", "", { positionClass: 'toast-top-center' });
          this.router.navigate(['signin']);
        }
      })
    }
  }

}
