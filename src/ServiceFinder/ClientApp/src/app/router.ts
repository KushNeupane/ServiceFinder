import { ChangePasswordComponent } from "./component/Dashboard/User/ChangePassword/change-password.component";
import { UserDetailComponent } from "./component/Dashboard/User/UserDetail/UserDetail.component";
import { AuthGuard } from "./AuthGuard/auth.guard";
import { DashboardComponent } from "./component/Dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { MainpageComponent } from "./component/MainPage/mainpage.component";
import { SigninComponent } from "./component/SignIn/signin.component";
import { TwofactorauthenticationComponent } from "./component/TwoFactorAuth/twofactorauthentication.component";
import { AddServicesComponent } from "./component/Dashboard/User/AddServices/addservices.component";
import { SignupComponent } from "./component/SignUp/signup.component";
import { ServicesComponent } from "./component/Header/services/services.component";
import { NotfoundComponent } from "./component/notfound/notfound.component";
import { ProviderServiceComponent } from "./component/Dashboard/User/ProviderService/providerService.component";
import { ServiceInfoComponent } from "./component/ServiceInfo/service-info.component";
import { ServiceListComponent } from "./component/ServiceList/ServiceList.component";
import { HomeComponent } from "./component/Footer/home/home.component";
import { AboutUsComponent } from "./component/Footer/about-us/aboutUs.component";
import { PrivacyPolicyComponent } from "./component/Footer/privacy-policy/privacyPolicy.component";
import { OthersComponent } from "./component/Footer/others/others.component";
import { TermsAndConditionsComponent } from "./component/Footer/terms-and-conditions/termsAndConditions.component";
import { FooterComponent } from "./component/Footer/footer.component";
import { EditProfileComponent } from "./component/Dashboard/User/EditProfile/edit-profile.component";
import { ForgotPasswordComponent } from "./component/ForgotPassword/forgotPassword.component";
import { ResetPasswordComponent } from "./component/ResetPassword/resetPassword.component";
import { UserComponent } from "./component/Dashboard/User/user.component";
import { CategoryDetailsComponent } from "./component/MainPage/category-details/category-details.component";
import { MyReviewsComponent } from "./component/Dashboard/User/MyReviews/myReviews.component";
import { AdminComponent } from "./component/Dashboard/Admin/admin.component";
import { CategoriesComponent } from "./component/Dashboard/Admin/categories/categories.component";
import { CitiesComponent } from "./component/Dashboard/Admin/cities/cities.component";
import { HelpComponent } from "./component/Header/Help/help.component";
import { AddcitiesComponent } from "./component/Dashboard/Admin/addcities/addcities.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: MainpageComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "twofactor",
    component: TwofactorauthenticationComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "help",
    component: HelpComponent
  },
  {
    path: "object/search",
    component: ServiceListComponent,
    data: { some_data: "some value" }
  },
  {
    path: "footer",
    component: FooterComponent
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "Objects/:categoryId",
    component: CategoryDetailsComponent,
    pathMatch: "full"
  },
  {
    path: "aboutus",
    component: AboutUsComponent,
    pathMatch: "full"
  },
  {
    path: "privacypolicy",
    component: PrivacyPolicyComponent,
    pathMatch: "full"
  },
  {
    path: "others",
    component: OthersComponent,
    pathMatch: "full"
  },
  {
    path: "terms",
    component: TermsAndConditionsComponent,
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "myservices",
        component: ProviderServiceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "user",
        component: UserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "userdetail",
        component: UserDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "edit/:id",
        component: AddServicesComponent,
        canActivate: [AuthGuard],
        pathMatch: "full"
      },
      {
        path: "editprofile",
        component: EditProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "changePassword",
        component: ChangePasswordComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "myReviews",
        component: MyReviewsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "categories",
        component: CategoriesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "cities",
        component: CitiesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "addCity/:id",
        component: AddcitiesComponent,
        canActivate: [AuthGuard],
        pathMatch: "full"
      }
    ]
  },
  {
    path: "getService/:serviceId",
    component: ServiceInfoComponent,
    pathMatch: "full"
  },
  {
    path: "forgotPassword",
    component: ForgotPasswordComponent,
    pathMatch: "full"
  },
  {
    path: "resetPassword",
    component: ResetPasswordComponent
  },

  {
    path: "**",
    component: NotfoundComponent
  }
];
