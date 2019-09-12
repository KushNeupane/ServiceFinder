import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/Dashboard/User/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(
    private service: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  subscriber(form: NgForm) {
    let email = form.value.email;
    this.service.AddSubscriber(email).subscribe(res => {
      let result = <any>res;
      if (result.isSuccess) {
        this.toastr.success(result.successMessage, "", { positionClass: 'toast-top-center' });
        form.reset();
      }
      else {
        result.errors.forEach(error => {
          this.toastr.error(error, "", { positionClass: 'toast-top-center' });
          form.reset();
        });
      }
    })
  }
}
