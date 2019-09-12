import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { EditProfileModel } from 'src/app/models/user.editProfile.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title : string = "Dashboard" ;
  admin: EditProfileModel = new EditProfileModel;

  
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private service: AddserviceService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {
    this.service.getCurrentUser().subscribe(result=>{
      this.admin = result;
      
    })
      this.title ="Dashboard"
    this.route.queryParams.subscribe(params => {
      this.title = params["title"];
    });
  }

  logout() {
    localStorage.clear();
    this.service.clearCookies().subscribe(res=>{
      this.router.navigate([''])
    })
  }

  dashboard() {
    this.title="Dashboard"
   
  }

  //Category field
  categories(){
    this.router.navigate(["/dashboard/categories"]);
  }

  //City field
  cities(){
    this.router.navigate(["/dashboard/cities"]);
  }


  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    console.log("ram");
  }

}
