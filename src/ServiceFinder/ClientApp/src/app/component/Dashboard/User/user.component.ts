import { EditProfileModel } from '../../../models/user.editProfile.model';
import { ViewService } from 'src/app/models/user.viewService.model';
import { Router, RouterLink, ActivatedRoute } from "@angular/router";
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {  OnInit } from '@angular/core';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  
  private title : string ;
  public MyServiceList : ViewService[];
  users: EditProfileModel = new EditProfileModel;
  public profileImage: string;



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
      this.users = result;
      this.profileImage = this.users.originalImageName;
      
    })
    this.title = localStorage.getItem('title');
    this.route.queryParams.subscribe(params => {
      this.title = params["title"];
    });
    this.getServices();
  }

  logout() {
    localStorage.clear();
    this.service.clearCookies().subscribe(res=>{
      this.router.navigate([''])
    })

  }

  addservices() {
    this.title="Add Service";
    this.router.navigate(['edit/0'], { relativeTo : this.route})
  }
  myservices() {
    this.title="My Services"
    this.router.navigate(['myservices'], { relativeTo : this.route})
    
  }

  
  dashboard() {
    this.title="Dashboard"
    this.router.navigate(['userdetail'], { relativeTo : this.route})
    
    
  }
  getServices(){
    this.service.GetServicesByUserId().subscribe(res => {
      this.MyServiceList=res;
    })
  }


  // sidebar toggle responsive 

  mobileQuery: MediaQueryList;



  private _mobileQueryListener: () => void;


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    console.log("ram");
  }
  // sidebar toggle responsive 


}
