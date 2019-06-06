import { AuthGuard } from "./AuthGuard/auth.guard";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSliderModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatPaginatorModule
} from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SlickModule } from "ngx-slick";
import { NgxPaginationModule } from "ngx-pagination";


import { appRoutes } from "../app/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/Header/header.component";
import { FooterComponent } from "./component/Footer/footer.component";
import { MainpageComponent } from "./component/MainPage/mainpage.component";
import { UserSignUpService } from "../../src/app/services/SignUp/usersignup.service";
import { SigninComponent } from "./component/SignIn/signin.component";
import { UserSignInService } from "./services/SignIn/usersignin.service";
import { SignupComponent } from "./component/SignUp/signup.component";
import { ConfirmEqualValidatorDirective } from "./Validation/confirmPassword.validation";
import { TwofactorauthenticationComponent } from "./component/TwoFactorAuth/twofactorauthentication.component";
import { DashboardComponent } from "../app/component/Dashboard/dashboard.component";
import { HomepageBannerComponent } from "../app/component/MainPage/homepage-banner/homepage-banner.component";
import { HowItWorksComponent } from "../app/component/MainPage/how-it-works/how-it-works.component";
import { MostSearchedComponent } from "../app/component/MainPage/most-searched/most-searched.component";
import { OurServicesComponent } from "../app/component/MainPage/our-services/our-services.component";
import { TestiminialsComponent } from "../app/component/MainPage/testiminials/testiminials.component";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angular-6-social-login";
import { AddServicesComponent } from "./component/Dashboard/User/AddServices/addservices.component";

import "hammerjs";
import { MaterialModule } from "./material";
import { AppRoutingModule } from "./app-routing.module";
import { CategoriesComponent } from "./component/Header/categories/categories.component";
import { ServicesComponent } from "./component/Header/services/services.component";
import { ServiceInfoComponent } from './component/ServiceInfo/service-info.component';
import { ProviderServiceComponent } from './component/Dashboard/User/ProviderService/providerService.component';
import { DashboardService } from './services/Dashboard/Dashboard.service';
import { AdminComponent } from './component/Dashboard/Admin/admin.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { JwtHelper } from 'angular2-jwt';
import { UserDetailComponent } from './component/Dashboard/User/UserDetail/UserDetail.component';
import { UserComponent } from './component/Dashboard/User/user.component';
import { ServiceListComponent } from './component/ServiceList/ServiceList.component';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './component/Footer/home/home.component';
import { PrivacyPolicyComponent } from './component/Footer/privacy-policy/privacyPolicy.component';
import { OthersComponent } from './component/Footer/others/others.component';
import { AboutUsComponent } from './component/Footer/about-us/aboutUs.component';
import { TermsAndConditionsComponent } from './component/Footer/terms-and-conditions/termsAndConditions.component';
import { EditProfileComponent } from './component/Dashboard/User/EditProfile/edit-profile.component';
import { ChangePasswordComponent } from './component/Dashboard/User/ChangePassword/change-password.component';
import { ForgotPasswordComponent } from './component/ForgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './component/ResetPassword/resetPassword.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    TwofactorauthenticationComponent,
    AddServicesComponent,
    HomepageBannerComponent,
    HowItWorksComponent,
    MostSearchedComponent,
    MostSearchedComponent,
    OurServicesComponent,
    TestiminialsComponent,
    CategoriesComponent,
    ServicesComponent,
    ServiceInfoComponent,
    ProviderServiceComponent,
	  NotfoundComponent,
	  UserDetailComponent,
	  ServiceListComponent,
    FilterPipe,
	  HomeComponent,
	  AboutUsComponent,
	  PrivacyPolicyComponent,
    OthersComponent,
    EditProfileComponent,
    TermsAndConditionsComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  
	 
	
  ],
  imports: [
    NgbModule,
    SocialLoginModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatSidenavModule,
    MaterialModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    SlickModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    JwtHelper,
    UserSignUpService,
    UserSignInService,
    DashboardService,
    MatDatepickerModule,
    AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("358243781632810")
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "342003173576-pf7u9g42qtg54kqo70sd7g9m6riq6gci.apps.googleusercontent.com"
      )
    }
  ]);
  return config;
}
