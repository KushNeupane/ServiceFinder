import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ChangePasswordModel } from 'src/app/models/user.changePassword.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  editUserPassword: ChangePasswordModel = new ChangePasswordModel;
  constructor(
    private service: AddserviceService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  changePassword(form: NgForm) {
    if (form.value.currentPassword == null || form.value.newPassword == null || form.value.confirmPassword == null) {
      this.toastr.error("Please fill up all the fields", "", { positionClass: 'toast-top-center' });
    }
    else if (form.value.newPassword != form.value.confirmPassword) {
      this.toastr.error("Password does not match", "", { positionClass: 'toast-top-center' });
    }
    else {
      this.service.changePassword(form.value).subscribe(res => {
        let response = <any>res;
        if (!response.isSuccess) {
          this.toastr.error("Please Enter Correct Old Password", "", { positionClass: 'toast-top-center' });
        }
        else {
          form.reset();
          this.toastr.success("Password changed successfully", "", { positionClass: 'toast-top-center' });
          this.router.navigate(['/signin'])
        }

      })
    }

  }
}
