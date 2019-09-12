import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { EditProfileModel } from 'src/app/models/user.editProfile.model';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/common/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 isValidUser: boolean = false;
 hoverState: boolean = false;
 users: EditProfileModel;
 innerWidth: number;
 user: any;
 isSticky: boolean = false;
 constructor(
   private router: Router,
   private authService: AuthServices,
   private service: AddserviceService,
   private http: HttpClient
 ) { }

 hovered() {
   this.hoverState = true;
 }
 unhovered() {
   setTimeout(() => {
     this.hoverState = false;
   }, 2200);
 }

 ngOnInit() {
   this.isValidUser = this.authService.IsUserValidUser();

   this.service.getCurrentUser().subscribe(result => {
     this.users = result;
   })
   this.innerWidth = window.innerWidth; console.log(innerWidth);

 }
 dashboard(){
  var role = this.authService.getRole();
  if (role == "admin") {
    this.router.navigate(["/dashboard"]);
  }
  else{
    this.router.navigate(["/dashboard/userdetail"]);
  }
}


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (innerWidth > 768) {
      this.isSticky = window.pageYOffset >= 5;
    }
    else {
      this.isSticky = window.pageYOffset >= 80;
    }
  }

 @HostListener('window:resize', ['$event'])
 onResize(event) {
   this.innerWidth = window.innerWidth;
   console.log(innerWidth);
 }

  logout() {
    localStorage.clear();
    this.service.clearCookies().subscribe(res=>{});
    this.isValidUser = false;
    this.router.navigateByUrl(`/`).then(
      () => {this.router.navigateByUrl(this.router.url);});  }
}
