import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSignInService } from 'src/app/services/SignIn/usersignin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  useremail: string;

  constructor(private signInService: UserSignInService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }
  onPassReset(){
    this.signInService.forgotpassword(this.useremail).subscribe(res=>{
      let response = <any>res;
      if(!response.isSuccess){
        this.toastr.error("Invalid Email", "", { positionClass: 'toast-top-center' });

      }
      else{
        this.toastr.success("Password reset link has been sent to your email", "please Confirm", { positionClass: 'toast-top-center' });
        localStorage.setItem('resetPasswordToken', response.token);
      }
    })
 }
}
