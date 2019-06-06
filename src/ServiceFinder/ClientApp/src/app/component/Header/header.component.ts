import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { EditProfileModel } from 'src/app/models/user.editProfile.model';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hoverState: boolean = false;
  users: EditProfileModel;
  innerWidth: number;
  user: any;
  isSticky: boolean = false;
  constructor(
    private router: Router,
    private service: AddserviceService
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

    this.service.getCurrentUser().subscribe(result => {
      this.users = result;
    })
    this.IsUserLogged();
    this.innerWidth = window.innerWidth; console.log(innerWidth);

  }

  IsUserLogged(): boolean {
    this.user = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
    return localStorage.isUserLogged === 'true' ? true : false;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (innerWidth > 768) {
      this.isSticky = window.pageYOffset >= 125;
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
    this.service.clearCookies().subscribe(res=>{
      this.router.navigate(['/signin'])
    })

  }

}
