(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AuthGuard/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/AuthGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var local = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
        var token = local !== null ? local.token : null;
        if (token)
            return true;
        this.router.navigate(['/signin']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Services/TwoFactorAuth/twofactorauthentication.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Services/TwoFactorAuth/twofactorauthentication.service.ts ***!
  \***************************************************************************/
/*! exports provided: TwofactorauthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwofactorauthenticationService", function() { return TwofactorauthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TwofactorauthenticationService = /** @class */ (function () {
    function TwofactorauthenticationService(http) {
        this.http = http;
        this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    TwofactorauthenticationService.prototype.postEmailCode = function (formData) {
        return this.http.post(this.baseurl + "api/auth/verifycode", {
            code: formData.code,
            email: localStorage.email
        });
    };
    TwofactorauthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TwofactorauthenticationService);
    return TwofactorauthenticationService;
}());



/***/ }),

/***/ "./src/app/Utility/RoleTypeModel.ts":
/*!******************************************!*\
  !*** ./src/app/Utility/RoleTypeModel.ts ***!
  \******************************************/
/*! exports provided: RoleTypeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTypeModel", function() { return RoleTypeModel; });
var RoleTypeModel = /** @class */ (function () {
    function RoleTypeModel() {
        this.admin = 'admin';
        this.user = 'user';
    }
    return RoleTypeModel;
}());



/***/ }),

/***/ "./src/app/Validation/confirmPassword.validation.ts":
/*!**********************************************************!*\
  !*** ./src/app/Validation/confirmPassword.validation.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualValidatorDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFTLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOnJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthGuard/auth.guard */ "./src/app/AuthGuard/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/ngx-slick.umd.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_slick__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/router */ "./src/app/router.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_Header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/Header/header.component */ "./src/app/component/Header/header.component.ts");
/* harmony import */ var _component_Footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/Footer/footer.component */ "./src/app/component/Footer/footer.component.ts");
/* harmony import */ var _component_MainPage_mainpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/MainPage/mainpage.component */ "./src/app/component/MainPage/mainpage.component.ts");
/* harmony import */ var _src_app_services_SignUp_usersignup_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../src/app/services/SignUp/usersignup.service */ "./src/app/services/SignUp/usersignup.service.ts");
/* harmony import */ var _component_SignIn_signin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/SignIn/signin.component */ "./src/app/component/SignIn/signin.component.ts");
/* harmony import */ var _services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/SignIn/usersignin.service */ "./src/app/services/SignIn/usersignin.service.ts");
/* harmony import */ var _component_SignUp_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/SignUp/signup.component */ "./src/app/component/SignUp/signup.component.ts");
/* harmony import */ var _Validation_confirmPassword_validation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Validation/confirmPassword.validation */ "./src/app/Validation/confirmPassword.validation.ts");
/* harmony import */ var _component_TwoFactorAuth_twofactorauthentication_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/TwoFactorAuth/twofactorauthentication.component */ "./src/app/component/TwoFactorAuth/twofactorauthentication.component.ts");
/* harmony import */ var _app_component_Dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../app/component/Dashboard/dashboard.component */ "./src/app/component/Dashboard/dashboard.component.ts");
/* harmony import */ var _app_component_MainPage_homepage_banner_homepage_banner_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../app/component/MainPage/homepage-banner/homepage-banner.component */ "./src/app/component/MainPage/homepage-banner/homepage-banner.component.ts");
/* harmony import */ var _app_component_MainPage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../app/component/MainPage/how-it-works/how-it-works.component */ "./src/app/component/MainPage/how-it-works/how-it-works.component.ts");
/* harmony import */ var _app_component_MainPage_most_searched_most_searched_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../app/component/MainPage/most-searched/most-searched.component */ "./src/app/component/MainPage/most-searched/most-searched.component.ts");
/* harmony import */ var _app_component_MainPage_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../app/component/MainPage/our-services/our-services.component */ "./src/app/component/MainPage/our-services/our-services.component.ts");
/* harmony import */ var _app_component_MainPage_testiminials_testiminials_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../app/component/MainPage/testiminials/testiminials.component */ "./src/app/component/MainPage/testiminials/testiminials.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _component_Dashboard_User_AddServices_addservices_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/Dashboard/User/AddServices/addservices.component */ "./src/app/component/Dashboard/User/AddServices/addservices.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_Header_categories_categories_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./component/Header/categories/categories.component */ "./src/app/component/Header/categories/categories.component.ts");
/* harmony import */ var _component_Header_services_services_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./component/Header/services/services.component */ "./src/app/component/Header/services/services.component.ts");
/* harmony import */ var _component_ServiceInfo_service_info_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./component/ServiceInfo/service-info.component */ "./src/app/component/ServiceInfo/service-info.component.ts");
/* harmony import */ var _component_Dashboard_User_ProviderService_providerService_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./component/Dashboard/User/ProviderService/providerService.component */ "./src/app/component/Dashboard/User/ProviderService/providerService.component.ts");
/* harmony import */ var _services_Dashboard_Dashboard_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/Dashboard/Dashboard.service */ "./src/app/services/Dashboard/Dashboard.service.ts");
/* harmony import */ var _component_Dashboard_Admin_admin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./component/Dashboard/Admin/admin.component */ "./src/app/component/Dashboard/Admin/admin.component.ts");
/* harmony import */ var _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./component/notfound/notfound.component */ "./src/app/component/notfound/notfound.component.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _component_Dashboard_User_UserDetail_UserDetail_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./component/Dashboard/User/UserDetail/UserDetail.component */ "./src/app/component/Dashboard/User/UserDetail/UserDetail.component.ts");
/* harmony import */ var _component_Dashboard_User_user_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./component/Dashboard/User/user.component */ "./src/app/component/Dashboard/User/user.component.ts");
/* harmony import */ var _component_ServiceList_ServiceList_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./component/ServiceList/ServiceList.component */ "./src/app/component/ServiceList/ServiceList.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _component_Footer_home_home_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./component/Footer/home/home.component */ "./src/app/component/Footer/home/home.component.ts");
/* harmony import */ var _component_Footer_privacy_policy_privacyPolicy_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./component/Footer/privacy-policy/privacyPolicy.component */ "./src/app/component/Footer/privacy-policy/privacyPolicy.component.ts");
/* harmony import */ var _component_Footer_others_others_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./component/Footer/others/others.component */ "./src/app/component/Footer/others/others.component.ts");
/* harmony import */ var _component_Footer_about_us_aboutUs_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./component/Footer/about-us/aboutUs.component */ "./src/app/component/Footer/about-us/aboutUs.component.ts");
/* harmony import */ var _component_Footer_terms_and_conditions_termsAndConditions_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./component/Footer/terms-and-conditions/termsAndConditions.component */ "./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.ts");
/* harmony import */ var _component_Dashboard_User_EditProfile_edit_profile_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./component/Dashboard/User/EditProfile/edit-profile.component */ "./src/app/component/Dashboard/User/EditProfile/edit-profile.component.ts");
/* harmony import */ var _component_Dashboard_User_ChangePassword_change_password_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./component/Dashboard/User/ChangePassword/change-password.component */ "./src/app/component/Dashboard/User/ChangePassword/change-password.component.ts");
/* harmony import */ var _component_ForgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./component/ForgotPassword/forgotPassword.component */ "./src/app/component/ForgotPassword/forgotPassword.component.ts");
/* harmony import */ var _component_ResetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./component/ResetPassword/resetPassword.component */ "./src/app/component/ResetPassword/resetPassword.component.ts");

























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _component_Dashboard_Admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["AdminComponent"],
                _component_Dashboard_User_user_component__WEBPACK_IMPORTED_MODULE_45__["UserComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _component_MainPage_mainpage_component__WEBPACK_IMPORTED_MODULE_18__["MainpageComponent"],
                _component_Header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _component_Footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _app_component_Dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _component_SignIn_signin_component__WEBPACK_IMPORTED_MODULE_20__["SigninComponent"],
                _component_SignUp_signup_component__WEBPACK_IMPORTED_MODULE_22__["SignupComponent"],
                _Validation_confirmPassword_validation__WEBPACK_IMPORTED_MODULE_23__["ConfirmEqualValidatorDirective"],
                _component_TwoFactorAuth_twofactorauthentication_component__WEBPACK_IMPORTED_MODULE_24__["TwofactorauthenticationComponent"],
                _component_Dashboard_User_AddServices_addservices_component__WEBPACK_IMPORTED_MODULE_32__["AddServicesComponent"],
                _app_component_MainPage_homepage_banner_homepage_banner_component__WEBPACK_IMPORTED_MODULE_26__["HomepageBannerComponent"],
                _app_component_MainPage_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_27__["HowItWorksComponent"],
                _app_component_MainPage_most_searched_most_searched_component__WEBPACK_IMPORTED_MODULE_28__["MostSearchedComponent"],
                _app_component_MainPage_most_searched_most_searched_component__WEBPACK_IMPORTED_MODULE_28__["MostSearchedComponent"],
                _app_component_MainPage_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_29__["OurServicesComponent"],
                _app_component_MainPage_testiminials_testiminials_component__WEBPACK_IMPORTED_MODULE_30__["TestiminialsComponent"],
                _component_Header_categories_categories_component__WEBPACK_IMPORTED_MODULE_36__["CategoriesComponent"],
                _component_Header_services_services_component__WEBPACK_IMPORTED_MODULE_37__["ServicesComponent"],
                _component_ServiceInfo_service_info_component__WEBPACK_IMPORTED_MODULE_38__["ServiceInfoComponent"],
                _component_Dashboard_User_ProviderService_providerService_component__WEBPACK_IMPORTED_MODULE_39__["ProviderServiceComponent"],
                _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_42__["NotfoundComponent"],
                _component_Dashboard_User_UserDetail_UserDetail_component__WEBPACK_IMPORTED_MODULE_44__["UserDetailComponent"],
                _component_ServiceList_ServiceList_component__WEBPACK_IMPORTED_MODULE_46__["ServiceListComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_47__["FilterPipe"],
                _component_Footer_home_home_component__WEBPACK_IMPORTED_MODULE_48__["HomeComponent"],
                _component_Footer_about_us_aboutUs_component__WEBPACK_IMPORTED_MODULE_51__["AboutUsComponent"],
                _component_Footer_privacy_policy_privacyPolicy_component__WEBPACK_IMPORTED_MODULE_49__["PrivacyPolicyComponent"],
                _component_Footer_others_others_component__WEBPACK_IMPORTED_MODULE_50__["OthersComponent"],
                _component_Dashboard_User_EditProfile_edit_profile_component__WEBPACK_IMPORTED_MODULE_53__["EditProfileComponent"],
                _component_Footer_terms_and_conditions_termsAndConditions_component__WEBPACK_IMPORTED_MODULE_52__["TermsAndConditionsComponent"],
                _component_Dashboard_User_ChangePassword_change_password_component__WEBPACK_IMPORTED_MODULE_54__["ChangePasswordComponent"],
                _component_ForgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_55__["ForgotPasswordComponent"],
                _component_ResetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_56__["ResetPasswordComponent"],
            ],
            imports: [
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__["SocialLoginModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_35__["AppRoutingModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _material__WEBPACK_IMPORTED_MODULE_34__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_12__["SlickModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    preventDuplicates: true
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_14__["appRoutes"])
            ],
            providers: [
                angular2_jwt__WEBPACK_IMPORTED_MODULE_43__["JwtHelper"],
                _src_app_services_SignUp_usersignup_service__WEBPACK_IMPORTED_MODULE_19__["UserSignUpService"],
                _services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_21__["UserSignInService"],
                _services_Dashboard_Dashboard_service__WEBPACK_IMPORTED_MODULE_40__["DashboardService"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__["FacebookLoginProvider"]("358243781632810")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_31__["GoogleLoginProvider"]("342003173576-pf7u9g42qtg54kqo70sd7g9m6riq6gci.apps.googleusercontent.com")
        }
    ]);
    return config;
}


/***/ }),

/***/ "./src/app/component/Dashboard/Admin/admin.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/Dashboard/Admin/admin.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  ADMIN PANEL UNDER CONSTRUCTION\r\n</h1>"

/***/ }),

/***/ "./src/app/component/Dashboard/Admin/admin.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/Dashboard/Admin/admin.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9BZG1pbi9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcRGFzaGJvYXJkXFxBZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9EYXNoYm9hcmQvQWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/Dashboard/Admin/admin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/Dashboard/Admin/admin.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/component/Dashboard/Admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/component/Dashboard/Admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/component/Dashboard/User/AddServices/addservices.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/AddServices/addservices.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-7\">\r\n    <div class=\"inner-wrapper\">\r\n      <h4 class=\"inner-title\">Add Services You Provide</h4>\r\n      <form #form=\"ngForm\" class=\"col s12\" method=\"POST\" autocomplete=\"off\">\r\n        <div class=\"demo-form-wrapper\">\r\n          <mat-form-field>\r\n            <mat-placeholder>Service Name</mat-placeholder>\r\n            <input matInput name=\"name\" #name=\"ngModel\" [(ngModel)]=\"provider.name\" required>\r\n          </mat-form-field>\r\n          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n            <div class=\"errorMsg\" *ngIf=\"name.errors.required\">\r\n              Service Name is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"demo-form-group\">\r\n          <mat-form-field>\r\n            <mat-placeholder>Choose Your Category</mat-placeholder>\r\n            <mat-select [(ngModel)]=\"provider.categoryId\" name=\"categoryId\" #categoryId=\"ngModel\">\r\n              <mat-option *ngFor=\"let item of categoryList\" [value]=\"item.id\">{{item.name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <br />\r\n\r\n        <div class=\"demo-form-wrapper\">\r\n          <mat-form-field>\r\n            <mat-placeholder>Phone Number</mat-placeholder>\r\n            <input matInput type=\"tel\" name=\"phoneNumber\" #phoneNumber=\"ngModel\" [(ngModel)]=\"provider.phoneNumber\"\r\n              maxlength=\"10\" required>\r\n            <mat-icon matSuffix>phone</mat-icon>\r\n          </mat-form-field>\r\n          <div *ngIf=\"phoneNumber.invalid && phoneNumber.touched\" class=\"alert alert-danger\">\r\n            <div class=\"errorMsg\" *ngIf=\"phoneNumber.errors.required\">\r\n              PhoneNumber is required and must have 10 digits\r\n            </div>\r\n          </div>\r\n          <!-- <mat-checkbox (click)=\"!numberVisibility\">Do you want to display the Phone Number??\r\n          </mat-checkbox> -->\r\n        </div>\r\n\r\n        <div class=\"demo-form-wrapper\">\r\n          <mat-form-field>\r\n            <mat-placeholder>Email</mat-placeholder>\r\n            <input type=\"email\" matInput name=\"email\" #email=\"ngModel\" [(ngModel)]=\"provider.email\" required email>\r\n            <mat-icon matSuffix>mail</mat-icon>\r\n          </mat-form-field>\r\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n            <div class=\"errorMsg\" *ngIf=\"email.errors.required\">Email is required.</div>\r\n            <div class=\"errorMsg\" *ngIf=\"email.errors?.email\">\r\n              Email formate is not valid.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"demo-form-wrapper\">\r\n          <mat-form-field>\r\n            <mat-placeholder>Description</mat-placeholder>\r\n            <textarea matInput name=\"description\" #description=\"ngModel\" [(ngModel)]=\"provider.description\"\r\n              required></textarea>\r\n          </mat-form-field>\r\n          <div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"alert alert-danger\">\r\n            <div class=\"errorMsg\" *ngIf=\"description.errors.required\">\r\n              Description is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"demo-form-wrapper\">\r\n          <mat-form-field>\r\n            <mat-placeholder>Working Shift</mat-placeholder>\r\n            <textarea matInput name=\"workingShift\" #workingShift=\"ngModel\"\r\n              [(ngModel)]=\"provider.workingShift\"></textarea>\r\n          </mat-form-field>\r\n        </div> -->\r\n\r\n        <div *ngIf=\"imageEdit==false\" class=\"demo-form-group\">\r\n          <h6>Service Images</h6>\r\n          <div class=\"form-group image-upload\">\r\n            <label>\r\n              <span class=\"upload-btn\">Browse Image</span>\r\n              <input type=\"file\" (change)=\"onFileUpload($event)\" multiple>\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group image-upload\" *ngIf=\"show\">\r\n            <ul *ngFor=\"let image of imagePreview; let i=index\">\r\n              <img class=\"thumb-preview\" [src]=\"image\" style=\"background-image: url();\">\r\n              <div (click)=\"removeImage(i)\"><i class=\"material-icons\">close</i></div>\r\n              <p [innerHTML]=\"imgnameList[i]\"></p>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- images preview -->\r\n        <div *ngIf=\"imageEdit==true\" class=\"demo-form-wrapper\">\r\n          <h6>Service Availibility</h6>\r\n          <ul class=\"image-thumbnails\">\r\n            <li *ngFor=\"let image of imageList\">\r\n              <img src=\"../../../../../../../wwwroot/Images/{{image.originalImageName}}\" alt=\"service-thumbnail\">\r\n              <a [routerLink]=\"\" (click)=\"deleteImage(image.id)\"><i class=\"fas fa-times\"></i></a>\r\n            </li>\r\n\r\n            <!-- <div class=\"form-group image-upload\" *ngIf=\"show\"> -->\r\n            <li *ngFor=\"let image of imagePreview; let i=index\">\r\n              <img class=\"thumb-preview\" [src]=\"image\" style=\"background-image: url();\">\r\n              <div (click)=\"removeImage(i)\"><i class=\"material-icons\">close</i></div>\r\n              <p [innerHTML]=\"imgnameList[i]\"></p>\r\n            </li>\r\n            <!-- </div> -->\r\n            <li class=\"add-more\">\r\n              <b>Add More</b>\r\n              <input type=\"file\" (change)=\"onFileUpload($event)\" multiple>\r\n            </li>\r\n          </ul>\r\n\r\n        </div>\r\n        <!-- images preview -->\r\n\r\n\r\n        <div class=\"demo-form-wrapper\">\r\n          <h6>Service Availibility</h6>\r\n          <mat-checkbox name=\"status\" #status=\"ngModel\" value=\"true\" [(ngModel)]=\"provider.status\">I am Available\r\n          </mat-checkbox>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"demo-form-wrapper\">\r\n          <h6>Datepicker</h6>\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div> -->\r\n\r\n        <!-- <div class=\"demo-form-group\">\r\n          <h6>RaDios</h6>\r\n          <mat-radio-group>\r\n            <mat-radio-button value=\"1\">Option 1</mat-radio-button>\r\n            <mat-radio-button value=\"2\">Option 2</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n\r\n        <div class=\"demo-form-group\">\r\n          <h6>Sliders</h6>\r\n          <mat-slider thumbLabel [displayWith]=\"formatLabel\" tickInterval=\"1000\" min=\"1\" max=\"100000\">\r\n          </mat-slider>\r\n        </div> -->\r\n\r\n        <button *ngIf=\"id===0\" (click)=\"onSignUp(form)\" class=\"btn btn-primary\">Add <mat-icon>chevron_right</mat-icon>\r\n        </button>\r\n        <button *ngIf=\"id!==0\" (click)=\"onSignUp(form)\" class=\"btn btn-primary\">Update <mat-icon>chevron_right\r\n          </mat-icon></button>\r\n\r\n        <section class=\"confirmation_box\" *ngIf=\"statusActive\">\r\n          <div class=\"confirmation_wrapper\">\r\n            <a class=\"cross_btn\" (click)=\"destroyConfbox()\"><i class=\"fas fa-times\"></i></a>\r\n            <p>Do you want to editS the service ? </p>\r\n            <div class=\"confirmation_actions\">\r\n              <button (click)=\"yes(form)\" class=\"btn btn-primary\">Yes</button>\r\n              <button (click)=\"destroyConfbox()\" class=\"btn\">No</button>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Other section   -->\r\n  <!-- <div class=\"col-md-5\">\r\n    <div class=\"inner-wrapper\">\r\n      <h4 class=\"inner-title\">\r\n        Other section\r\n      </h4>\r\n    </div>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/component/Dashboard/User/AddServices/addservices.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/AddServices/addservices.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirmation_box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3); }\n  .confirmation_box .confirmation_wrapper {\n    position: relative;\n    background: #fff;\n    padding-top: 30px;\n    top: 100px; }\n  @media only screen and (min-width: 768px) {\n      .confirmation_box .confirmation_wrapper {\n        min-width: 320px;\n        top: 0; } }\n  .confirmation_box .cross_btn {\n    position: absolute;\n    top: 6px;\n    right: 10px; }\n  .confirmation_box .btn {\n    border-radius: 0; }\n  .confirmation_box p {\n    padding: 0 20px;\n    margin: 20px 0; }\n  .confirmation_box .confirmation_actions {\n    display: flex; }\n  .confirmation_box .confirmation_actions .btn {\n      flex-basis: 50%;\n      cursor: pointer; }\n  .confirmation_box .confirmation_actions .btn:last-child {\n        background: #252525;\n        color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL0FkZFNlcnZpY2VzL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxEYXNoYm9hcmRcXFVzZXJcXEFkZFNlcnZpY2VzXFxhZGRzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL0FkZFNlcnZpY2VzL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9EYXNoYm9hcmQvVXNlci9BZGRTZXJ2aWNlcy9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFNBQVE7RUFDUixVQUFTO0VBQ1QsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsK0JBQTJCLEVBa0M5QjtFQTNDRDtJQVdRLG1CQUFrQjtJQUNsQixpQkNOSTtJRE9KLGtCQUFpQjtJQUNqQixXQUFVLEVBS2I7RUVWSDtNRlRGO1FBZ0JZLGlCQUFnQjtRQUNoQixPQUFNLEVBRWIsRUFBQTtFQW5CTDtJQXFCUSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFlBQVcsRUFDZDtFQXhCTDtJQTBCUSxpQkFBZ0IsRUFDbkI7RUEzQkw7SUE2QlEsZ0JBQWU7SUFDZixlQUFjLEVBQ2pCO0VBL0JMO0lBaUNRLGNBQWEsRUFTaEI7RUExQ0w7TUFtQ1ksZ0JBQWU7TUFDZixnQkFBZSxFQUtsQjtFQXpDVDtRQXNDZ0Isb0JDakNEO1FEa0NDLFlDakNKLEVEa0NDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL0FkZFNlcnZpY2VzL2FkZHNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcbi5jb25maXJtYXRpb25fYm94e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIC5jb25maXJtYXRpb25fd3JhcHBlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNyb3NzX2J0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIH1cclxuICAgIC5jb25maXJtYXRpb25fYWN0aW9uc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gZm9udHNcclxuJGdGb250OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuJGhGb250OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIGNvbG9yc1xyXG4kcmVkOiAjZjkxOTQyO1xyXG4kbXV0ZVJlZDogI2NlM2Q2NjsgXHJcbiRibGFjazogIzI1MjUyNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtZ3JleTogI2ZhZmFmYTtcclxuJGdyZXk6ICNiN2I3Yjc7XHJcbiR0cmFuc0JsdWU6ICNkZWVlZjY7XHJcbiRncmVlbjogIzNkY2U4ODtcclxuJGJsdWU6ICMwNmExY2U7XHJcblxyXG4vLyBjb2xvciByb2xlc1xyXG4kcHJpbWFyeS1jb2xvcjogJG11dGVSZWQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICRibGFjaztcclxuXHJcbi8vICBtZWRpYSBxdWVyeSBicmVha3BvaW50c1xyXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcclxuJGRlc2t0b3Atd2lkdGg6IDEyMDBweDtcclxuJG1lZGl1bS13aWR0aDogMzc1cHg7XHJcblxyXG4gIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyJdfQ== */"

/***/ }),

/***/ "./src/app/component/Dashboard/User/AddServices/addservices.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/AddServices/addservices.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServicesComponent", function() { return AddServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var src_app_models_user_category_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user.category.model */ "./src/app/models/user.category.model.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_models_user_addService_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/user.addService.model */ "./src/app/models/user.addService.model.ts");









var AddServicesComponent = /** @class */ (function () {
    function AddServicesComponent(toastr, service, _route, route) {
        this.toastr = toastr;
        this.service = service;
        this._route = _route;
        this.route = route;
        this.statusActive = false;
        this.catty = new src_app_models_user_category_model__WEBPACK_IMPORTED_MODULE_5__["CategoryModel"];
        this.numberVisibility = true;
        this.provider = new src_app_models_user_addService_model__WEBPACK_IMPORTED_MODULE_7__["AddServiceModel"];
        this.show = false;
        this.imagePreview = [];
        this.myFiles = [];
        this.selectedFiles = new FormData();
        this.imgnameList = [];
        this.arr = [];
        this.remaining = [];
        this.editpPopUP = false;
        this.imageList = [];
    }
    AddServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.arr = null;
        this.selectedFiles.delete('gallery');
        this._route.paramMap.subscribe(function (parameterMap) {
            _this.id = +parameterMap.get('id');
        });
        this.getCategory();
        //to get service id via query parameter    
        // const routeParams = this._route.snapshot.params;
        // this.id = routeParams.id;
        this.getService(this.id);
    };
    AddServicesComponent.prototype.getCategory = function () {
        var _this = this;
        this.service.GetCategories().subscribe(function (result) {
            _this.categoryList = result;
            console.log(_this.categoryList);
        });
    };
    //when upload image button is clicked
    AddServicesComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        debugger;
        this.show = false;
        this.myFiles = event.target.files;
        this.arr = Array.from(this.myFiles);
        this.arr = this.arr.concat(this.remaining);
        this.remaining = this.arr;
        console.log(this.arr);
        console.log(this.selectedFiles);
        if (this.myFiles) {
            var _loop_1 = function (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.show = true;
                    _this.imagePreview.push(e.target.result);
                    _this.imgnameList.push('File name : ' + file.name + "(" + file.size / 1000 + " kb)");
                };
                reader.readAsDataURL(file);
            };
            for (var _i = 0, _a = this.myFiles; _i < _a.length; _i++) {
                var file = _a[_i];
                _loop_1(file);
            }
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append('Accept', 'application/json');
        //DON'T SET THE Content-Type to multipart/form-data, You'llget the Missing content-type boundary error
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
    };
    AddServicesComponent.prototype.removeImage = function (j) {
        console.log(this.arr);
        this.arr.splice(j, 1);
        this.remaining = this.arr;
        console.log(this.remaining);
        var tempImage;
        var tempName;
        var tempUpload;
        for (j; j < this.imagePreview.length - 1; j++) {
            if (this.imagePreview[j] == this.imagePreview[length - 1]) {
                this.imagePreview.pop();
                this.imgnameList.pop();
            }
            else {
                //delete image preview
                tempImage = this.imagePreview[j + 1];
                this.imagePreview[j + 1] = this.imagePreview[j];
                this.imagePreview[j] = tempImage;
                //delete image name
                tempName = this.imgnameList[j + 1];
                this.imgnameList[j + 1] = this.imgnameList[j];
                this.imgnameList[j] = tempName;
            }
        }
        this.imagePreview.pop();
        this.imgnameList.pop();
        // this.selectedFiles.nativeElement.value = null;
        console.log(this.imagePreview);
        console.log(this.imgnameList);
        console.log(this.arr);
    };
    //when add button is clicked
    AddServicesComponent.prototype.onSignUp = function (form) {
        var _this = this;
        if (form.value.name == null || form.value.description == null || form.value.status == null) {
            this.toastr.error("Please fill up all the fields", "", { positionClass: 'toast-top-center' });
        }
        if (this.arr !== null) {
            for (var i = 0; i < this.arr.length; i++) {
                this.selectedFiles.append('gallery', this.arr[i]);
                console.log(this.arr[i]);
            }
        }
        var values = JSON.stringify(form.value);
        localStorage.setItem('ServiceData', values);
        this.serviceData = localStorage.getItem('ServiceData');
        this.selectedFiles.append('values', this.serviceData);
        if (this.id == 0) {
            this.service.AddService(this.selectedFiles, this.options).subscribe(function (res) {
                _this.show = false;
                _this.toastr.success("Your Service is added", "", { positionClass: 'toast-bottom-right' });
                form.reset();
                _this.route.navigate(['dashboard/myservices']);
            });
        }
        else {
            //to call popup
            this.statusActive = true;
        }
    };
    //Editing the services. Binding the retrieved items to provider
    AddServicesComponent.prototype.getService = function (id) {
        var _this = this;
        if (id == 0) {
            this.imageEdit = false;
            this.provider = {
                categoryId: null,
                name: null,
                description: null,
                userTypeId: null,
                email: null,
                phoneNumber: null,
                workingShift: null,
                status: null,
                createdOn: null,
                isDeleted: null
            };
        }
        else {
            //to show image retrieved from database to carry out edit operation
            this.imageEdit = true;
            this.service.GetServiceByServiceItemId(id).subscribe(function (res) {
                _this.provider = res;
                _this.service.GetImages(_this.id).subscribe(function (result) {
                    _this.imageList = result;
                });
            });
        }
    };
    AddServicesComponent.prototype.deleteImage = function (id) {
        var _this = this;
        this.service.deleteImageById(id).subscribe(function (res) {
            _this.toastr.success("image deleted successfully", "", { positionClass: 'toast-bottom-right' });
            _this.getService(_this.id);
        });
    };
    AddServicesComponent.prototype.destroyConfbox = function () {
        this.statusActive = false;
    };
    AddServicesComponent.prototype.yes = function (form) {
        var _this = this;
        this.selectedFiles.set("gallery", '');
        this.selectedFiles.delete("values");
        if (this.arr !== null) {
            for (var i = 0; i < this.arr.length; i++) {
                this.selectedFiles.append('gallery', this.arr[i]);
                console.log(this.arr[i]);
            }
        }
        //let values = JSON.stringify(form.value);
        //localStorage.setItem('ServiceData', values);
        //this.serviceData = localStorage.getItem('ServiceData');
        this.selectedFiles.append('values', JSON.stringify(form.value));
        this.service.editService(this.id, this.selectedFiles, this.options).subscribe(function (res) {
            _this.toastr.success("Your Service is updated", "", { positionClass: 'toast-bottom-right' });
            form.reset();
            _this.route.navigate(['dashboard/myservices']);
        });
        this.statusActive = false;
    };
    AddServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-addservices',
            template: __webpack_require__(/*! ./addservices.component.html */ "./src/app/component/Dashboard/User/AddServices/addservices.component.html"),
            styles: [__webpack_require__(/*! ./addservices.component.scss */ "./src/app/component/Dashboard/User/AddServices/addservices.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_4__["AddserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddServicesComponent);
    return AddServicesComponent;
}());



/***/ }),

/***/ "./src/app/component/Dashboard/User/ChangePassword/change-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/ChangePassword/change-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-7\">\r\n        <div class=\"inner-wrapper\">\r\n            <h4 class=\"inner-title\">Change Password</h4>\r\n            <form #form=\"ngForm\" class=\"col s12\" method=\"POST\" autocomplete=\"off\">\r\n                <div class=\"demo-form-wrapper\">\r\n                    <mat-form-field>\r\n                        <mat-placeholder>Current Password</mat-placeholder>\r\n                        <input matInput [type]=\"hider ? 'text':'password' \"\r\n                            [(ngModel)]=\"editUserPassword.currentPassword\" name=\"currentPassword\"\r\n                            #currentPassword=\"ngModel\" required>\r\n                        <mat-icon matSuffix (click)=\"hider = !hider\">{{hider ? 'visibility' : 'visibility_off'}}\r\n                        </mat-icon>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"currentPassword.invalid && (currentPassword.dirty || currentPassword.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div class=\"errorMsg\" *ngIf=\"currentPassword.errors.required\">\r\n                            Current Password is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"demo-form-wrapper\">\r\n                    <mat-form-field>\r\n                        <mat-placeholder>New Password</mat-placeholder>\r\n                        <input matInput [type]=\"hide ? 'text':'password' \" [(ngModel)]=\"editUserPassword.newPassword\"\r\n                            name=\"newPassword\" required #newPassword=\"ngModel\"\r\n                            pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{6,}$\">\r\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"newPassword.invalid && (newPassword.dirty || newPassword.touched)\"\r\n                        class=\"alert alert-danger\">\r\n\r\n                        <div class=\"errorMsg\" *ngIf=\"newPassword.errors.required\">\r\n                            New Password is required.\r\n                        </div>\r\n                        <div class=\"errorMsg\" *ngIf=\"newPassword.errors.pattern\">\r\n                            Six or more character password is required and must contain at least one\r\n                            digit, one capital letter and one of these symbols !,@,#,$,%,^,&,*\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"demo-form-wrapper\">\r\n                    <mat-form-field>\r\n                        <mat-placeholder>Confirm Password</mat-placeholder>\r\n                        <input matInput [type]=\"hide ? 'text':'password' \"\r\n                            [(ngModel)]=\"editUserPassword.confirmPassword\" name=\"confirmPassword\"\r\n                            #confirmPassword=\"ngModel\" required appConfirmEqualValidator=\"newPassword\">\r\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div class=\"errorMsg\" *ngIf=\"confirmPassword.errors.required\">\r\n                            Confirm Password Name is required.\r\n                        </div>\r\n                        <div class=\"errorMsg\"\r\n                            *ngIf=\"confirmPassword.errors?.notEqual\">\r\n                            Password and Confirm Password do not match\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <button routerLink=\"/dashboard/editprofile\" class=\"btn btn-primary mr-3\">\r\n                        <mat-icon>chevron_left\r\n                        </mat-icon>Back\r\n                    </button>\r\n\r\n                    <button (click)=\"changePassword(form)\" class=\"btn btn-primary\">Confirm <mat-icon>chevron_right\r\n                        </mat-icon></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/Dashboard/User/ChangePassword/change-password.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/ChangePassword/change-password.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9EYXNoYm9hcmQvVXNlci9DaGFuZ2VQYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/Dashboard/User/ChangePassword/change-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/ChangePassword/change-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user_changePassword_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user.changePassword.model */ "./src/app/models/user.changePassword.model.ts");






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(service, toastr, router) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.editUserPassword = new src_app_models_user_changePassword_model__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordModel"];
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.changePassword = function (form) {
        var _this = this;
        if (form.value.currentPassword == null || form.value.newPassword == null || form.value.confirmPassword == null) {
            this.toastr.error("Please fill up all the fields", "", { positionClass: 'toast-top-center' });
        }
        else if (form.value.newPassword != form.value.confirmPassword) {
            this.toastr.error("Password does not match", "", { positionClass: 'toast-top-center' });
        }
        else {
            this.service.changePassword(form.value).subscribe(function (res) {
                var response = res;
                if (!response.isSuccess) {
                    _this.toastr.error("Please Enter Correct Old Password", "", { positionClass: 'toast-top-center' });
                }
                else {
                    form.reset();
                    _this.toastr.success("Password changed successfully", "", { positionClass: 'toast-top-center' });
                    _this.router.navigate(['/signin']);
                }
            });
        }
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/component/Dashboard/User/ChangePassword/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/component/Dashboard/User/ChangePassword/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__["AddserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/component/Dashboard/User/EditProfile/edit-profile.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/EditProfile/edit-profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-md-8\">\r\n        <div class=\"inner-wrapper\">\r\n            <h4 class=\"inner-title\">Edit your profile</h4>\r\n            <form #form=\"ngForm\" class=\"col s12\" method=\"POST\" autocomplete=\"off\">\r\n\r\n                <div class=\"demo-form-wrapper\">\r\n                    <mat-form-field>\r\n                        <mat-placeholder>Display Name</mat-placeholder>\r\n                        <input matInput type=\"text\" [(ngModel)]=\"editprofile.displayName\" name=\"displayName\"\r\n                            #displayName=\"ngModel\" required>\r\n                        <mat-icon matSuffix>person</mat-icon>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"displayName.invalid && (displayName.dirty || displayName.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div class=\"errorMsg\" *ngIf=\"displayName.errors.required\">\r\n                            Display Name is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"demo-form-wrapper\">\r\n                    <mat-form-field>\r\n                        <mat-placeholder>Address</mat-placeholder>\r\n                        <input matInput type=\"text\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"editprofile.address\"\r\n                            required>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"address.invalid && (address.dirty || address.touched)\" class=\"alert alert-danger\">\r\n                        <div class=\"errorMsg\" *ngIf=\"address.errors.required\">\r\n                            Address is required.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"demo-form-wrapper\">\r\n                    <mat-form-field>\r\n                        <mat-placeholder>Email</mat-placeholder>\r\n                        <input matInput type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"editprofile.email\"\r\n                            required email>\r\n                    </mat-form-field>\r\n                    <mat-icon matSuffix>mail</mat-icon>\r\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                        <div class=\"errorMsg\" *ngIf=\"email.errors.required\">Email is required.</div>\r\n                        <div class=\"errorMsg\" *ngIf=\"email.errors?.email\">\r\n                            Email formate is not valid.\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"demo-form-wrapper\">\r\n                    <mat-form-field>\r\n                        <mat-placeholder>PhoneNumber</mat-placeholder>\r\n                        <input matInput type=\"tel\" name=\"phoneNumber\" #phoneNumber=\"ngModel\"\r\n                            [(ngModel)]=\"editprofile.phoneNumber\" maxlength=\"10\" required>\r\n                        <mat-icon matSuffix>phone</mat-icon>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"phoneNumber.invalid && phoneNumber.touched\" class=\"alert alert-danger\">\r\n                        <div class=\"errorMsg\" *ngIf=\"phoneNumber.errors.required\">\r\n                            PhoneNumber is required and must have 10 digits\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <button (click)=\"onProfileUpdate(form)\" class=\"btn btn-primary\">Update <mat-icon>chevron_right\r\n                    </mat-icon></button>\r\n\r\n                <div class=\"changePassword text-right\">\r\n                    <a (click)=\"changePassword()\">Change password ?</a>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\" style=\"display: none;\">\r\n        <div class=\"inner-wrapper smallPadding\">\r\n            <!-- <form #form=\"ngForm\" class=\"d-flex justify-content-center align-items-center\" method=\"POST\"\r\n                autocomplete=\"off\">\r\n                <div class=\"picture_change\">\r\n                    <img src=\"{{image}}\" onerror=\"this.src='../../../../assets/img/defaultimg.jpg'\">\r\n                </div>\r\n            </form>\r\n            <input type=\"file\"> -->\r\n            <h4 class=\"inner-title\">Change your password ?</h4>\r\n            <div>\r\n                <button (click)=\"changePassword()\" class=\"btn btn-primary mt-3\">Do you want to change\r\n                    password?</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/component/Dashboard/User/EditProfile/edit-profile.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/EditProfile/edit-profile.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picture_change {\n  height: 200px;\n  width: 150px; }\n\nbutton {\n  cursor: pointer;\n  width: 150px; }\n\n.changePassword {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL0VkaXRQcm9maWxlL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxEYXNoYm9hcmRcXFVzZXJcXEVkaXRQcm9maWxlXFxlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWSxFQUNmOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9EYXNoYm9hcmQvVXNlci9FZGl0UHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljdHVyZV9jaGFuZ2V7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG4uY2hhbmdlUGFzc3dvcmR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/Dashboard/User/EditProfile/edit-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/EditProfile/edit-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user_editProfile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user.editProfile.model */ "./src/app/models/user.editProfile.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(service, toastr, router) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.editprofile = new src_app_models_user_editProfile_model__WEBPACK_IMPORTED_MODULE_4__["EditProfileModel"];
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.service.getCurrentUser().subscribe(function (result) {
            _this.editprofile = result;
        });
    };
    EditProfileComponent.prototype.onImageUpload = function (form) {
    };
    EditProfileComponent.prototype.onProfileUpdate = function (form) {
        var _this = this;
        this.service.updateUser(form.value).subscribe(function (res) {
            var response = res;
            if (!response.isSuccess) {
                _this.toastr.error("Please Enter All Fields Correctly", "", { positionClass: 'toast-top-center' });
            }
            else {
                form.reset();
                _this.toastr.success("Updated successfully", "User Updated", { positionClass: 'toast-top-center' });
            }
        });
    };
    EditProfileComponent.prototype.changePassword = function () {
        this.router.navigate(['/dashboard/changePassword']);
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/component/Dashboard/User/EditProfile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/component/Dashboard/User/EditProfile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__["AddserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/component/Dashboard/User/ProviderService/ProviderService.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/ProviderService/ProviderService.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"text-right mb-3\">\r\n      <a class=\"btn btn-primary text-white\" (click)=\"addservices()\">Create service <span class=\"fa fa-plus ml-2\"></span> </a>\r\n  </div>\r\n  <div class=\"dashboard-block my-services\">\r\n\r\n    <!-- <div class=\"header\"><a href=\"#\" class=\"edit-option\"><span></span></a></div> -->\r\n    <ul class=\"services-list\">\r\n      <li *ngFor=\"let item of MyServiceList\" class=\"service-list-item\" [value]=\"item.id\">\r\n        <a [routerLink]=\"['/getService', item.id]\">\r\n          <span>{{item.name}}\r\n          </span>\r\n        </a>\r\n        <div class=\"service-detail\">\r\n          <!--<p class=\"status\"><small>Running</small></p>-->\r\n          <div class=\"service-actions\">\r\n            <ul>\r\n              <li>\r\n                <a (click)=\"edit(item.id)\" class=\"create-new\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\" class=\"pause-resume\">\r\n                  <i class=\"fas fa-pause\"></i>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a (click)=\"delete()\" class=\"delete\">\r\n                  <i class=\"fas fa-trash-alt\"></i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <section class=\"confirmation_box\" *ngIf=\"statusActive\">\r\n    <div class=\"confirmation_wrapper\">\r\n      <a class=\"cross_btn\" [routerLink]=\"\" (click)=\"destroyConfbox()\"><i class=\"fas fa-times\"></i></a>\r\n      <p>Do you want to delete the service ? </p>\r\n      <div class=\"confirmation_actions\">\r\n        <button (click)=\"yes(item.id)\" class=\"btn btn-primary\">Yes</button>\r\n        <button (click)=\"destroyConfbox()\" class=\"btn\">No</button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/component/Dashboard/User/ProviderService/ProviderService.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/ProviderService/ProviderService.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-new {\n  cursor: pointer; }\n\n.dashboard-block {\n  box-shadow: none !important;\n  background: transparent !important; }\n\n.services-list {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  max-height: unset !important; }\n\n.services-list .service-list-item {\n    flex-basis: 100%;\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    padding: 15px;\n    background: #fff;\n    margin-bottom: 15px; }\n\n@media only screen and (min-width: 768px) {\n      .services-list .service-list-item {\n        flex-basis: 48%; } }\n\n.services-list .service-list-item ul {\n      margin-top: 0; }\n\n.services-list .service-list-item ul li {\n        margin-right: 10px;\n        cursor: pointer; }\n\n.confirmation_box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3); }\n\n.confirmation_box .confirmation_wrapper {\n    position: relative;\n    background: #fff;\n    padding-top: 30px;\n    top: 100px; }\n\n@media only screen and (min-width: 768px) {\n      .confirmation_box .confirmation_wrapper {\n        min-width: 320px;\n        top: 0; } }\n\n.confirmation_box .cross_btn {\n    position: absolute;\n    top: 6px;\n    right: 10px; }\n\n.confirmation_box .btn {\n    border-radius: 0; }\n\n.confirmation_box p {\n    padding: 0 20px;\n    margin: 20px 0; }\n\n.confirmation_box .confirmation_actions {\n    display: flex; }\n\n.confirmation_box .confirmation_actions .btn {\n      flex-basis: 50%;\n      cursor: pointer; }\n\n.confirmation_box .confirmation_actions .btn:last-child {\n        background: #252525;\n        color: #fff; }\n\n.service-actions {\n  min-width: 165px; }\n\n.service-actions ul {\n    margin-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL1Byb3ZpZGVyU2VydmljZS9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcRGFzaGJvYXJkXFxVc2VyXFxQcm92aWRlclNlcnZpY2VcXFByb3ZpZGVyU2VydmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL1Byb3ZpZGVyU2VydmljZS9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvRGFzaGJvYXJkL1VzZXIvUHJvdmlkZXJTZXJ2aWNlL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLDRCQUEyQjtFQUMzQixtQ0FBa0MsRUFDckM7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLGdCQUFlO0VBQ2YsNkJBQTRCLEVBb0IvQjs7QUF4QkQ7SUFNUSxpQkFBZ0I7SUFJaEIsb0JBQW1CO0lBQ25CLGNBQWE7SUFDYiwrQkFBOEI7SUFDOUIsY0FBYTtJQUNiLGlCQ2ZJO0lEZ0JKLG9CQUFtQixFQVF0Qjs7QUFoQkc7TUFQUjtRQVFZLGdCQUFlLEVBZXRCLEVBQUE7O0FBdkJMO01BaUJZLGNBQWEsRUFLaEI7O0FBdEJUO1FBbUJnQixtQkFBa0I7UUFDbEIsZ0JBQWUsRUFDbEI7O0FBSWI7RUFDSSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQiwrQkFBMkIsRUFrQzlCOztBQTNDRDtJQVdRLG1CQUFrQjtJQUNsQixpQkN0Q0k7SUR1Q0osa0JBQWlCO0lBQ2pCLFdBQVUsRUFLYjs7QUUxQ0g7TUZ1QkY7UUFnQlksaUJBQWdCO1FBQ2hCLE9BQU0sRUFFYixFQUFBOztBQW5CTDtJQXFCUSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFlBQVcsRUFDZDs7QUF4Qkw7SUEwQlEsaUJBQWdCLEVBQ25COztBQTNCTDtJQTZCUSxnQkFBZTtJQUNmLGVBQWMsRUFDakI7O0FBL0JMO0lBaUNRLGNBQWEsRUFTaEI7O0FBMUNMO01BbUNZLGdCQUFlO01BQ2YsZ0JBQWUsRUFLbEI7O0FBekNUO1FBc0NnQixvQkNqRUQ7UURrRUMsWUNqRUosRURrRUM7O0FBTWI7RUFDSSxpQkFBZ0IsRUFJbkI7O0FBTEQ7SUFHUSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL1Byb3ZpZGVyU2VydmljZS9Qcm92aWRlclNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvbWl4aW5zJztcclxuLmFkZC1uZXd7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRhc2hib2FyZC1ibG9ja3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlcnZpY2VzLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWF4LWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIC5zZXJ2aWNlLWxpc3QtaXRlbXtcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA0OCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbmZpcm1hdGlvbl9ib3h7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLmNvbmZpcm1hdGlvbl93cmFwcGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3Jvc3NfYnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgLmNvbmZpcm1hdGlvbl9hY3Rpb25ze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4dHJhIGZpeGluZ3NcclxuLnNlcnZpY2UtYWN0aW9uc3tcclxuICAgIG1pbi13aWR0aDogMTY1cHg7XHJcbiAgICB1bHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59IiwiLy8gZm9udHNcclxuJGdGb250OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuJGhGb250OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIGNvbG9yc1xyXG4kcmVkOiAjZjkxOTQyO1xyXG4kbXV0ZVJlZDogI2NlM2Q2NjsgXHJcbiRibGFjazogIzI1MjUyNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtZ3JleTogI2ZhZmFmYTtcclxuJGdyZXk6ICNiN2I3Yjc7XHJcbiR0cmFuc0JsdWU6ICNkZWVlZjY7XHJcbiRncmVlbjogIzNkY2U4ODtcclxuJGJsdWU6ICMwNmExY2U7XHJcblxyXG4vLyBjb2xvciByb2xlc1xyXG4kcHJpbWFyeS1jb2xvcjogJG11dGVSZWQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICRibGFjaztcclxuXHJcbi8vICBtZWRpYSBxdWVyeSBicmVha3BvaW50c1xyXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcclxuJGRlc2t0b3Atd2lkdGg6IDEyMDBweDtcclxuJG1lZGl1bS13aWR0aDogMzc1cHg7XHJcblxyXG4gIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyJdfQ== */"

/***/ }),

/***/ "./src/app/component/Dashboard/User/ProviderService/providerService.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/ProviderService/providerService.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProviderServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderServiceComponent", function() { return ProviderServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProviderServiceComponent = /** @class */ (function () {
    function ProviderServiceComponent(service, toastr, router, route) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.statusActive = false;
    }
    ProviderServiceComponent.prototype.ngOnInit = function () {
        this.getServices();
    };
    ProviderServiceComponent.prototype.getServices = function () {
        var _this = this;
        this.service.GetServicesByUserId().subscribe(function (res) {
            _this.MyServiceList = res;
        });
    };
    ProviderServiceComponent.prototype.delete = function () {
        this.statusActive = true;
    };
    ProviderServiceComponent.prototype.edit = function (id) {
        var title = {
            queryParams: {
                "title": 'Edit Service'
            }
        };
        this.router.navigate(['dashboard/edit', id], title);
    };
    ProviderServiceComponent.prototype.yes = function (id) {
        var _this = this;
        this.service.deleteService(id).subscribe(function (result) {
            _this.getServices();
            _this.toastr.success("Deleted Successfully");
        });
        this.statusActive = false;
    };
    ProviderServiceComponent.prototype.destroyConfbox = function () {
        this.statusActive = false;
    };
    ProviderServiceComponent.prototype.addservices = function () {
        this.title = "Add Service";
        this.router.navigate(['dashboard/edit/0']);
    };
    ProviderServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-providerservice',
            template: __webpack_require__(/*! ./ProviderService.component.html */ "./src/app/component/Dashboard/User/ProviderService/ProviderService.component.html"),
            styles: [__webpack_require__(/*! ./ProviderService.component.scss */ "./src/app/component/Dashboard/User/ProviderService/ProviderService.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__["AddserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProviderServiceComponent);
    return ProviderServiceComponent;
}());



/***/ }),

/***/ "./src/app/component/Dashboard/User/UserDetail/UserDetail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/UserDetail/UserDetail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_user_editProfile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/user.editProfile.model */ "./src/app/models/user.editProfile.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(service, toastr, route) {
        this.service = service;
        this.toastr = toastr;
        this.route = route;
        this.MyServiceList = [];
        this.users = new src_app_models_user_editProfile_model__WEBPACK_IMPORTED_MODULE_1__["EditProfileModel"];
        this.statusActive = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCurrentUser().subscribe(function (result) {
            _this.users = result;
        });
        this.getServices();
    };
    UserDetailComponent.prototype.getServices = function () {
        var _this = this;
        this.service.GetServicesByUserId().subscribe(function (res) {
            _this.MyServiceList = res;
        });
    };
    UserDetailComponent.prototype.delete = function () {
        this.statusActive = true;
    };
    // delete(id: number) {
    //   this.service.deleteService(id).subscribe(result => {
    //     this.getServices();
    //     this.toastr.success("Deleted Successfully");
    //   });
    // }
    UserDetailComponent.prototype.edit = function (id) {
        var title = {
            queryParams: {
                "title": 'Edit Service'
            }
        };
        this.route.navigate(['dashboard/edit', id], title);
    };
    UserDetailComponent.prototype.yes = function (id) {
        var _this = this;
        this.service.deleteService(id).subscribe(function (result) {
            _this.getServices();
            _this.toastr.success("Deleted Successfully", "", { positionClass: 'toast-top-center' });
        });
        this.statusActive = false;
    };
    UserDetailComponent.prototype.destroyConfbox = function () {
        this.statusActive = false;
    };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./userdetail.component.html */ "./src/app/component/Dashboard/User/UserDetail/userdetail.component.html"),
            styles: [__webpack_require__(/*! ./userdetail.component.scss */ "./src/app/component/Dashboard/User/UserDetail/userdetail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_4__["AddserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/Dashboard/User/UserDetail/userdetail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/UserDetail/userdetail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- left -->\r\n  <div class=\"col-md-6\">\r\n    <!-- My services -->\r\n    <div class=\"dashboard-block my-services\">\r\n      <div class=\"header\"><span>My Services</span> <a href=\"#\" class=\"edit-option\"><span></span></a></div>\r\n      <ul>\r\n        <li *ngFor=\"let item of MyServiceList\" class=\"service-list-item\" [value]=\"item.id\">\r\n          <a [routerLink]=\"['/getService', item.id]\">\r\n            <span>{{item.name}}\r\n            </span>\r\n          </a>\r\n          <div class=\"service-detail\">\r\n            <!--<p class=\"status\"><small>Running</small></p>-->\r\n            <div class=\"service-actions\">\r\n              <ul>\r\n                <li>\r\n                  <a (click)=\"edit(item.id)\" class=\"create-new\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"#\" class=\"pause-resume\">\r\n                    <i class=\"fas fa-pause\"></i>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a (click)=\"delete(item.id)\" class=\"delete\">\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <section class=\"confirmation_box\" *ngIf=\"statusActive\">\r\n            <div class=\"confirmation_wrapper\">\r\n              <a class=\"cross_btn\" [routerLink]=\"\" (click)=\"destroyConfbox()\"><i class=\"fas fa-times\"></i></a>\r\n              <p>Do you want to delete the service ? </p>\r\n              <div class=\"confirmation_actions\">\r\n                <button (click)=\"yes(item.id)\" class=\"btn btn-primary\">Yes</button>\r\n                <button (click)=\"destroyConfbox()\" class=\"btn\">No</button>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- Service History -->\r\n    <div class=\"dashboard-block history\">\r\n      <div class=\"header\"><span>Recent Activities</span> <a href=\"#\" class=\"edit-option\"><span></span></a></div>\r\n    </div>\r\n  </div>\r\n  <!-- right -->\r\n  <div class=\"col-md-6\">\r\n    <div class=\"dashboard-block profile-detail\">\r\n      <div class=\"header-wrapper\">\r\n        <div class=\"header\">\r\n          <span>My Profile</span> <a title=\"Edit profile\" class=\"edit-option\"><span></span></a>\r\n        </div>\r\n        <div class=\"profile-mid\">\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n            <div>\r\n              <h2>{{users.displayName}}</h2>\r\n              <!-- <p><b>@jennido</b></p> -->\r\n            </div>\r\n            <figure>\r\n              <img src=\"{{image}}\" onerror=\"this.src='../../../../assets/img/defaultimg.jpg'\">\r\n            </figure>\r\n          </div>\r\n          <ul class=\"detail-list\">\r\n            <li>\r\n              <span class=\"lnr lnr-envelope\"></span>\r\n              <a href=\"mailto:{{users.email}}\">{{users.email}}</a>\r\n            </li>\r\n            <!-- location -->\r\n            <!-- contact number -->\r\n            <li>\r\n              <span class=\"lnr lnr-phone-handset\"></span>\r\n              <a href=\"tel:{{users.phoneNumber}}\">{{users.phoneNumber}}</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <img src=\"../../../../../assets/img/profile-back-curve.png\" class=\"background-curve\" alt=\"\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- popup -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/component/Dashboard/User/UserDetail/userdetail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/component/Dashboard/User/UserDetail/userdetail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.dashboard .dashboard-block {\n  border-radius: 15px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0px 7px 22.32px 1.68px rgba(0, 0, 0, 0.09);\n  margin-bottom: 25px; }\n  section.dashboard .dashboard-block .header {\n    display: flex;\n    color: #fff;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 30px; }\n  section.dashboard .dashboard-block .header span {\n      font-weight: 600;\n      font-size: 18px;\n      font-family: \"Oxygen\", sans-serif; }\n  section.dashboard .dashboard-block .header a {\n      display: flex;\n      align-items: center;\n      height: 23px;\n      line-height: 23px; }\n  section.dashboard .dashboard-block .header a span {\n        display: block;\n        line-height: 23px;\n        height: 4px;\n        width: 4px;\n        background: #fff; }\n  section.dashboard .dashboard-block .header a span::before, section.dashboard .dashboard-block .header a span::after {\n          content: \"\";\n          height: 4px;\n          width: 4px;\n          background: #fff;\n          display: block;\n          position: relative; }\n  section.dashboard .dashboard-block .header a span::before {\n          top: -8px; }\n  section.dashboard .dashboard-block .header a span::after {\n          bottom: -4px; }\n  section.dashboard .dashboard-block .header + ul {\n      padding: 15px 30px; }\n  section.dashboard .dashboard-block .header + ul li {\n        flex-basis: 100%;\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 10px; }\n  section.dashboard .dashboard-block .header + ul li:last-child {\n          margin-bottom: 0; }\n  section.dashboard .dashboard-block .header + ul li:last-child .status {\n            margin-bottom: 0; }\n  section.dashboard .dashboard-block .header + ul li:last-child li {\n            margin-bottom: 0; }\n  section.dashboard .dashboard-block .header + ul li ul li {\n          flex-basis: unset;\n          margin-right: 15px; }\n  section.dashboard .dashboard-block .header + ul li ul li a {\n            height: 45px;\n            width: 45px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 50%;\n            overflow: hidden;\n            color: #fff; }\n  section.dashboard .dashboard-block .header + ul li ul li a.create-new {\n              background: #06a1ce; }\n  section.dashboard .dashboard-block .header + ul li ul li a.pause-resume {\n              background: #3dce88; }\n  section.dashboard .dashboard-block .header + ul li ul li a.delete {\n              background: #ce3d66; }\n  section.dashboard .dashboard-block ul {\n    display: flex;\n    flex-wrap: wrap; }\n  section.dashboard .dashboard-block ul li:hover {\n      cursor: pointer; }\n  section.dashboard .dashboard-block ul li:hover .service-actions {\n        opacity: 1; }\n  section.dashboard .dashboard-block ul .service-actions {\n      opacity: 0;\n      transition: all 0.3s ease-in-out; }\n  section.dashboard .dashboard-block h4 {\n    font-size: 18px;\n    color: initial;\n    margin-bottom: 0; }\n  section.dashboard .dashboard-block.my-services .header {\n    background: #06a1ce; }\n  section.dashboard .dashboard-block.history .header {\n    background: #ce3d66; }\n  section.dashboard .dashboard-block.history li small {\n    color: #b7b7b7; }\n  section.dashboard .dashboard-block.history li {\n    margin-bottom: 15px !important; }\n  section.dashboard .dashboard-block.my-services ul, section.dashboard .dashboard-block.history ul {\n    max-height: 300px;\n    overflow-y: auto; }\n  section.dashboard .dashboard-block.profile-detail .header {\n    padding: 0; }\n  section.dashboard .dashboard-block.profile-detail .header-wrapper {\n    padding: 10px 30px;\n    background: #06a1ce;\n    position: relative; }\n  section.dashboard .dashboard-block.profile-detail .header-wrapper div {\n      position: relative;\n      z-index: 1; }\n  section.dashboard .dashboard-block.profile-detail .header-wrapper .background-curve {\n      position: absolute;\n      bottom: 0px;\n      left: 0;\n      right: 0; }\n  section.dashboard .dashboard-block.profile-detail .profile-mid h2, section.dashboard .dashboard-block.profile-detail .profile-mid p {\n    color: #fff; }\n  section.dashboard .dashboard-block.profile-detail .detail-list {\n    padding: 25px 0;\n    border-bottom: 1px solid #b7b7b7;\n    flex-wrap: wrap; }\n  section.dashboard .dashboard-block.profile-detail .detail-list span.lnr {\n      color: #ce3d66;\n      margin-right: 8px; }\n  section.dashboard .dashboard-block.profile-detail .detail-list li {\n      flex-basis: 50%;\n      margin-bottom: 20px; }\n  section.dashboard .dashboard-block.profile-detail .detail-list li:last-child {\n        margin-bottom: 0; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief {\n    padding: 10px 30px;\n    max-height: 400px;\n    overflow-y: auto; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief ul {\n      display: initial; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief ul li::before {\n        content: \"-\";\n        margin-right: 15px; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief h5 {\n      color: initial; }\n  section.dashboard .dashboard-block.profile-detail figure {\n    border-radius: 50%;\n    height: 150px;\n    width: 150px;\n    border: 2px solid #ce3d66;\n    overflow: hidden; }\n  section.dashboard .dashboard-block.profile-detail figure img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .confirmation_box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 2; }\n  .confirmation_box .confirmation_wrapper {\n    position: relative;\n    background: #fff;\n    padding-top: 30px;\n    top: 100px; }\n  @media only screen and (min-width: 768px) {\n      .confirmation_box .confirmation_wrapper {\n        min-width: 320px;\n        top: 0; } }\n  .confirmation_box .cross_btn {\n    position: absolute;\n    top: 6px;\n    right: 10px; }\n  .confirmation_box .btn {\n    border-radius: 0; }\n  .confirmation_box p {\n    padding: 0 20px;\n    margin: 20px 0; }\n  .confirmation_box .confirmation_actions {\n    display: flex; }\n  .confirmation_box .confirmation_actions .btn {\n      flex-basis: 50%;\n      cursor: pointer; }\n  .confirmation_box .confirmation_actions .btn:last-child {\n        background: #252525;\n        color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL1VzZXJEZXRhaWwvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXBwXFxjb21wb25lbnRcXERhc2hib2FyZFxcVXNlclxcVXNlckRldGFpbFxcdXNlcmRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL1VzZXJEZXRhaWwvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL1VzZXJEZXRhaWwvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsaUJDRUk7RURESix1REFBb0Q7RUFDcEQsb0JBQW1CLEVBNE10QjtFQWxOTDtJQVFZLGNBQWE7SUFDYixZQ0hBO0lESUEsb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixtQkFBa0IsRUErRXJCO0VBM0ZUO01BY2dCLGlCQUFnQjtNQUNoQixnQkFBZTtNQUNmLGtDQ2hCWSxFRGlCZjtFQWpCYjtNQW1CZ0IsY0FBYTtNQUNiLG9CQUFtQjtNQUNuQixhQUFZO01BQ1osa0JBQWlCLEVBdUJwQjtFQTdDYjtRQXdCb0IsZUFBYztRQUNkLGtCQUFpQjtRQUNqQixZQUFXO1FBQ1gsV0FBVTtRQUNWLGlCQ3RCUixFRHNDSztFQTVDakI7VUErQndCLFlBQVc7VUFDWCxZQUFXO1VBQ1gsV0FBVTtVQUNWLGlCQzVCWjtVRDZCWSxlQUFjO1VBQ2QsbUJBQWtCLEVBQ3JCO0VBckNyQjtVQXVDd0IsVUFBUyxFQUNaO0VBeENyQjtVQTBDd0IsYUFBWSxFQUNmO0VBM0NyQjtNQStDZ0IsbUJBQWtCLEVBMkNyQjtFQTFGYjtRQWlEb0IsaUJBQWdCO1FBQ2hCLGNBQWE7UUFDYiwrQkFBOEI7UUFDOUIsb0JBQW1CLEVBcUN0QjtFQXpGakI7VUFzRHdCLGlCQUFnQixFQU9uQjtFQTdEckI7WUF3RDRCLGlCQUFnQixFQUNuQjtFQXpEekI7WUEyRDRCLGlCQUFnQixFQUNuQjtFQTVEekI7VUFpRTRCLGtCQUFpQjtVQUNqQixtQkFBa0IsRUFxQnJCO0VBdkZ6QjtZQW9FZ0MsYUFBWTtZQUNaLFlBQVc7WUFDWCxjQUFhO1lBQ2Isb0JBQW1CO1lBQ25CLHdCQUF1QjtZQUN2QixtQkFBa0I7WUFDbEIsaUJBQWdCO1lBQ2hCLFlDckVwQixFRGdGaUI7RUF0RjdCO2NBNkVvQyxvQkNsRXRCLEVEbUVtQjtFQTlFakM7Y0FnRm9DLG9CQ3RFckIsRUR1RWtCO0VBakZqQztjQW1Gb0Msb0JDL0VuQixFRGlGZ0I7RUFyRmpDO0lBNkZZLGNBQWE7SUFDYixnQkFBZSxFQWdCbEI7RUE5R1Q7TUFnR2lCLGdCQUFlLEVBUW5CO0VBeEdiO1FBbUdvQixXQUFVLEVBSWI7RUF2R2pCO01BMEdnQixXQUFVO01BQ1YsaUNBQWdDLEVBRW5DO0VBN0diO0lBZ0hZLGdCQUFlO0lBQ2YsZUFBYztJQUNkLGlCQUFnQixFQUNuQjtFQW5IVDtJQXVIZ0Isb0JDNUdGLEVENkdEO0VBeEhiO0lBNEhnQixvQkN4SEMsRUR5SEo7RUE3SGI7SUErSGdCLGVDdkhGLEVEd0hEO0VBaEliO0lBa0lnQiwrQkFBOEIsRUFDakM7RUFuSWI7SUF3SWdCLGtCQUFpQjtJQUNqQixpQkFBZ0IsRUFDbkI7RUExSWI7SUE4SWdCLFdBQVUsRUFDYjtFQS9JYjtJQWlKZ0IsbUJBQWtCO0lBQ2xCLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFXckI7RUE5SmI7TUFxSm9CLG1CQUFrQjtNQUNsQixXQUFVLEVBQ2I7RUF2SmpCO01BeUpvQixtQkFBa0I7TUFDbEIsWUFBVztNQUNYLFFBQU87TUFDUCxTQUFRLEVBQ1g7RUE3SmpCO0lBaUtvQixZQzNKUixFRDRKSztFQWxLakI7SUFxS2dCLGdCQUFlO0lBQ2YsaUNDOUpGO0lEK0pFLGdCQUFlLEVBWWxCO0VBbkxiO01BeUtvQixlQ3JLSDtNRHNLRyxrQkFBaUIsRUFDcEI7RUEzS2pCO01BNktvQixnQkFBZTtNQUNmLG9CQUFtQixFQUl0QjtFQWxMakI7UUFnTHdCLGlCQUFnQixFQUNuQjtFQWpMckI7SUFxTGdCLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsaUJBQWdCLEVBYW5CO0VBcE1iO01BeUxvQixpQkFBZ0IsRUFPbkI7RUFoTWpCO1FBNEw0QixhQUFZO1FBQ1osbUJBQWtCLEVBQ3JCO0VBOUx6QjtNQWtNb0IsZUFBYyxFQUNqQjtFQW5NakI7SUFzTWdCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsYUFBWTtJQUNaLDBCQ3JNQztJRHNNRCxpQkFBZ0IsRUFNbkI7RUFoTmI7TUE0TW9CLFlBQVc7TUFDWCxhQUFZO01BQ1oscUJBQWlCO1NBQWpCLGtCQUFpQixFQUNwQjtFQU9qQjtFQUNJLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLCtCQUEyQjtFQUMzQixXQUFVLEVBa0NiO0VBNUNEO0lBWVEsbUJBQWtCO0lBQ2xCLGlCQzdOSTtJRDhOSixrQkFBaUI7SUFDakIsV0FBVSxFQUtiO0VFak9IO01GNk1GO1FBaUJZLGlCQUFnQjtRQUNoQixPQUFNLEVBRWIsRUFBQTtFQXBCTDtJQXNCUSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFlBQVcsRUFDZDtFQXpCTDtJQTJCUSxpQkFBZ0IsRUFDbkI7RUE1Qkw7SUE4QlEsZ0JBQWU7SUFDZixlQUFjLEVBQ2pCO0VBaENMO0lBa0NRLGNBQWEsRUFTaEI7RUEzQ0w7TUFvQ1ksZ0JBQWU7TUFDZixnQkFBZSxFQUtsQjtFQTFDVDtRQXVDZ0Isb0JDeFBEO1FEeVBDLFlDeFBKLEVEeVBDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL1VzZXJEZXRhaWwvdXNlcmRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy9taXhpbnMnO1xyXG5zZWN0aW9uLmRhc2hib2FyZHtcclxuICAgIC5kYXNoYm9hcmQtYmxvY2t7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggN3B4IDIyLjMycHggMS42OHB4IHJnYmEoMCwwLDAsIDAuMDkpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRoRm9udDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJisgdWx7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5jcmVhdGUtbmV3e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5wYXVzZS1yZXN1bWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5kZWxldGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtdXRlUmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbGk6aG92ZXJ7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5zZXJ2aWNlLWFjdGlvbnN7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLWFjdGlvbnN7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbml0aWFsO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLm15LXNlcnZpY2Vze1xyXG4gICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5oaXN0b3J5e1xyXG4gICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG11dGVSZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkgc21hbGx7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5teS1zZXJ2aWNlcyxcclxuICAgICAgICAmLmhpc3Rvcnl7XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucHJvZmlsZS1kZXRhaWx7XHJcbiAgICAgICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNmExY2U7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmFja2dyb3VuZC1jdXJ2ZXtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZmlsZS1taWR7XHJcbiAgICAgICAgICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRldGFpbC1saXN0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgc3Bhbi5sbnJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRtdXRlUmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGV0YWlsLWJyaWVme1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCItXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWd1cmV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJG11dGVSZWQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9jb25maXJtYXRpb25cclxuLmNvbmZpcm1hdGlvbl9ib3h7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC5jb25maXJtYXRpb25fd3JhcHBlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNyb3NzX2J0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIH1cclxuICAgIC5jb25maXJtYXRpb25fYWN0aW9uc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5AbWl4aW4gbWVkaXVtIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JG1lZGl1bS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXRpbmEge1xyXG4gIEBtZWRpYVxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJpbnQge1xyXG4gIEBtZWRpYSBwcmludCB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuXHJcblxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzXHJcbkBtaXhpbiBwcmVmaXgoJGRlY2xhcmF0aW9ucywgJHByZWZpeGVzOiAoKSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRkZWNsYXJhdGlvbnMge1xyXG4gICAgQGVhY2ggJHByZWZpeCBpbiAkcHJlZml4ZXMge1xyXG4gICAgICAjeyctJyArICRwcmVmaXggKyAnLScgKyAkcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3V0cHV0IHN0YW5kYXJkIG5vbi1wcmVmaXhlZCBkZWNsYXJhdGlvblxyXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbi8vIHZlbmRvciBwcmVmaXhlcnMiXX0= */"

/***/ }),

/***/ "./src/app/component/Dashboard/User/user.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/Dashboard/User/user.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"dashboard\">\r\n  <mat-sidenav-container>\r\n    <mat-sidenav opened #sidenav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" fixedInViewport=\"fixed\">\r\n      <div class=\"logo left-header\"><a routerLink=\"\"><img src=\"../../../../assets/img/logo-white.png\" alt=\"logo\"></a></div>\r\n      <div class=\"greeting text-center\">\r\n        <p><b>{{users?.displayName}}</b></p>\r\n      </div>\r\n      <ul>\r\n        <li>\r\n          <a (click)=\"dashboard()\">\r\n            <i class=\"material-icons\">dashboard</i>\r\n            Dashboard\r\n          </a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle btn\" data-toggle=\"dropdown\">\r\n            <i class=\"material-icons\">build</i>\r\n            Services\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a (click)=\"myservices()\">My Services</a></li>\r\n            <li><a (click)=\r\n              \"addservices()\">Add Services</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"material-icons\">restore</i>\r\n            History\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\">\r\n            <i class=\"material-icons\">tune</i>\r\n            Preferences\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"right-header\">\r\n              <button mat-button (click)=\"sidenav.toggle();status=!status\" [ngClass]=\"status ? 'active' : ''\"\r\n                class=\"sidebar-toggler\">\r\n                <mat-icon>menu</mat-icon>\r\n              </button>\r\n              <h2>{{title}}</h2>\r\n              <ul class=\"user-actions d-flex\">\r\n\r\n                <li class=\"dropdown thumb\">\r\n                  <a href=\"#\" class=\"dropdown-toggle btn\" data-toggle=\"dropdown\">\r\n                    <img src=\"{{image}}\" onerror=\"this.src='../../../../assets/img/defaultimg.jpg'\">\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"#\">Privacy</a>\r\n                    </li>\r\n                    <li>\r\n                      <a routerLink='/dashboard/editprofile'>Profile</a>\r\n                    </li>\r\n                    <li class=\"dropdown-divider\"></li>\r\n                    <li>\r\n                      <a (click)=\"logout()\"[routerLink]=\"\" >Logout</a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                  <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle btn\">\r\n                    <mat-icon>notifications</mat-icon>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu notifications\">\r\n                    <li>\r\n                      <a href=\"#\">Nofification text here</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">Nofification text here</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">Nofification text here</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"#\">Nofification text here</a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n        <router-outlet name=\"user\"></router-outlet>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</section>"

/***/ }),

/***/ "./src/app/component/Dashboard/User/user.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/Dashboard/User/user.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.dashboard .dashboard-block {\n  border-radius: 15px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0px 7px 22.32px 1.68px rgba(0, 0, 0, 0.09);\n  margin-bottom: 25px; }\n  section.dashboard .dashboard-block .header {\n    display: flex;\n    color: #fff;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 30px; }\n  section.dashboard .dashboard-block .header span {\n      font-weight: 600;\n      font-size: 18px;\n      font-family: \"Oxygen\", sans-serif; }\n  section.dashboard .dashboard-block .header a {\n      display: flex;\n      align-items: center;\n      height: 23px;\n      line-height: 23px; }\n  section.dashboard .dashboard-block .header a span {\n        display: block;\n        line-height: 23px;\n        height: 4px;\n        width: 4px;\n        background: #fff; }\n  section.dashboard .dashboard-block .header a span::before, section.dashboard .dashboard-block .header a span::after {\n          content: \"\";\n          height: 4px;\n          width: 4px;\n          background: #fff;\n          display: block;\n          position: relative; }\n  section.dashboard .dashboard-block .header a span::before {\n          top: -8px; }\n  section.dashboard .dashboard-block .header a span::after {\n          bottom: -4px; }\n  section.dashboard .dashboard-block .header + ul {\n      padding: 15px 30px; }\n  section.dashboard .dashboard-block .header + ul li {\n        flex-basis: 100%;\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 10px; }\n  section.dashboard .dashboard-block .header + ul li:last-child {\n          margin-bottom: 0; }\n  section.dashboard .dashboard-block .header + ul li:last-child .status {\n            margin-bottom: 0; }\n  section.dashboard .dashboard-block .header + ul li:last-child li {\n            margin-bottom: 0; }\n  section.dashboard .dashboard-block .header + ul li ul li {\n          flex-basis: unset;\n          margin-right: 15px; }\n  section.dashboard .dashboard-block .header + ul li ul li a {\n            height: 45px;\n            width: 45px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 50%;\n            overflow: hidden;\n            color: #fff; }\n  section.dashboard .dashboard-block .header + ul li ul li a.create-new {\n              background: #06a1ce; }\n  section.dashboard .dashboard-block .header + ul li ul li a.pause-resume {\n              background: #3dce88; }\n  section.dashboard .dashboard-block .header + ul li ul li a.delete {\n              background: #ce3d66; }\n  section.dashboard .dashboard-block ul {\n    display: flex;\n    flex-wrap: wrap; }\n  section.dashboard .dashboard-block ul li:hover .service-actions {\n      opacity: 1; }\n  section.dashboard .dashboard-block ul .service-actions {\n      opacity: 0;\n      transition: all 0.3s ease-in-out; }\n  section.dashboard .dashboard-block h4 {\n    font-size: 18px;\n    color: initial;\n    margin-bottom: 0; }\n  section.dashboard .dashboard-block.my-services .header {\n    background: #06a1ce; }\n  section.dashboard .dashboard-block.history .header {\n    background: #ce3d66; }\n  section.dashboard .dashboard-block.history li small {\n    color: #b7b7b7; }\n  section.dashboard .dashboard-block.history li {\n    margin-bottom: 15px !important; }\n  section.dashboard .dashboard-block.my-services ul, section.dashboard .dashboard-block.history ul {\n    max-height: 300px;\n    overflow-y: auto; }\n  section.dashboard .dashboard-block.profile-detail .header {\n    padding: 0; }\n  section.dashboard .dashboard-block.profile-detail .header-wrapper {\n    padding: 10px 30px;\n    background: #06a1ce;\n    position: relative; }\n  section.dashboard .dashboard-block.profile-detail .header-wrapper div {\n      position: relative;\n      z-index: 1; }\n  section.dashboard .dashboard-block.profile-detail .header-wrapper .background-curve {\n      position: absolute;\n      bottom: 0px;\n      left: 0;\n      right: 0; }\n  section.dashboard .dashboard-block.profile-detail .profile-mid h2, section.dashboard .dashboard-block.profile-detail .profile-mid p {\n    color: #fff; }\n  section.dashboard .dashboard-block.profile-detail .detail-list {\n    padding: 25px 0;\n    border-bottom: 1px solid #b7b7b7;\n    flex-wrap: wrap; }\n  section.dashboard .dashboard-block.profile-detail .detail-list span.lnr {\n      color: #ce3d66;\n      margin-right: 8px; }\n  section.dashboard .dashboard-block.profile-detail .detail-list li {\n      flex-basis: 50%;\n      margin-bottom: 20px; }\n  section.dashboard .dashboard-block.profile-detail .detail-list li:last-child {\n        margin-bottom: 0; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief {\n    padding: 10px 30px;\n    max-height: 400px;\n    overflow-y: auto; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief ul {\n      display: initial; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief ul li::before {\n        content: \"-\";\n        margin-right: 15px; }\n  section.dashboard .dashboard-block.profile-detail .detail-brief h5 {\n      color: initial; }\n  section.dashboard .dashboard-block.profile-detail figure {\n    border-radius: 50%;\n    height: 150px;\n    width: 150px;\n    border: 2px solid #ce3d66;\n    overflow: hidden; }\n  section.dashboard .dashboard-block.profile-detail figure img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0Rhc2hib2FyZC9Vc2VyL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxEYXNoYm9hcmRcXFVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9EYXNoYm9hcmQvVXNlci9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixpQkNFSTtFRERKLHVEQUFvRDtFQUNwRCxvQkFBbUIsRUFvTXRCO0VBMU1MO0lBUVksY0FBYTtJQUNiLFlDSEE7SURJQSxvQkFBbUI7SUFDbkIsK0JBQThCO0lBQzlCLG1CQUFrQixFQTZFckI7RUF6RlQ7TUFjZ0IsaUJBQWdCO01BQ2hCLGdCQUFlO01BQ2Ysa0NDaEJZLEVEaUJmO0VBakJiO01BbUJnQixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLGFBQVk7TUFDWixrQkFBaUIsRUF1QnBCO0VBN0NiO1FBd0JvQixlQUFjO1FBQ2Qsa0JBQWlCO1FBQ2pCLFlBQVc7UUFDWCxXQUFVO1FBQ1YsaUJDdEJSLEVEc0NLO0VBNUNqQjtVQStCd0IsWUFBVztVQUNYLFlBQVc7VUFDWCxXQUFVO1VBQ1YsaUJDNUJaO1VENkJZLGVBQWM7VUFDZCxtQkFBa0IsRUFDckI7RUFyQ3JCO1VBdUN3QixVQUFTLEVBQ1o7RUF4Q3JCO1VBMEN3QixhQUFZLEVBQ2Y7RUEzQ3JCO01BK0NnQixtQkFBa0IsRUF5Q3JCO0VBeEZiO1FBaURvQixpQkFBZ0I7UUFDaEIsY0FBYTtRQUNiLCtCQUE4QjtRQUM5QixvQkFBbUIsRUFtQ3RCO0VBdkZqQjtVQXNEd0IsaUJBQWdCLEVBT25CO0VBN0RyQjtZQXdENEIsaUJBQWdCLEVBQ25CO0VBekR6QjtZQTJENEIsaUJBQWdCLEVBQ25CO0VBNUR6QjtVQWdFNEIsa0JBQWlCO1VBQ2pCLG1CQUFrQixFQW9CckI7RUFyRnpCO1lBbUVnQyxhQUFZO1lBQ1osWUFBVztZQUNYLGNBQWE7WUFDYixvQkFBbUI7WUFDbkIsd0JBQXVCO1lBQ3ZCLG1CQUFrQjtZQUNsQixpQkFBZ0I7WUFDaEIsWUNwRXBCLEVEOEVpQjtFQXBGN0I7Y0E0RW9DLG9CQ2pFdEIsRURrRW1CO0VBN0VqQztjQStFb0Msb0JDckVyQixFRHNFa0I7RUFoRmpDO2NBa0ZvQyxvQkM5RW5CLEVEK0VnQjtFQW5GakM7SUEyRlksY0FBYTtJQUNiLGdCQUFlLEVBVWxCO0VBdEdUO01BK0ZvQixXQUFVLEVBQ2I7RUFoR2pCO01BbUdnQixXQUFVO01BQ1YsaUNBQWdDLEVBQ25DO0VBckdiO0lBd0dZLGdCQUFlO0lBQ2YsZUFBYztJQUNkLGlCQUFnQixFQUNuQjtFQTNHVDtJQStHZ0Isb0JDcEdGLEVEcUdEO0VBaEhiO0lBb0hnQixvQkNoSEMsRURpSEo7RUFySGI7SUF1SGdCLGVDL0dGLEVEZ0hEO0VBeEhiO0lBMEhnQiwrQkFBOEIsRUFDakM7RUEzSGI7SUFnSWdCLGtCQUFpQjtJQUNqQixpQkFBZ0IsRUFDbkI7RUFsSWI7SUFzSWdCLFdBQVUsRUFDYjtFQXZJYjtJQXlJZ0IsbUJBQWtCO0lBQ2xCLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFXckI7RUF0SmI7TUE2SW9CLG1CQUFrQjtNQUNsQixXQUFVLEVBQ2I7RUEvSWpCO01BaUpvQixtQkFBa0I7TUFDbEIsWUFBVztNQUNYLFFBQU87TUFDUCxTQUFRLEVBQ1g7RUFySmpCO0lBeUpvQixZQ25KUixFRG9KSztFQTFKakI7SUE2SmdCLGdCQUFlO0lBQ2YsaUNDdEpGO0lEdUpFLGdCQUFlLEVBWWxCO0VBM0tiO01BaUtvQixlQzdKSDtNRDhKRyxrQkFBaUIsRUFDcEI7RUFuS2pCO01BcUtvQixnQkFBZTtNQUNmLG9CQUFtQixFQUl0QjtFQTFLakI7UUF3S3dCLGlCQUFnQixFQUNuQjtFQXpLckI7SUE2S2dCLG1CQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsaUJBQWdCLEVBYW5CO0VBNUxiO01BaUxvQixpQkFBZ0IsRUFPbkI7RUF4TGpCO1FBb0w0QixhQUFZO1FBQ1osbUJBQWtCLEVBQ3JCO0VBdEx6QjtNQTBMb0IsZUFBYyxFQUNqQjtFQTNMakI7SUE4TGdCLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsYUFBWTtJQUNaLDBCQzdMQztJRDhMRCxpQkFBZ0IsRUFNbkI7RUF4TWI7TUFvTW9CLFlBQVc7TUFDWCxhQUFZO01BQ1oscUJBQWlCO1NBQWpCLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9EYXNoYm9hcmQvVXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcbnNlY3Rpb24uZGFzaGJvYXJke1xyXG4gICAgLmRhc2hib2FyZC1ibG9ja3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggMjIuMzJweCAxLjY4cHggcmdiYSgwLDAsMCwgMC4wOSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGhGb250O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmKyB1bHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0dXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuY3JlYXRlLW5ld3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucGF1c2UtcmVzdW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuZGVsZXRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbXV0ZVJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAuc2VydmljZS1hY3Rpb25ze1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtYWN0aW9uc3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogaW5pdGlhbDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5teS1zZXJ2aWNlc3tcclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaGlzdG9yeXtcclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRtdXRlUmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHNtYWxse1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubXktc2VydmljZXMsXHJcbiAgICAgICAgJi5oaXN0b3J5e1xyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnByb2ZpbGUtZGV0YWlse1xyXG4gICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDZhMWNlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJhY2tncm91bmQtY3VydmV7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2ZpbGUtbWlke1xyXG4gICAgICAgICAgICAgICAgaDIscHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXRhaWwtbGlzdHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleTtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIHNwYW4ubG5ye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbXV0ZVJlZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRldGFpbC1icmllZntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlndXJle1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRtdXRlUmVkO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIvLyBmb250c1xyXG4kZ0ZvbnQ6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4kaEZvbnQ6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gY29sb3JzXHJcbiRyZWQ6ICNmOTE5NDI7XHJcbiRtdXRlUmVkOiAjY2UzZDY2OyBcclxuJGJsYWNrOiAjMjUyNTI1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS1ncmV5OiAjZmFmYWZhO1xyXG4kZ3JleTogI2I3YjdiNztcclxuJHRyYW5zQmx1ZTogI2RlZWVmNjtcclxuJGdyZWVuOiAjM2RjZTg4O1xyXG4kYmx1ZTogIzA2YTFjZTtcclxuXHJcbi8vIGNvbG9yIHJvbGVzXHJcbiRwcmltYXJ5LWNvbG9yOiAkbXV0ZVJlZDtcclxuJHNlY29uZGFyeS1jb2xvcjogJGJsYWNrO1xyXG5cclxuLy8gIG1lZGlhIHF1ZXJ5IGJyZWFrcG9pbnRzXHJcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xyXG4kZGVza3RvcC13aWR0aDogMTIwMHB4O1xyXG4kbWVkaXVtLXdpZHRoOiAzNzVweDtcclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/component/Dashboard/User/user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/Dashboard/User/user.component.ts ***!
  \************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(route, router, service, changeDetectorRef, media) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCurrentUser().subscribe(function (result) {
            _this.users = result;
        });
        this.title = localStorage.getItem('title');
        this.route.queryParams.subscribe(function (params) {
            _this.title = params["title"];
        });
        this.getServices();
    };
    UserComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['']);
    };
    UserComponent.prototype.addservices = function () {
        this.title = "Add Service";
        this.router.navigate(['edit/0'], { relativeTo: this.route });
    };
    UserComponent.prototype.myservices = function () {
        this.title = "My Services";
        this.router.navigate(['myservices'], { relativeTo: this.route });
    };
    UserComponent.prototype.dashboard = function () {
        this.title = "Dashboard";
        this.router.navigate(['userdetail'], { relativeTo: this.route });
    };
    UserComponent.prototype.getServices = function () {
        var _this = this;
        this.service.GetServicesByUserId().subscribe(function (res) {
            _this.MyServiceList = res;
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        console.log("ram");
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/component/Dashboard/User/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/component/Dashboard/User/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__["AddserviceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/component/Dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/Dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user *ngIf=\"role===roleType.user\"></app-user>\r\n<app-admin *ngIf=\"role===roleType.admin\"></app-admin>"

/***/ }),

/***/ "./src/app/component/Dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/Dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9EYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/Dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/Dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Utility_RoleTypeModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Utility/RoleTypeModel */ "./src/app/Utility/RoleTypeModel.ts");
/* harmony import */ var src_app_services_Dashboard_Dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Dashboard/Dashboard.service */ "./src/app/services/Dashboard/Dashboard.service.ts");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dashboardService, service, toastr) {
        this.router = router;
        this.dashboardService = dashboardService;
        this.service = service;
        this.toastr = toastr;
        this.roleType = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.roleType = new src_app_Utility_RoleTypeModel__WEBPACK_IMPORTED_MODULE_4__["RoleTypeModel"]();
        if (!this.IsValidUser())
            this.router.navigate([""]);
    };
    DashboardComponent.prototype.IsValidUser = function () {
        var local = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
        var token = local !== null ? local.token : null;
        if (token) {
            this.role = this.dashboardService.getUserRole(token).toLowerCase();
            localStorage.setItem('isUserLogged', "true");
            return true;
        }
        return false;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/component/Dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/component/Dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_Dashboard_Dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_6__["AddserviceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/component/Footer/about-us/aboutUs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/Footer/about-us/aboutUs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about-us works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/Footer/about-us/aboutUs.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/Footer/about-us/aboutUs.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9Gb290ZXIvYWJvdXQtdXMvYWJvdXRVcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/Footer/about-us/aboutUs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/Footer/about-us/aboutUs.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutUs',
            template: __webpack_require__(/*! ./aboutUs.component.html */ "./src/app/component/Footer/about-us/aboutUs.component.html"),
            styles: [__webpack_require__(/*! ./aboutUs.component.scss */ "./src/app/component/Footer/about-us/aboutUs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/component/Footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/Footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\r\n  <div class=\"footer-form\">\r\n    <h2>Grow with Us</h2>\r\n    <form action=\"\" class=\"rounded mx-auto d-flex\">\r\n      <input type=\"text\" placeholder=\"Enter your email\">\r\n      <button class=\"btn btn-primary\"><i class=\"fab fa-telegram-plane\"></i>Subscribe</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"footer-links\">\r\n    <ul class=\"d-flex justify-content-between mx-auto flex-wrap flex-sm-nowrap\">\r\n      <li>\r\n          <a routerLink=\"/home\" >Home</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/aboutus\">About us</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/privacypolicy\">Privacy policy</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/others\">Others</a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/terms\">terms & Conditions</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"copyright\">\r\n    <p>Copyright ServiceFinder.Inc , 2019. All Rights Reserved</p>\r\n  </div>\r\n  <div class=\"social\">\r\n    <ul class=\"d-inline-flex justify-content-between mb-0\">\r\n      <li>\r\n          <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\r\n      </li>\r\n      <li>\r\n          <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\r\n      </li>\r\n      <li>\r\n          <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/component/Footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/Footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 40px 15px 25px;\n  background: #252525;\n  color: #fff; }\n  footer a {\n    color: #fff;\n    text-transform: uppercase; }\n  footer a:hover {\n      color: #f91942; }\n  footer .footer-form {\n    margin-bottom: 40px; }\n  @media only screen and (min-width: 768px) {\n      footer .footer-form {\n        margin-bottom: 80px; } }\n  footer .footer-form form {\n      overflow: hidden;\n      height: 50px;\n      max-width: 500px; }\n  footer .footer-form .btn {\n      border-radius: 0;\n      flex-basis: 160px;\n      display: flex;\n      align-items: center; }\n  footer .footer-form .btn i {\n        margin-right: 20px; }\n  @media screen and (max-width: 575px) {\n        footer .footer-form .btn {\n          padding-left: 3px; }\n          footer .footer-form .btn i {\n            margin: 0 8px; } }\n  footer .footer-form input {\n      flex-grow: 1;\n      padding: 0 20px; }\n  footer .footer-form h2 {\n      margin-bottom: 25px;\n      color: #fff; }\n  footer .footer-links ul {\n    max-width: 680px; }\n  @media only screen and (max-width: 575px) {\n      footer .footer-links ul li {\n        flex-basis: 100%;\n        margin-bottom: 10px; } }\n  footer .social li {\n    margin: 0 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0Zvb3Rlci9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcRm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9Gb290ZXIvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L0Zvb3Rlci9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksd0JBQXVCO0VBQ3ZCLG9CQ0VXO0VERFgsWUNFUSxFRG9EWDtFQXpERDtJQUtRLFlDQUk7SURJSiwwQkFBeUIsRUFDNUI7RUFWTDtNQU9ZLGVDTEMsRURNSjtFQVJUO0lBWVEsb0JBQW1CLEVBZ0N0QjtFRXBDSDtNRlJGO1FBY1ksb0JBQW1CLEVBOEIxQixFQUFBO0VBNUNMO01BaUJZLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osaUJBQWdCLEVBQ25CO0VBcEJUO01Bc0JZLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsY0FBYTtNQUNiLG9CQUFtQixFQVV0QjtFQW5DVDtRQTJCZ0IsbUJBQWtCLEVBQ3JCO0VBQ0Q7UUE3Qlo7VUE4QmdCLGtCQUFpQixFQUt4QjtVQW5DVDtZQWdDb0IsY0FBYSxFQUNoQixFQUFBO0VBakNqQjtNQXFDWSxhQUFZO01BQ1osZ0JBQWUsRUFDbEI7RUF2Q1Q7TUF5Q1ksb0JBQW1CO01BQ25CLFlDckNBLEVEc0NIO0VBM0NUO0lBOENRLGlCQUFnQixFQU9uQjtFQUxPO01BaERaO1FBaURnQixpQkFBZ0I7UUFDaEIsb0JBQW1CLEVBRTFCLEVBQUE7RUFwRFQ7SUF1RFEsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9Gb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcblxyXG5mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDE1cHggMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICRibGFjaztcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMTYwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1saW5rcyB1bHtcclxuICAgICAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBsaXtcclxuICAgICAgICBtYXJnaW46IDAgMTJweDtcclxuICAgIH1cclxufSIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5AbWl4aW4gbWVkaXVtIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JG1lZGl1bS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXRpbmEge1xyXG4gIEBtZWRpYVxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJpbnQge1xyXG4gIEBtZWRpYSBwcmludCB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuXHJcblxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzXHJcbkBtaXhpbiBwcmVmaXgoJGRlY2xhcmF0aW9ucywgJHByZWZpeGVzOiAoKSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRkZWNsYXJhdGlvbnMge1xyXG4gICAgQGVhY2ggJHByZWZpeCBpbiAkcHJlZml4ZXMge1xyXG4gICAgICAjeyctJyArICRwcmVmaXggKyAnLScgKyAkcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3V0cHV0IHN0YW5kYXJkIG5vbi1wcmVmaXhlZCBkZWNsYXJhdGlvblxyXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbi8vIHZlbmRvciBwcmVmaXhlcnMiXX0= */"

/***/ }),

/***/ "./src/app/component/Footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/Footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/Footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/component/Footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/Footer/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/Footer/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/Footer/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/component/Footer/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9Gb290ZXIvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/Footer/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/Footer/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/Footer/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/component/Footer/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/Footer/others/others.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/Footer/others/others.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  others works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/Footer/others/others.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/component/Footer/others/others.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9Gb290ZXIvb3RoZXJzL290aGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/Footer/others/others.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/Footer/others/others.component.ts ***!
  \*************************************************************/
/*! exports provided: OthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function() { return OthersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OthersComponent = /** @class */ (function () {
    function OthersComponent() {
    }
    OthersComponent.prototype.ngOnInit = function () {
    };
    OthersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-others',
            template: __webpack_require__(/*! ./others.component.html */ "./src/app/component/Footer/others/others.component.html"),
            styles: [__webpack_require__(/*! ./others.component.scss */ "./src/app/component/Footer/others/others.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OthersComponent);
    return OthersComponent;
}());



/***/ }),

/***/ "./src/app/component/Footer/privacy-policy/privacyPolicy.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/Footer/privacy-policy/privacyPolicy.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  privacy-policy works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/Footer/privacy-policy/privacyPolicy.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/Footer/privacy-policy/privacyPolicy.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9Gb290ZXIvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeVBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/component/Footer/privacy-policy/privacyPolicy.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/Footer/privacy-policy/privacyPolicy.component.ts ***!
  \****************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacyPolicy',
            template: __webpack_require__(/*! ./privacyPolicy.component.html */ "./src/app/component/Footer/privacy-policy/privacyPolicy.component.html"),
            styles: [__webpack_require__(/*! ./privacyPolicy.component.scss */ "./src/app/component/Footer/privacy-policy/privacyPolicy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  terms-and-conditions works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9Gb290ZXIvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXNBbmRDb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termsAndConditions',
            template: __webpack_require__(/*! ./termsAndConditions.component.html */ "./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.html"),
            styles: [__webpack_require__(/*! ./termsAndConditions.component.scss */ "./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());



/***/ }),

/***/ "./src/app/component/ForgotPassword/forgotPassword.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/ForgotPassword/forgotPassword.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"login-forms d-flex justify-content-center align-items-center\">\r\n  <!-- login/'signup wrapper' -->\r\n  <div class=\"tab-wrapper\">\r\n    <div class=\"tab-menu\">\r\n      <!-- tab-menu -->\r\n      <ul class=\"nav nav-tabs\" id=\"loginSignupTab\" role=\"tablist\">\r\n        <li class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\" id=\"loginTab\" href=\"#loginForm\">Reset Your Password\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- tab contents -->\r\n    <div class=\"tab-content\">\r\n      <!-- login -->\r\n      <div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"loginForm\">\r\n        <div class=\"login-wrapper\">\r\n          <form #form=\"ngForm\" class=\"dark-form\" autocomplete=\"off\" method=\"POST\">\r\n            <mat-form-field>\r\n              <input matInput email name=\"email\" #email=\"ngModel\" [(ngModel)]=\"useremail\" placeholder=\"Email\" required>\r\n              <mat-icon matSuffix>person</mat-icon>\r\n            </mat-form-field>\r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n              <div class=\"errorMsg\" *ngIf=\"email.errors.required\">Email is required.</div>\r\n              <div class=\"errorMsg\" *ngIf=\"email.errors?.email\">\r\n                Email formate is not valid.\r\n              </div>\r\n            </div>\r\n\r\n            <button type=\"submit\" (click)=\"onPassReset(email)\" class=\"btn btn-primary\">\r\n              Submit <i class=\"material-icons\">arrow_forward</i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/ForgotPassword/forgotPassword.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/component/ForgotPassword/forgotPassword.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.login-forms {\n  background: url('loginbg.png');\n  background-size: cover;\n  background-position: center; }\n  @media only screen and (min-width: 768px) {\n    section.login-forms {\n      height: 100vh;\n      margin-top: -125px; } }\n  section.login-forms .tab-wrapper {\n    background: rgba(0, 0, 0, 0.8);\n    padding: 30px 15px;\n    border-radius: 8px;\n    flex-basis: 90%; }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .tab-wrapper {\n        padding: 50px;\n        width: 100%;\n        max-width: 450px; } }\n  section.login-forms .nav-tabs {\n    border: 0; }\n  section.login-forms .nav-tabs .nav-link {\n      background: none;\n      border: none;\n      color: #fff;\n      opacity: 0.5;\n      font-size: 18px; }\n  section.login-forms .nav-tabs .nav-link:first-child {\n        padding-left: 0; }\n  section.login-forms .nav-tabs .nav-link.active {\n        opacity: 1; }\n  section.login-forms .nav-tabs .nav-link.active::after {\n          content: \"\";\n          display: block;\n          height: 2px;\n          background: #f91942; }\n  section.login-forms form.dark-form {\n    margin-top: 15px; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field {\n      display: block;\n      width: 100%;\n      color: white !important; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field .mat-form-field-label {\n        opacity: 0; }\n  section.login-forms .login-wrapper {\n    display: flex; }\n  @media screen and (max-width: 767px) {\n      section.login-forms .login-wrapper {\n        flex-direction: column; } }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .login-wrapper form, section.login-forms .login-wrapper .quick-sign-in {\n        flex-basis: 100%; } }\n  section.login-forms .login-wrapper .quick-sign-in {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      margin-top: 20px; }\n  @media only screen and (min-width: 768px) {\n        section.login-forms .login-wrapper .quick-sign-in {\n          margin-top: 0;\n          align-items: center;\n          justify-content: center; }\n          section.login-forms .login-wrapper .quick-sign-in h4 {\n            text-align: center; } }\n  section.login-forms .login-wrapper .quick-sign-in h4 {\n        display: inline-block;\n        color: #fff;\n        font-size: 14px;\n        font-weight: 600; }\n  section.login-forms .login-wrapper .quick-sign-in h4::after {\n          content: \"\";\n          height: 2px;\n          width: 100px;\n          background-color: #fff;\n          margin-top: 4px;\n          display: block; }\n  @media only screen and (min-width: 768px) {\n            section.login-forms .login-wrapper .quick-sign-in h4::after {\n              width: 100%; } }\n  section.login-forms .login-wrapper .quick-sign-in ul {\n        display: flex; }\n  section.login-forms .login-wrapper .quick-sign-in ul li {\n          margin: 10px; }\n  section.login-forms .login-wrapper .quick-sign-in ul a {\n          font-size: 24px;\n          color: #fff; }\n  section.login-forms .login-wrapper .quick-sign-in ul a:hover {\n            color: #f91942; }\n  section.login-forms .login-wrapper .btn.btn-primary {\n      display: flex; }\n  section.login-forms .login-wrapper .btn.btn-primary i {\n        margin-left: 15px; }\n  section.login-forms .login-wrapper p {\n      margin-top: 10px;\n      color: #fff; }\n  section.login-forms .login-wrapper p a {\n        color: #f91942; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0ZvcmdvdFBhc3N3b3JkL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxGb3Jnb3RQYXNzd29yZFxcZm9yZ290UGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9Gb3Jnb3RQYXNzd29yZC9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvRm9yZ290UGFzc3dvcmQvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLCtCQUFnRDtFQUNoRCx1QkFBc0I7RUFDdEIsNEJBQTJCLEVBb0o1QjtFQ2hKQztJRFJGO01BT0ksY0FBYTtNQUNiLG1CQUFrQixFQWdKckIsRUFBQTtFQXhKRDtJQVlJLCtCQUEyQjtJQUMzQixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGdCQUFlLEVBT2hCO0VDZEQ7TURSRjtRQWtCTSxjQUFhO1FBQ2IsWUFBVztRQUNYLGlCQUFnQixFQUVuQixFQUFBO0VBdEJIO0lBeUJJLFVBQVMsRUF3QlY7RUFqREg7TUE0Qk0saUJBQWdCO01BQ2hCLGFBQVk7TUFDWixZRXpCTTtNRjBCTixhQUFZO01BQ1osZ0JBQWUsRUFnQmhCO0VBaERMO1FBbUNRLGdCQUFlLEVBQ2hCO0VBcENQO1FBdUNRLFdBQVUsRUFRWDtFQS9DUDtVQTBDVSxZQUFXO1VBQ1gsZUFBYztVQUNkLFlBQVc7VUFDWCxvQkUzQ0csRUY0Q0o7RUE5Q1Q7SUFvREksaUJBQWdCLEVBV2pCO0VBL0RIO01BdURNLGVBQWM7TUFDZCxZQUFXO01BQ1gsd0JBQXFDLEVBS3RDO0VBOURMO1FBNERRLFdBQVUsRUFDWDtFQTdEUDtJQWtFSSxjQUFhLEVBbUZkO0VBakZDO01BcEVKO1FBcUVNLHVCQUFzQixFQWdGekIsRUFBQTtFQzdJRDtNRFJGO1FBMEVRLGlCQUFnQixFQUVuQixFQUFBO0VBNUVMO01BK0VNLGNBQWE7TUFDYixnQkFBZTtNQUNmLHVCQUFzQjtNQUN0QixpQkFBZ0IsRUFpRGpCO0VDM0hIO1FEUkY7VUFxRlEsY0FBYTtVQUNiLG9CQUFtQjtVQUNuQix3QkFBdUIsRUE0QzFCO1VBbklMO1lBMEZVLG1CQUFrQixFQUNuQixFQUFBO0VBM0ZUO1FBK0ZRLHNCQUFxQjtRQUNyQixZRTNGSTtRRjRGSixnQkFBZTtRQUNmLGlCQUFnQixFQWVqQjtFQWpIUDtVQXFHVSxZQUFXO1VBQ1gsWUFBVztVQUNYLGFBQVk7VUFNWix1QkV4R0U7VUZ5R0YsZ0JBQWU7VUFDZixlQUFjLEVBQ2Y7RUN4R1A7WURSRjtjQTBHWSxZQUFXLEVBTWQsRUFBQTtFQWhIVDtRQW9IUSxjQUFhLEVBY2Q7RUFsSVA7VUF1SFUsYUFBWSxFQUNiO0VBeEhUO1VBMkhVLGdCQUFlO1VBQ2YsWUV2SEUsRUY0SEg7RUFqSVQ7WUErSFksZUU3SEMsRUY4SEY7RUFoSVg7TUFzSU0sY0FBYSxFQUtkO0VBM0lMO1FBeUlRLGtCQUFpQixFQUNsQjtFQTFJUDtNQThJTSxpQkFBZ0I7TUFDaEIsWUUxSU0sRUYrSVA7RUFwSkw7UUFrSlEsZUVoSkssRUZpSk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvRm9yZ290UGFzc3dvcmQvZm9yZ290UGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvbWl4aW5zJztcclxuXHJcbnNlY3Rpb24ubG9naW4tZm9ybXMge1xyXG4gIC8vIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW5iZy5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi10b3A6IC0xMjVweDtcclxuICB9XHJcblxyXG4gIC50YWItd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmbGV4LWJhc2lzOiA5MCU7XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2LXRhYnMge1xyXG4gICAgYm9yZGVyOiAwO1xyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtLmRhcmstZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9naW4td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSwgLnF1aWNrLXNpZ24taW4ge1xyXG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucXVpY2stc2lnbi1pbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgICAgICAgICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGFuZ3VsYXIgZm9ybSByZXNldHRcclxuICAvLyBhbmd1bGFyIGZvcm0gcmVzZXR0XHJcbn1cclxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/ForgotPassword/forgotPassword.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/ForgotPassword/forgotPassword.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/SignIn/usersignin.service */ "./src/app/services/SignIn/usersignin.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(signInService, toastr) {
        this.signInService = signInService;
        this.toastr = toastr;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.onPassReset = function () {
        var _this = this;
        debugger;
        this.signInService.forgotpassword(this.useremail).subscribe(function (res) {
            var response = res;
            if (!response.isSuccess) {
                _this.toastr.error("Invalid Email", "", { positionClass: 'toast-top-center' });
            }
            else {
                _this.toastr.success("Password reset link has been sent to your email", "please Confirm", { positionClass: 'toast-top-center' });
                localStorage.setItem('resetPasswordToken', response.token);
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotPassword',
            template: __webpack_require__(/*! ./forgotPassword.component.html */ "./src/app/component/ForgotPassword/forgotPassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotPassword.component.scss */ "./src/app/component/ForgotPassword/forgotPassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_2__["UserSignInService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/component/Header/categories/categories.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/component/Header/categories/categories.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"our-services\">\r\n  <div class=\"container\">\r\n    <ul class=\"services-wrapper\">\r\n      <li class=\"category\">\r\n        <a href=\"#\">\r\n          <h4 class=\"name\">Categories <span><img src=\"../../../../assets/img/serviceCategoryIcons/location.svg\"\r\n                alt=\"\"></span></h4>\r\n          <ul class=\"sub-category\">\r\n            <li *ngFor=\"let item of categoryList\" [value]=\"item.Id\">{{item.name}}</li>\r\n          </ul>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/Header/categories/categories.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/component/Header/categories/categories.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.our-services {\n  padding-bottom: 20px; }\n  section.our-services a:hover {\n    color: initial; }\n  section.our-services .services-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around; }\n  @media only screen and (min-width: 1200px) {\n      section.our-services .services-wrapper {\n        justify-content: space-between; } }\n  section.our-services .services-wrapper > li {\n      max-width: 341px;\n      min-width: 300px;\n      background: #fafafa;\n      padding: 25px 30px;\n      margin-bottom: 50px;\n      border-radius: 8px;\n      font-family: \"Oxygen\", sans-serif;\n      font-size: 16px;\n      font-weight: 500; }\n  @media only screen and (min-width: 1200px) {\n        section.our-services .services-wrapper > li {\n          flex-basis: 23%; } }\n  section.our-services .services-wrapper > li:hover {\n        box-shadow: 7px 7px 24px rgba(0, 0, 0, 0.09); }\n  section.our-services .services-wrapper .sub-category li {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 16px; }\n  section.our-services .services-wrapper h4 {\n      margin-bottom: 50px;\n      font-size: 20px;\n      font-weight: 600;\n      position: relative;\n      padding-top: 15px; }\n  section.our-services .services-wrapper h4 span {\n        position: absolute;\n        height: 52px;\n        width: 52px;\n        background: #ce3d66;\n        border-radius: 50%;\n        right: 0;\n        top: 0;\n        padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0hlYWRlci9jYXRlZ29yaWVzL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxIZWFkZXJcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9IZWFkZXIvY2F0ZWdvcmllcy9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvSGVhZGVyL2NhdGVnb3JpZXMvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFvQixFQXNEdkI7RUF2REQ7SUFHUSxlQUFjLEVBQ2pCO0VBSkw7SUFNUSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZiw4QkFBNkIsRUE4Q2hDO0VDdkNIO01EZkY7UUFVWSwrQkFBOEIsRUE0Q3JDLEVBQUE7RUF0REw7TUFnQlksaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixvQkVYUTtNRllSLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsbUJBQWtCO01BQ2xCLGtDRXRCZ0I7TUZ1QmhCLGdCQUFlO01BQ2YsaUJBQWdCLEVBSW5CO0VDYlA7UURmRjtVQWNnQixnQkFBZSxFQWN0QixFQUFBO0VBNUJUO1FBMEJnQiw2Q0FBeUMsRUFDNUM7RUEzQmI7TUErQmdCLGNBQWE7TUFDYiwrQkFBOEI7TUFDOUIsb0JBQW1CLEVBQ3RCO0VBbENiO01Bc0NZLG9CQUFtQjtNQUNuQixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsa0JBQWlCLEVBV3BCO0VBckRUO1FBNENnQixtQkFBa0I7UUFDbEIsYUFBWTtRQUNaLFlBQVc7UUFDWCxvQkUzQ0M7UUY0Q0QsbUJBQWtCO1FBQ2xCLFNBQVE7UUFDUixPQUFNO1FBQ04sY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9IZWFkZXIvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcbnNlY3Rpb24ub3VyLXNlcnZpY2Vze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2VzLXdyYXBwZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmPiBsaXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDIzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM0MXB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtZ3JleTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaEZvbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDdweCA3cHggMjRweCByZ2JhKDAsMCwwLDAuMDkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWItY2F0ZWdvcnl7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/Header/categories/categories.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/Header/categories/categories.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(service) {
        this.service = service;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategory();
    };
    CategoriesComponent.prototype.getCategory = function () {
        var _this = this;
        this.service.GetCategories().subscribe(function (result) {
            _this.categoryList = result;
            console.log(_this.categoryList);
        });
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/component/Header/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/component/Header/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_1__["AddserviceService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/component/Header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/Header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"d-flex\" [ngClass]=\"{'d-flex':true,'sticky':isSticky}\">\r\n  <div class=\"header-wrapper d-flex justify-content-between flex-wrap align-items-center mx-auto\">\r\n    <div class=\"logo d-flex justify-content-between align-items-center\">\r\n      <a routerLink=\"/\">\r\n        <img src=\"../../../assets/img/logo.png\" alt=\"brand-logo\">\r\n      </a>\r\n      <a href=\"#\" id=\"navigation-toggler\" data-toggle=\"collapse\" data-target=\"#main-menu\" class=\"mobile-show collapsed\">\r\n        <span class=\"hamburger\"></span>\r\n      </a>\r\n    </div>\r\n    <div class=\"navigation-links collapse\" id=\"main-menu\">\r\n      <ul class=\"d-flex justify-content-md-between align-items-sm-center flex-md-row flex-column mb-0\">\r\n        <li>\r\n          <a routerLink=\"/services\">Services</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"#\">Help</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/categories\">Categories</a>\r\n        </li>\r\n        <li class=\"position-relative no-underline\">\r\n          <a routerLink=\"/signin\" *ngIf=\"!IsUserLogged()\"> <i class=\"far fa-user-circle\"></i> Login</a>\r\n          <a routerLink=\"/dashboard/userdetail\" *ngIf=\"IsUserLogged()\" (mouseenter)=\"hovered()\" (mouseleave)=\"unhovered()\"> <i\r\n              class=\"far fa-user-circle\"></i> Welcome,\r\n            {{users?.displayName}}</a>\r\n          <a (click)=\"logout()\" *ngIf=\"hoverState\" class=\"logout_dropdown btn btn-primary\" (mouseenter)=\"hovered()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/component/Header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/Header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  padding: 0 15px;\n  height: 80px;\n  position: relative;\n  z-index: 1; }\n  @media only screen and (min-width: 768px) {\n    header {\n      height: 125px; } }\n  header .header-wrapper {\n    max-width: 1520px;\n    width: 100%; }\n  header a {\n    color: #252525;\n    font-size: 14px;\n    padding: 5px; }\n  header a.btn {\n      color: #fff;\n      font-weight: 600;\n      padding: 5px 12px; }\n  header a.btn:hover {\n        color: #fff; }\n  header a i {\n      font-size: 18px; }\n  header a:hover {\n      color: #f91942; }\n  header .navigation-links {\n    position: fixed;\n    left: -300px;\n    top: 0;\n    transition: all 0.5s ease-in-out;\n    display: block; }\n  @media only screen and (max-width: 767px) {\n      header .navigation-links {\n        background: #252525;\n        z-index: 1;\n        flex-basis: 300px;\n        min-width: 300px;\n        height: 100vh !important; }\n        header .navigation-links li:hover, header .navigation-links li:focus {\n          background: #f91942; }\n        header .navigation-links a {\n          color: #fff;\n          display: block; }\n        header .navigation-links li {\n          width: 100%;\n          padding: 10px 20px; }\n        header .navigation-links ul {\n          height: 100vh;\n          justify-content: flex-start; } }\n  @media only screen and (min-width: 768px) {\n      header .navigation-links {\n        flex-basis: 570px;\n        max-width: 570px;\n        position: static; } }\n  header .navigation-links.show {\n      left: 0; }\n  @media only screen and (min-width: 768px) {\n      header .navigation-links a:not(.btn) {\n        position: relative; }\n        header .navigation-links a:not(.btn)::after {\n          position: absolute;\n          width: 100%;\n          height: 2px;\n          background: #f91942;\n          content: \"\";\n          opacity: 0;\n          bottom: -2px;\n          left: 0; }\n        header .navigation-links a:not(.btn):hover::after {\n          opacity: 1; } }\n  header .logo {\n    flex-basis: 100%; }\n  @media only screen and (min-width: 768px) {\n      header .logo {\n        flex-basis: unset; } }\n  @media only screen and (min-width: 768px) {\n    header .collapse {\n      display: block; } }\n  header.sticky {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 9;\n    -webkit-animation: headerAnim 0.22s ease-in;\n            animation: headerAnim 0.22s ease-in;\n    background: #fff;\n    box-shadow: 5px 5px 5px rgba(37, 37, 37, 0.1); }\n  @-webkit-keyframes headerAnim {\n  from {\n    top: -50px;\n    background-color: transparent; }\n  to {\n    background: #fff;\n    top: 0; } }\n  @keyframes headerAnim {\n  from {\n    top: -50px;\n    background-color: transparent; }\n  to {\n    background: #fff;\n    top: 0; } }\n  header .logout_dropdown {\n    position: absolute !important;\n    top: 40px;\n    right: 0;\n    border-radius: 4px; }\n  header .logout_dropdown:hover::after {\n      display: none; }\n  header .no-underline a:hover::after {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0hlYWRlci9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcSGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9IZWFkZXIvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L0hlYWRlci9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWU7RUFDZixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFdBQVUsRUE4SWI7RUN6SUM7SURURjtNQU1RLGNBQWEsRUE0SXBCLEVBQUE7RUFsSkQ7SUFTUSxrQkFBaUI7SUFDakIsWUFBVyxFQUNkO0VBWEw7SUFhUSxlRVJPO0lGU1AsZ0JBQWU7SUFDZixhQUFZLEVBZ0JmO0VBL0JMO01BaUJZLFlFWEE7TUZZQSxpQkFBZ0I7TUFDaEIsa0JBQWlCLEVBSXBCO0VBdkJUO1FBcUJnQixZRWZKLEVGZ0JDO0VBdEJiO01BeUJZLGdCQUFlLEVBQ2xCO0VBMUJUO01BNkJZLGVFMUJDLEVGMkJKO0VBOUJUO0lBaUNRLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLE9BQU07SUFDTixpQ0FBZ0M7SUFDaEMsZUFBYyxFQXNEakI7RUFyREc7TUF0Q1I7UUF1Q1ksb0JFbENHO1FGbUNILFdBQVU7UUFDVixrQkFBaUI7UUFDakIsaUJBQWdCO1FBQ2hCLHlCQUF3QixFQWdEL0I7UUEzRkw7VUE4Q29CLG9CRTNDUCxFRjRDSTtRQS9DakI7VUFrRGdCLFlFNUNKO1VGNkNJLGVBQWMsRUFDakI7UUFwRGI7VUFzRGdCLFlBQVc7VUFDWCxtQkFBa0IsRUFDckI7UUF4RGI7VUEwRGdCLGNBQWE7VUFDYiw0QkFBMkIsRUFDOUIsRUFBQTtFQ25EWDtNRFRGO1FBK0RZLGtCQUFpQjtRQUNqQixpQkFBZ0I7UUFDaEIsaUJBQWdCLEVBMEJ2QixFQUFBO0VBM0ZMO01Bb0VZLFFBQU8sRUFDVjtFQzVEUDtNRFRGO1FBd0VnQixtQkFBa0IsRUFpQnJCO1FBekZiO1VBMEVvQixtQkFBa0I7VUFDbEIsWUFBVztVQUNYLFlBQVc7VUFDWCxvQkUxRVA7VUYyRU8sWUFBVztVQUVYLFdBQVU7VUFDVixhQUFZO1VBQ1osUUFBTyxFQUNWO1FBbkZqQjtVQXNGd0IsV0FBVSxFQUNiLEVBQUE7RUF2RnJCO0lBNkZRLGlCQUFnQixFQUluQjtFQ3hGSDtNRFRGO1FBK0ZZLGtCQUFpQixFQUV4QixFQUFBO0VDeEZIO0lEVEY7TUFvR1ksZUFBYyxFQUVyQixFQUFBO0VBdEdMO0lBd0dRLGdCQUFlO0lBQ2YsT0FBTTtJQUNOLFFBQU87SUFDUCxTQUFRO0lBQ1IsV0FBVTtJQUNWLDRDQUFtQztZQUFuQyxvQ0FBbUM7SUFDbkMsaUJFeEdJO0lGeUdKLDhDRTFHTyxFRjRHVjtFQUNEO0VBQ0k7SUFDSSxXQUFVO0lBQ1YsOEJBQTZCLEVBQUE7RUFFakM7SUFDSSxpQkVsSEE7SUZtSEEsT0FBTSxFQUFBLEVBQUE7RUFQZDtFQUNJO0lBQ0ksV0FBVTtJQUNWLDhCQUE2QixFQUFBO0VBRWpDO0lBQ0ksaUJFbEhBO0lGbUhBLE9BQU0sRUFBQSxFQUFBO0VBekhsQjtJQTZIUSw4QkFBNkI7SUFDN0IsVUFBUztJQUVULFNBQVE7SUFJUixtQkFBa0IsRUFRckI7RUE1SUw7TUF5SWdCLGNBQWEsRUFDaEI7RUExSWI7SUErSVksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9IZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcbmhlYWRlcntcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItd3JhcHBlcntcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICYuYnRue1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAvLyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGlvbi1saW5rc3tcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogLTMwMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAzMDBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIsJjpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogNTcwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTcwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuc2hvd3tcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICBhOm5vdCguYnRuKXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ297XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2xsYXBzZXtcclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuc3RpY2t5e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGFuaW1hdGlvbjogaGVhZGVyQW5pbSAwLjIycyBlYXNlLWluO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKCRjb2xvcjogJGJsYWNrLCAkYWxwaGE6IDAuMSk7XHJcblxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBoZWFkZXJBbmltIHtcclxuICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICB0b3A6IC01MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG97XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dvdXRfZHJvcGRvd257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIC8vIGxlZnQ6IDUwJTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIC8vIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8tdW5kZXJsaW5lIGE6aG92ZXJ7XHJcbiAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/Header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/Header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, service) {
        this.router = router;
        this.service = service;
        this.hoverState = false;
        this.isSticky = false;
    }
    HeaderComponent.prototype.hovered = function () {
        this.hoverState = true;
    };
    HeaderComponent.prototype.unhovered = function () {
        var _this = this;
        setTimeout(function () {
            _this.hoverState = false;
        }, 2200);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCurrentUser().subscribe(function (result) {
            _this.users = result;
        });
        this.IsUserLogged();
        this.innerWidth = window.innerWidth;
        console.log(innerWidth);
    };
    HeaderComponent.prototype.IsUserLogged = function () {
        this.user = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
        return localStorage.isUserLogged === 'true' ? true : false;
    };
    HeaderComponent.prototype.checkScroll = function () {
        if (innerWidth > 768) {
            this.isSticky = window.pageYOffset >= 125;
        }
        else {
            this.isSticky = window.pageYOffset >= 80;
        }
    };
    HeaderComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        console.log(innerWidth);
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/signin']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "checkScroll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderComponent.prototype, "onResize", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/Header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/component/Header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_1__["AddserviceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/Header/services/services.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/Header/services/services.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"our-services\">\r\n  <div class=\"container\">\r\n    <ul class=\"services-wrapper\">\r\n      <li class=\"category\">\r\n        <a href=\"#\">\r\n          <h4 class=\"name\">Services<span><img src=\"../../../../assets/img/serviceCategoryIcons/location.svg\"\r\n                alt=\"\"></span></h4>\r\n          <ul class=\"sub-category\">\r\n            <li *ngFor=\"let item of serviceList\" [value]=\"item.Id\">\r\n              <a [routerLink]=\"['/getService', item.id]\">\r\n                {{item.name}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/Header/services/services.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/component/Header/services/services.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.our-services {\n  padding-bottom: 20px; }\n  section.our-services a:hover {\n    color: initial; }\n  section.our-services .services-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around; }\n  @media only screen and (min-width: 1200px) {\n      section.our-services .services-wrapper {\n        justify-content: space-between; } }\n  section.our-services .services-wrapper > li {\n      max-width: 341px;\n      min-width: 300px;\n      background: #fafafa;\n      padding: 25px 30px;\n      margin-bottom: 50px;\n      border-radius: 8px;\n      font-family: \"Oxygen\", sans-serif;\n      font-size: 16px;\n      font-weight: 500; }\n  @media only screen and (min-width: 1200px) {\n        section.our-services .services-wrapper > li {\n          flex-basis: 23%; } }\n  section.our-services .services-wrapper > li:hover {\n        box-shadow: 7px 7px 24px rgba(0, 0, 0, 0.09); }\n  section.our-services .services-wrapper .sub-category li {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 16px; }\n  section.our-services .services-wrapper h4 {\n      margin-bottom: 50px;\n      font-size: 20px;\n      font-weight: 600;\n      position: relative;\n      padding-top: 15px; }\n  section.our-services .services-wrapper h4 span {\n        position: absolute;\n        height: 52px;\n        width: 52px;\n        background: #ce3d66;\n        border-radius: 50%;\n        right: 0;\n        top: 0;\n        padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L0hlYWRlci9zZXJ2aWNlcy9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcSGVhZGVyXFxzZXJ2aWNlc1xcc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9IZWFkZXIvc2VydmljZXMvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L0hlYWRlci9zZXJ2aWNlcy9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQW9CLEVBc0R2QjtFQXZERDtJQUdRLGVBQWMsRUFDakI7RUFKTDtJQU1RLGNBQWE7SUFDYixnQkFBZTtJQUNmLDhCQUE2QixFQThDaEM7RUN2Q0g7TURmRjtRQVVZLCtCQUE4QixFQTRDckMsRUFBQTtFQXRETDtNQWdCWSxpQkFBZ0I7TUFDaEIsaUJBQWdCO01BQ2hCLG9CRVhRO01GWVIsbUJBQWtCO01BQ2xCLG9CQUFtQjtNQUNuQixtQkFBa0I7TUFDbEIsa0NFdEJnQjtNRnVCaEIsZ0JBQWU7TUFDZixpQkFBZ0IsRUFJbkI7RUNiUDtRRGZGO1VBY2dCLGdCQUFlLEVBY3RCLEVBQUE7RUE1QlQ7UUEwQmdCLDZDQUF5QyxFQUM1QztFQTNCYjtNQStCZ0IsY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixvQkFBbUIsRUFDdEI7RUFsQ2I7TUFzQ1ksb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLG1CQUFrQjtNQUNsQixrQkFBaUIsRUFXcEI7RUFyRFQ7UUE0Q2dCLG1CQUFrQjtRQUNsQixhQUFZO1FBQ1osWUFBVztRQUNYLG9CRTNDQztRRjRDRCxtQkFBa0I7UUFDbEIsU0FBUTtRQUNSLE9BQU07UUFDTixjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L0hlYWRlci9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy9taXhpbnMnO1xyXG5zZWN0aW9uLm91ci1zZXJ2aWNlc3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYTpob3ZlcntcclxuICAgICAgICBjb2xvcjogaW5pdGlhbDtcclxuICAgIH1cclxuICAgIC5zZXJ2aWNlcy13cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJj4gbGl7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAyMyU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNDFweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLWdyZXk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGhGb250O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA3cHggN3B4IDI0cHggcmdiYSgwLDAsMCwwLjA5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWNhdGVnb3J5e1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5AbWl4aW4gbWVkaXVtIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JG1lZGl1bS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXRpbmEge1xyXG4gIEBtZWRpYVxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJpbnQge1xyXG4gIEBtZWRpYSBwcmludCB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuXHJcblxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzXHJcbkBtaXhpbiBwcmVmaXgoJGRlY2xhcmF0aW9ucywgJHByZWZpeGVzOiAoKSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRkZWNsYXJhdGlvbnMge1xyXG4gICAgQGVhY2ggJHByZWZpeCBpbiAkcHJlZml4ZXMge1xyXG4gICAgICAjeyctJyArICRwcmVmaXggKyAnLScgKyAkcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3V0cHV0IHN0YW5kYXJkIG5vbi1wcmVmaXhlZCBkZWNsYXJhdGlvblxyXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbi8vIHZlbmRvciBwcmVmaXhlcnMiLCIvLyBmb250c1xyXG4kZ0ZvbnQ6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4kaEZvbnQ6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gY29sb3JzXHJcbiRyZWQ6ICNmOTE5NDI7XHJcbiRtdXRlUmVkOiAjY2UzZDY2OyBcclxuJGJsYWNrOiAjMjUyNTI1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS1ncmV5OiAjZmFmYWZhO1xyXG4kZ3JleTogI2I3YjdiNztcclxuJHRyYW5zQmx1ZTogI2RlZWVmNjtcclxuJGdyZWVuOiAjM2RjZTg4O1xyXG4kYmx1ZTogIzA2YTFjZTtcclxuXHJcbi8vIGNvbG9yIHJvbGVzXHJcbiRwcmltYXJ5LWNvbG9yOiAkbXV0ZVJlZDtcclxuJHNlY29uZGFyeS1jb2xvcjogJGJsYWNrO1xyXG5cclxuLy8gIG1lZGlhIHF1ZXJ5IGJyZWFrcG9pbnRzXHJcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xyXG4kZGVza3RvcC13aWR0aDogMTIwMHB4O1xyXG4kbWVkaXVtLXdpZHRoOiAzNzVweDtcclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/component/Header/services/services.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/Header/services/services.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(service) {
        this.service = service;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.getServices();
    };
    ServicesComponent.prototype.getServices = function () {
        var _this = this;
        this.service.GetServices().subscribe(function (result) {
            _this.serviceList = result;
        });
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/component/Header/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/component/Header/services/services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_1__["AddserviceService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/component/MainPage/homepage-banner/homepage-banner.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/component/MainPage/homepage-banner/homepage-banner.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"homepage-banner d-flex align-items-end align-items-sm-center justify-content-center \">\r\n  <div class=\"banner-wrapper d-flex flex-column justify-content-center text-center\">\r\n    <!-- top texts -->\r\n    <h1 class=\"text-white\"><b>Save time &amp; money</b></h1>\r\n    <p class=\"text-white\">We find services for you</p>\r\n    <!-- service search form -->\r\n    <form\r\n      class=\"d-flex flex-md-row flex-sm-wrap flex-sm-nowrap rounded overflow-hide justify-content-between align-items-center\">\r\n\r\n      <label class=\"text-left\">\r\n        <input type=\"text\" placeholder=\"Search Services here\" aria-label=\"Number\" [(ngModel)]=\"searchTerm\" [ngModelOptions]=\"{standalone: true}\" matInput\r\n          [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let option of serviceList | filter : searchTerm\" [value]=\"option.name\">\r\n              <span style=\"padding-right : 750px\">{{option.name}}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </label>\r\n      <a (click)=\"searchList()\" class=\"btn btn-primary rounded-0 d-flex text-white\">\r\n        <i class=\"fa fa-search\"></i>\r\n        Search\r\n      </a>\r\n    </form>\r\n    <p>Find experts nearby, for your service with a touch</p>\r\n    <!-- bottom texts -->\r\n    <h2 class=\"text-black\">Find the best services in the city</h2>\r\n    <ul class=\"d-flex justify-content-around justify-content-sm-between flex-wrap flex-sm-nowrap\">\r\n      <li>\r\n        <a href=\"#\">\r\n          <svg class=\"lnr lnr-paw\">\r\n            <use xlink:href=\"#lnr-paw\"></use>\r\n          </svg>\r\n          VETERRINARY\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <svg class=\"lnr lnr-diamond\">\r\n            <use xlink:href=\"#lnr-diamond\"></use>\r\n          </svg>\r\n          JEWELERRY\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <svg class=\"lnr lnr-graduation-hat\">\r\n            <use xlink:href=\"#lnr-graduation-hat\"></use>\r\n          </svg>\r\n          EDUCATION\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">\r\n          <svg class=\"lnr lnr-shirt\">\r\n            <use xlink:href=\"#lnr-shirt\"></use>\r\n          </svg>\r\n          CLOTHINGS\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/MainPage/homepage-banner/homepage-banner.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/component/MainPage/homepage-banner/homepage-banner.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.homepage-banner {\n  background: url('banner-bg.png');\n  background-size: cover;\n  background-position: center;\n  margin-top: -80px;\n  padding-top: 10rem;\n  padding-left: 15px;\n  padding-right: 15px; }\n  @media only screen and (min-width: 768px) {\n    section.homepage-banner {\n      height: 100vh;\n      margin-top: -125px;\n      padding-top: 0;\n      padding-bottom: 0; } }\n  section.homepage-banner select {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    border: 0;\n    background: transparent; }\n  section.homepage-banner form {\n    margin-bottom: 20px; }\n  @media screen and (max-width: 767px) {\n      section.homepage-banner form {\n        border-radius: 0 !important; } }\n  @media only screen and (min-width: 768px) {\n      section.homepage-banner form {\n        background: #fafafa;\n        height: 60px; } }\n  section.homepage-banner form svg {\n      max-width: 8px;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      pointer-events: none;\n      right: 10px; }\n  @media only screen and (min-width: 768px) {\n        section.homepage-banner form svg {\n          right: 30px; } }\n  section.homepage-banner form .form-group, section.homepage-banner form label {\n      margin: 0; }\n  section.homepage-banner form .form-group {\n      box-shadow: -3px 0px 7px 0px rgba(0, 0, 0, 0.2);\n      width: 100%;\n      max-width: 320px;\n      margin-bottom: 10px; }\n  @media only screen and (min-width: 768px) {\n        section.homepage-banner form .form-group {\n          flex-basis: 100%;\n          margin-bottom: 0;\n          max-width: unset; } }\n  section.homepage-banner form label, section.homepage-banner form .btn {\n      height: 30px;\n      line-height: 30px; }\n  @media only screen and (min-width: 768px) {\n        section.homepage-banner form label, section.homepage-banner form .btn {\n          height: 60px;\n          line-height: 60px;\n          margin-bottom: 0; } }\n  section.homepage-banner form label, section.homepage-banner form select {\n      width: 100%;\n      position: relative; }\n  section.homepage-banner form select {\n      padding: 0 20px;\n      background: #fafafa; }\n  @media only screen and (min-width: 768px) {\n        section.homepage-banner form select {\n          background: transparent; } }\n  section.homepage-banner form .btn {\n      padding: 0 20px; }\n  @media only screen and (min-width: 768px) {\n        section.homepage-banner form .btn {\n          flex-basis: 165px;\n          min-width: 165px; } }\n  section.homepage-banner form .btn i {\n        line-height: 30px;\n        margin: 0 10px 0 0; }\n  @media only screen and (min-width: 768px) {\n          section.homepage-banner form .btn i {\n            line-height: 60px; } }\n  section.homepage-banner ul {\n    max-width: 555px;\n    width: 100%;\n    margin: 0 auto; }\n  section.homepage-banner li {\n    flex-basis: 50%;\n    margin-bottom: 10px; }\n  @media only screen and (min-width: 768px) {\n      section.homepage-banner li {\n        flex-basis: 116px;\n        margin-bottom: 0; } }\n  section.homepage-banner li a {\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n  section.homepage-banner li a:hover svg {\n        fill: #f91942; }\n  section.homepage-banner svg {\n    max-width: 50px;\n    max-height: 50px; }\n  section.homepage-banner .banner-wrapper {\n    max-width: 1160px;\n    width: 100%; }\n  section.homepage-banner h1 {\n    font-size: 35px; }\n  @media only screen and (min-width: 768px) {\n      section.homepage-banner h1 {\n        font-size: 65px; } }\n  section.homepage-banner p.text-white {\n    font-size: 24px;\n    margin-bottom: 30px; }\n  @media only screen and (min-width: 768px) {\n      section.homepage-banner p.text-white {\n        font-size: 50px;\n        margin-bottom: 60px; } }\n  section.homepage-banner h2 {\n    font-size: 24px;\n    margin: 24px 0 18px; }\n  @media only screen and (min-width: 768px) {\n      section.homepage-banner h2 {\n        margin: 44px 0 30px;\n        font-size: 40px; } }\n  .one {\n  top: 30%;\n  left: 20%; }\n  .two {\n  top: 43%;\n  left: 3%; }\n  .three {\n  top: 45%;\n  left: 25%; }\n  .four {\n  top: 43%;\n  right: 20%; }\n  .four .icon {\n    max-width: 85%;\n    margin: 2px; }\n  .five {\n  top: 32%;\n  right: 7%; }\n  .six {\n  top: 26%;\n  right: 27%; }\n  @media screen and (min-width: 992px) and (max-width: 1024px) {\n  .one {\n    top: 30%;\n    left: 12%; }\n  .three {\n    top: 61%; }\n  .four {\n    top: 59%; }\n  .six {\n    top: 40%;\n    right: 16%; } }\n  @media screen and (max-width: 768px) {\n  .three {\n    top: 55%;\n    left: 11%; }\n  .four {\n    top: 44%;\n    right: 12%; }\n  .map-pointers {\n    display: none; } }\n  .map-pointers {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  .map-pointers .item {\n    position: absolute;\n    height: 72px;\n    width: 58px; }\n  .map-pointers .item.small {\n      height: 44px;\n      width: 55px; }\n  .map-pointers .item.small .item-wrapper {\n        height: 100%;\n        padding-top: 5px; }\n  .map-pointers .item .icon path {\n      fill: #252525; }\n  .map-pointers .item.dark .icon {\n      fill: #fff; }\n  .map-pointers .item .item-wrapper {\n      position: relative;\n      padding: 15px;\n      padding-bottom: 20px;\n      padding-top: 10px; }\n  .map-pointers .item .item-wrapper .icon {\n        position: relative;\n        z-index: 1; }\n  .map-pointers .item .item-wrapper .pointer {\n        position: absolute;\n        max-height: 100%;\n        max-width: 100%;\n        left: 0;\n        top: 0; }\n  section.homepage-banner.d-flex input {\n  width: 100%;\n  padding: 0 25px; }\n  section.homepage-banner.d-flex input, section.homepage-banner.d-flex .btn {\n  height: 60px;\n  line-height: 60px; }\n  @media only screen and (max-width: 768px) {\n  section.homepage-banner.d-flex form {\n    border-radius: 25px !important;\n    background: #fff; }\n    section.homepage-banner.d-flex form .form-group {\n      margin-bottom: 0;\n      max-width: unset; }\n    section.homepage-banner.d-flex form .form-group input, section.homepage-banner.d-flex form .form-group label, section.homepage-banner.d-flex form a.btn {\n      height: 40px;\n      align-items: center; }\n    section.homepage-banner.d-flex form label {\n      height: 40px;\n      line-height: 40px; }\n    section.homepage-banner.d-flex form + p {\n      font-size: 14px; } }\n  @media only screen and (max-width: 375px) {\n  section.homepage-banner.d-flex a.btn {\n    font-size: 0; }\n    section.homepage-banner.d-flex a.btn i {\n      font-size: 16px; }\n  section.homepage-banner.d-flex a.btn, section.homepage-banner.d-flex input {\n    padding: 0 15px; } }\n  .example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n  .example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL2hvbWVwYWdlLWJhbm5lci9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcTWFpblBhZ2VcXGhvbWVwYWdlLWJhbm5lclxcaG9tZXBhZ2UtYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvTWFpblBhZ2UvaG9tZXBhZ2UtYmFubmVyL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9NYWluUGFnZS9ob21lcGFnZS1iYW5uZXIvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlDQUFxRDtFQUNyRCx1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQXVJdEI7RUNySUM7SURURjtNQVNRLGNBQWE7TUFDYixtQkFBa0I7TUFDbEIsZUFBYztNQUNkLGtCQUFpQixFQWtJeEIsRUFBQTtFQTlJRDtJQzRDTSx5QkQ3Qm1DO0lDNkJuQyxzQkQ3Qm1DO0lDNkJuQyxxQkQ3Qm1DO0lDaUNyQyxpQkRqQ3FDO0lBQ2pDLFVBQVM7SUFDVCx3QkFBdUIsRUFDMUI7RUFsQkw7SUEyQlEsb0JBQW1CLEVBNER0QjtFQW5FRztNQXBCUjtRQXFCWSw0QkFBMkIsRUFrRWxDLEVBQUE7RUM5RUg7TURURjtRQXdCWSxvQkVqQlE7UUZrQlIsYUFBWSxFQThEbkIsRUFBQTtFQXZGTDtNQTZCWSxlQUFjO01BQ2QsbUJBQWtCO01BQ2xCLFNBQVE7TUFDUixvQ0FBMkI7Y0FBM0IsNEJBQTJCO01BQzNCLHFCQUFvQjtNQUNwQixZQUFXLEVBSWQ7RUM3QlA7UURURjtVQW9DZ0IsWUFBVyxFQUVsQixFQUFBO0VBdENUO01Bd0NZLFVBQVMsRUFDWjtFQXpDVDtNQTJDWSxnREFBK0M7TUFDL0MsWUFBVztNQUNYLGlCQUFnQjtNQUNoQixvQkFBbUIsRUFNdEI7RUMzQ1A7UURURjtVQWdEZ0IsaUJBQWdCO1VBQ2hCLGlCQUFnQjtVQUNoQixpQkFBZ0IsRUFFdkIsRUFBQTtFQXBEVDtNQXNEWSxhQUFZO01BQ1osa0JBQWlCLEVBTXBCO0VDcERQO1FEVEY7VUF5RGdCLGFBQVk7VUFDWixrQkFBaUI7VUFDakIsaUJBQWdCLEVBRXZCLEVBQUE7RUE3RFQ7TUErRFksWUFBVztNQUNYLG1CQUFrQixFQUNyQjtFQWpFVDtNQW1FWSxnQkFBZTtNQUNmLG9CRTdEUSxFRmlFWDtFQy9EUDtRRFRGO1VBc0VnQix3QkFBdUIsRUFFOUIsRUFBQTtFQXhFVDtNQThFWSxnQkFBZSxFQVFsQjtFQzdFUDtRRFRGO1VBMkVnQixrQkFBaUI7VUFDakIsaUJBQWdCLEVBVXZCLEVBQUE7RUF0RlQ7UUFnRmdCLGtCQUFpQjtRQUlqQixtQkFBbUIsRUFDdEI7RUM1RVg7VURURjtZQWtGb0Isa0JBQWlCLEVBR3hCLEVBQUE7RUFyRmI7SUF5RlEsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxlQUFjLEVBQ2pCO0VBNUZMO0lBOEZRLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBZXRCO0VDckdIO01EVEY7UUFpR1ksa0JBQWlCO1FBQ2pCLGlCQUFnQixFQVl2QixFQUFBO0VBOUdMO01BcUdZLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsb0JBQW1CLEVBTXRCO0VBN0dUO1FBMEdvQixjRXZHUCxFRndHSTtFQTNHakI7SUFnSFEsZ0JBQWU7SUFDZixpQkFBZ0IsRUFDbkI7RUFsSEw7SUFvSFEsa0JBQWlCO0lBQ2pCLFlBQVcsRUFDZDtFQXRITDtJQXdIUSxnQkFBZSxFQUlsQjtFQ25ISDtNRFRGO1FBMEhZLGdCQUFlLEVBRXRCLEVBQUE7RUE1SEw7SUE4SFEsZ0JBQWU7SUFDZixvQkFBbUIsRUFNdEI7RUM1SEg7TURURjtRQWlJWSxnQkFBZTtRQUNmLG9CQUFtQixFQUcxQixFQUFBO0VBcklMO0lBdUlRLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBS3RCO0VDcElIO01EVEY7UUEwSVksb0JBQW1CO1FBQ25CLGdCQUFlLEVBRXRCLEVBQUE7RUFFRDtFQUNJLFNBQVE7RUFDUixVQUFTLEVBQ1o7RUFDRDtFQUNJLFNBQVE7RUFDUixTQUFRLEVBQ1g7RUFDRDtFQUNJLFNBQVE7RUFDUixVQUFTLEVBQ1o7RUFDRDtFQUNJLFNBQVE7RUFDUixXQUFVLEVBS2I7RUFQRDtJQUlRLGVBQWM7SUFDZCxZQUFXLEVBQ2Q7RUFFTDtFQUNJLFNBQVE7RUFDUixVQUFTLEVBQ1o7RUFDRDtFQUNJLFNBQVE7RUFDUixXQUFVLEVBQ2I7RUFDRDtFQUNJO0lBQ0ksU0FBUTtJQUNSLFVBQVMsRUFDWjtFQUNEO0lBQ0ksU0FBUSxFQUNYO0VBQ0Q7SUFDSSxTQUFRLEVBQ1g7RUFDRDtJQUNJLFNBQVE7SUFDUixXQUFVLEVBQ2IsRUFBQTtFQUVMO0VBQ0k7SUFDSSxTQUFRO0lBQ1IsVUFBUyxFQUNaO0VBQ0Q7SUFDSSxTQUFRO0lBQ1IsV0FBVSxFQUNiO0VBQ0Q7SUFDSSxjQUFhLEVBQ2hCLEVBQUE7RUFFVDtFQUNRLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFVBQVM7RUFDVCxTQUFRLEVBdUNYO0VBNUNMO0lBT1ksbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixZQUFXLEVBa0NkO0VBM0NUO01BV2dCLGFBQVk7TUFDWixZQUFXLEVBS2Q7RUFqQmI7UUFjb0IsYUFBWTtRQUNaLGlCQUFnQixFQUNuQjtFQWhCakI7TUFtQmdCLGNFdE5ELEVGdU5GO0VBcEJiO01BdUJvQixXRXpOUixFRjBOSztFQXhCakI7TUEyQmdCLG1CQUFrQjtNQUNsQixjQUFhO01BQ2IscUJBQW9CO01BQ3BCLGtCQUFpQixFQVlwQjtFQTFDYjtRQWdDb0IsbUJBQWtCO1FBQ2xCLFdBQVUsRUFDYjtFQWxDakI7UUFvQ29CLG1CQUFrQjtRQUNsQixpQkFBZ0I7UUFDaEIsZ0JBQWU7UUFDZixRQUFPO1FBQ1AsT0FBTSxFQUNUO0VBS2pCO0VBRVEsWUFBVztFQUNYLGdCQUFlLEVBQ2xCO0VBSkw7RUFNUSxhQUFZO0VBQ1osa0JBQWlCLEVBQ3BCO0VBQ0Q7RUFUSjtJQVdZLCtCQUE4QjtJQUM5QixpQkU1UEEsRUY0UUg7SUE1QlQ7TUFjZ0IsaUJBQWdCO01BQ2hCLGlCQUFnQixFQUNuQjtJQWhCYjtNQWtCZ0IsYUFBWTtNQUNaLG9CQUFtQixFQUN0QjtJQXBCYjtNQXNCZ0IsYUFBWTtNQUNaLGtCQUFpQixFQUNwQjtJQXhCYjtNQTBCZ0IsZ0JBQWUsRUFDbEIsRUFBQTtFQUlUO0VBL0JKO0lBaUNZLGFBQVksRUFJZjtJQXJDVDtNQW1DZ0IsZ0JBQWUsRUFDbEI7RUFwQ2I7SUF1Q1ksZ0JBQWUsRUFDbEIsRUFBQTtFQUdUO0VBQ0ksaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixZQUFXLEVBQ1o7RUFFRDtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9NYWluUGFnZS9ob21lcGFnZS1iYW5uZXIvaG9tZXBhZ2UtYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcbnNlY3Rpb24uaG9tZXBhZ2UtYmFubmVye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyLWJnLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIEBpbmNsdWRlIHByZWZpeCgoYXBwZWFyYW5jZTogbm9uZSksd2Via2l0IG1veiBtcyk7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLWdyZXk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tZ3JvdXAsbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDdweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhYmVsLC5idG57XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbCxzZWxlY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtZ3JleTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTY1cHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAwIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICAgIG1heC13aWR0aDogNTU1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICBsaXtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDExNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgc3Zne1xyXG4gICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmJhbm5lci13cmFwcGVye1xyXG4gICAgICAgIG1heC13aWR0aDogMTE2MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHAudGV4dC13aGl0ZXtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IGN1cmx5LW1lZGl1bTtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW46IDI0cHggMCAxOHB4O1xyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgbWFyZ2luOiA0NHB4IDAgMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgLm9uZXtcclxuICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICB9XHJcbiAgICAudHdve1xyXG4gICAgICAgIHRvcDogNDMlO1xyXG4gICAgICAgIGxlZnQ6IDMlO1xyXG4gICAgfVxyXG4gICAgLnRocmVle1xyXG4gICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgIH1cclxuICAgIC5mb3Vye1xyXG4gICAgICAgIHRvcDogNDMlO1xyXG4gICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZml2ZXtcclxuICAgICAgICB0b3A6IDMyJTtcclxuICAgICAgICByaWdodDogNyU7XHJcbiAgICB9XHJcbiAgICAuc2l4e1xyXG4gICAgICAgIHRvcDogMjYlO1xyXG4gICAgICAgIHJpZ2h0OiAyNyU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAgICAgLm9uZXtcclxuICAgICAgICAgICAgdG9wOiAzMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEyJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRocmVle1xyXG4gICAgICAgICAgICB0b3A6IDYxJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvdXJ7XHJcbiAgICAgICAgICAgIHRvcDogNTklO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2l4e1xyXG4gICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE2JTs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAudGhyZWV7XHJcbiAgICAgICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxMSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3Vye1xyXG4gICAgICAgICAgICB0b3A6IDQ0JTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEyJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hcC1wb2ludGVyc3tcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi5tYXAtcG9pbnRlcnN7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgICAgICAgICAmLnNtYWxse1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAuaXRlbS13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uIHBhdGh7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kYXJre1xyXG4gICAgICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvaW50ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuc2VjdGlvbi5ob21lcGFnZS1iYW5uZXIuZC1mbGV4e1xyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQsLmJ0bntcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCBpbnB1dCwuZm9ybS1ncm91cCBsYWJlbCxhLmJ0bntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmKyBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgIGEuYnRue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYS5idG4sIGlucHV0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/MainPage/homepage-banner/homepage-banner.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/component/MainPage/homepage-banner/homepage-banner.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HomepageBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageBannerComponent", function() { return HomepageBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _models_user_viewService_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/user.viewService.model */ "./src/app/models/user.viewService.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomepageBannerComponent = /** @class */ (function () {
    function HomepageBannerComponent(service, route, searchPipe) {
        this.service = service;
        this.route = route;
        this.searchPipe = searchPipe;
        this.servy = new _models_user_viewService_model__WEBPACK_IMPORTED_MODULE_2__["ViewService"];
        this.nameList = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
    }
    HomepageBannerComponent.prototype.ngOnInit = function () {
        this.getServiceNames();
    };
    HomepageBannerComponent.prototype.getServiceNames = function () {
        var _this = this;
        this.service.GetServices().subscribe(function (result) {
            _this.serviceList = result;
            console.log(_this.serviceList);
        });
    };
    HomepageBannerComponent.prototype.searchList = function () {
        this.searchedList = this.searchPipe.transform(this.serviceList, this.searchTerm);
        localStorage.setItem('searchedList', JSON.stringify(this.searchedList));
        var navigationExtras = {
            queryParams: {
                "searchTerm": this.searchTerm
            }
        };
        this.route.navigate(['serviceList'], navigationExtras);
    };
    HomepageBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-homepage-banner',
            template: __webpack_require__(/*! ./homepage-banner.component.html */ "./src/app/component/MainPage/homepage-banner/homepage-banner.component.html"),
            providers: [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_4__["AddserviceService"], _filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]],
            styles: [__webpack_require__(/*! ./homepage-banner.component.scss */ "./src/app/component/MainPage/homepage-banner/homepage-banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_4__["AddserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]])
    ], HomepageBannerComponent);
    return HomepageBannerComponent;
}());



/***/ }),

/***/ "./src/app/component/MainPage/how-it-works/how-it-works.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/component/MainPage/how-it-works/how-it-works.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"how-it-works bg-grey text-center\">\r\n  <div class=\"container-lg\">\r\n    <h2 class=\"section-title\">\r\n      Find the Perfect Match for Your Services\r\n    </h2>\r\n    <p class=\"text-center mx-auto mb-5\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae tripper in the sljlknsdf loasnder lajsdoj jknaj linser paders vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>\r\n    <ul class=\"steps d-flex flex-wrap flex-md-nowrap\">\r\n      <li>\r\n        <img src=\"../../../../assets/img/how-to-icons/objective.svg\" alt=\"\">\r\n        <h4>Find Service Providers</h4>\r\n        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>\r\n      </li>\r\n      <li>\r\n        <img src=\"../../../../assets/img/how-to-icons/email.svg\" alt=\"\">\r\n        <h4>Contact Service Providers</h4>\r\n        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>\r\n      </li>\r\n      <li>\r\n        <img src=\"../../../../assets/img/how-to-icons/conversation.svg\" alt=\"\">\r\n        <h4>Use Service</h4>\r\n        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/MainPage/how-it-works/how-it-works.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/component/MainPage/how-it-works/how-it-works.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.how-it-works p {\n  max-width: 900px; }\n\nsection.how-it-works img {\n  max-width: 75px;\n  max-height: 75px;\n  margin-bottom: 30px; }\n\nsection.how-it-works h4 {\n  margin-bottom: 40px;\n  color: initial; }\n\nsection.how-it-works .steps li:nth-child(2) {\n  position: relative; }\n\nsection.how-it-works .steps li:nth-child(2)::after, section.how-it-works .steps li:nth-child(2)::before {\n    content: \"\";\n    max-width: 60%;\n    opacity: 0.5;\n    width: 100%;\n    height: 2px;\n    background: #ce3d66;\n    position: absolute;\n    top: 43px;\n    display: none; }\n\n@media only screen and (min-width: 1200px) {\n      section.how-it-works .steps li:nth-child(2)::after, section.how-it-works .steps li:nth-child(2)::before {\n        display: block; } }\n\nsection.how-it-works .steps li:nth-child(2)::before {\n    left: -30%; }\n\nsection.how-it-works .steps li:nth-child(2)::after {\n    right: -30%; }\n\nsection.how-it-works .steps p, section.how-it-works .steps {\n  margin-bottom: 0; }\n\nsection.how-it-works .steps li {\n  margin-bottom: 40px; }\n\n@media only screen and (min-width: 375px) {\n    section.how-it-works .steps li {\n      padding: 0 20%; } }\n\n@media only screen and (min-width: 768px) {\n    section.how-it-works .steps li {\n      padding: 0 5%; } }\n\n@media only screen and (min-width: 1200px) {\n    section.how-it-works .steps li {\n      margin-bottom: 0;\n      padding: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL2hvdy1pdC13b3Jrcy9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcTWFpblBhZ2VcXGhvdy1pdC13b3Jrc1xcaG93LWl0LXdvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvTWFpblBhZ2UvaG93LWl0LXdvcmtzL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9NYWluUGFnZS9ob3ctaXQtd29ya3MvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGlCQUFnQixFQUNuQjs7QUFITDtFQUtRLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUN0Qjs7QUFSTDtFQVVRLG9CQUFtQjtFQUNuQixlQUNKLEVBQUM7O0FBWkw7RUFjUSxtQkFBa0IsRUFzQnJCOztBQXBDTDtJQWlCWSxZQUFXO0lBQ1gsZUFBYztJQUNkLGFBQVk7SUFDWixZQUFXO0lBQ1gsWUFBVztJQUNYLG9CQ2xCSztJRG1CTCxtQkFBa0I7SUFDbEIsVUFBUztJQUNULGNBQWEsRUFJaEI7O0FFZFA7TUZmRjtRQTJCZ0IsZUFBYyxFQUVyQixFQUFBOztBQTdCVDtJQStCWSxXQUFVLEVBQ2I7O0FBaENUO0lBa0NZLFlBQVcsRUFDZDs7QUFuQ1Q7RUFzQ1EsaUJBQWdCLEVBQ25COztBQXZDTDtFQXlDUSxvQkFBbUIsRUFXdEI7O0FFakRIO0lGSEY7TUEyQ1ksZUFBYyxFQVNyQixFQUFBOztBRTNDSDtJRlRGO01BOENZLGNBQWEsRUFNcEIsRUFBQTs7QUVyQ0g7SUZmRjtNQWlEWSxpQkFBZ0I7TUFDaEIsV0FBVSxFQUVqQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvbWl4aW5zJztcclxuc2VjdGlvbi5ob3ctaXQtd29ya3N7XHJcbiAgICBwe1xyXG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgY29sb3I6IGluaXRpYWxcclxuICAgIH1cclxuICAgIC5zdGVwcyBsaTpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmFmdGVyLFxyXG4gICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDQzcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0zMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICByaWdodDogLTMwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RlcHMgcCwuc3RlcHN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5zdGVwcyBsaXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGl1bXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBmb250c1xyXG4kZ0ZvbnQ6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4kaEZvbnQ6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gY29sb3JzXHJcbiRyZWQ6ICNmOTE5NDI7XHJcbiRtdXRlUmVkOiAjY2UzZDY2OyBcclxuJGJsYWNrOiAjMjUyNTI1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS1ncmV5OiAjZmFmYWZhO1xyXG4kZ3JleTogI2I3YjdiNztcclxuJHRyYW5zQmx1ZTogI2RlZWVmNjtcclxuJGdyZWVuOiAjM2RjZTg4O1xyXG4kYmx1ZTogIzA2YTFjZTtcclxuXHJcbi8vIGNvbG9yIHJvbGVzXHJcbiRwcmltYXJ5LWNvbG9yOiAkbXV0ZVJlZDtcclxuJHNlY29uZGFyeS1jb2xvcjogJGJsYWNrO1xyXG5cclxuLy8gIG1lZGlhIHF1ZXJ5IGJyZWFrcG9pbnRzXHJcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xyXG4kZGVza3RvcC13aWR0aDogMTIwMHB4O1xyXG4kbWVkaXVtLXdpZHRoOiAzNzVweDtcclxuXHJcbiAiLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG5cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuQG1peGluIG1lZGl1bSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRtZWRpdW0td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmV0aW5hIHtcclxuICBAbWVkaWFcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByaW50IHtcclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcblxyXG5cclxuLy8gdmVuZG9yIHByZWZpeGVyc1xyXG5AbWl4aW4gcHJlZml4KCRkZWNsYXJhdGlvbnMsICRwcmVmaXhlczogKCkpIHtcclxuICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiAkZGVjbGFyYXRpb25zIHtcclxuICAgIEBlYWNoICRwcmVmaXggaW4gJHByZWZpeGVzIHtcclxuICAgICAgI3snLScgKyAkcHJlZml4ICsgJy0nICsgJHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE91dHB1dCBzdGFuZGFyZCBub24tcHJlZml4ZWQgZGVjbGFyYXRpb25cclxuICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xyXG4gIH1cclxufVxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzIl19 */"

/***/ }),

/***/ "./src/app/component/MainPage/how-it-works/how-it-works.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/MainPage/how-it-works/how-it-works.component.ts ***!
  \***************************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/component/MainPage/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.scss */ "./src/app/component/MainPage/how-it-works/how-it-works.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/component/MainPage/mainpage.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/MainPage/mainpage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-homepage-banner></app-homepage-banner>\r\n<!-- <app-how-it-works></app-how-it-works>\r\n<app-most-searched></app-most-searched> -->\r\n<app-our-services></app-our-services>\r\n<!-- <app-testiminials></app-testiminials> -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/component/MainPage/mainpage.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/MainPage/mainpage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxNYWluUGFnZVxcbWFpbnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvTWFpblBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/component/MainPage/mainpage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/MainPage/mainpage.component.ts ***!
  \**********************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/component/MainPage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.scss */ "./src/app/component/MainPage/mainpage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/component/MainPage/most-searched/most-searched.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/component/MainPage/most-searched/most-searched.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"most-searched\">\r\n  <h2 class=\"section-title\">Most Searched Services</h2>\r\n  <ngx-slick class=\"slick-slider carousel\" #slickModal=\"slick-modal\" \r\n    [config]=\"{\r\n      slidesToShow: 5,\r\n      slidesToScroll:5,\r\n      dots: true,\r\n      arrows: false,\r\n      cssEase: easeInOut,\r\n      responsive: [\r\n        {\r\n          breakpoint: 768,\r\n          settings: {\r\n            slidesToShow:1,\r\n            slidesToScroll: 1\r\n          }\r\n        }\r\n      ]\r\n      }\">\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/barber.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">5.0</span>\r\n            <h4>Ravinder Gents Parlour</h4>\r\n            <p class=\"address\">Baneshwor</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/construction.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">4.7</span>\r\n            <h4>Ashish Construction Group</h4>\r\n            <p class=\"address\">Bhaktapur</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/gardening.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">4.7</span>\r\n            <h4>Lucy's Zen Garden</h4>\r\n            <p class=\"address\">Pulchowk</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/store.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">2.7</span>\r\n            <h4>Gilbert Booker's Club</h4>\r\n            <p class=\"address\">Kavre</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/construction.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">4.7</span>\r\n            <h4>Seema's Architect Forum</h4>\r\n            <p class=\"address\">Kalanki</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/barber.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">5.0</span>\r\n            <h4>Ravinder Gents Parlour</h4>\r\n            <p class=\"address\">Baneshwor</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/construction.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">4.7</span>\r\n            <h4>Ashish Construction Group</h4>\r\n            <p class=\"address\">Bhaktapur</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/gardening.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">4.7</span>\r\n            <h4>Lucy's Zen Garden</h4>\r\n            <p class=\"address\">Pulchowk</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/store.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">2.7</span>\r\n            <h4>Gilbert Booker's Club</h4>\r\n            <p class=\"address\">Kavre</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n    <li class=\"slide\" ngxSlickItem>\r\n      <a href=\"#\" class=\"service-card\">\r\n        <div class=\"card\">\r\n          <img src=\"../../../../assets/img/service-thumbnails/construction.png\" alt=\"service-thumbnail\">\r\n          <div class=\"info\">\r\n            <span class=\"rating rounded\">4.7</span>\r\n            <h4>Seema's Architect Forum</h4>\r\n            <p class=\"address\">Kalanki</p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </li>\r\n  </ngx-slick>\r\n</section>"

/***/ }),

/***/ "./src/app/component/MainPage/most-searched/most-searched.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/component/MainPage/most-searched/most-searched.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".most-searched .slide {\n  margin: 0 20px;\n  border-radius: 5px;\n  overflow: hidden; }\n\n.most-searched .card {\n  margin: 0 auto; }\n\n.most-searched .slick-dots {\n  position: static;\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL21vc3Qtc2VhcmNoZWQvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXBwXFxjb21wb25lbnRcXE1haW5QYWdlXFxtb3N0LXNlYXJjaGVkXFxtb3N0LXNlYXJjaGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBTEw7RUFPUSxlQUFjLEVBQ2pCOztBQVJMO0VBVVEsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvTWFpblBhZ2UvbW9zdC1zZWFyY2hlZC9tb3N0LXNlYXJjaGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vc3Qtc2VhcmNoZWR7XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5zbGljay1kb3Rze1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/MainPage/most-searched/most-searched.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/MainPage/most-searched/most-searched.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MostSearchedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostSearchedComponent", function() { return MostSearchedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MostSearchedComponent = /** @class */ (function () {
    // public slideConfig;
    function MostSearchedComponent() {
    }
    MostSearchedComponent.prototype.ngOnInit = function () {
    };
    MostSearchedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-most-searched',
            template: __webpack_require__(/*! ./most-searched.component.html */ "./src/app/component/MainPage/most-searched/most-searched.component.html"),
            styles: [__webpack_require__(/*! ./most-searched.component.scss */ "./src/app/component/MainPage/most-searched/most-searched.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MostSearchedComponent);
    return MostSearchedComponent;
}());



/***/ }),

/***/ "./src/app/component/MainPage/our-services/our-services.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/component/MainPage/our-services/our-services.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form method=\"GET\">\r\n  <section class=\"our-services\">\r\n    <h2 class=\"section-title\">Our Services</h2>\r\n    <div class=\"container-lg\">\r\n      <ul class=\"services-wrapper\">\r\n\r\n\r\n        <li class=\"category\" *ngFor=\"let item of categoryList\">\r\n          <h4 class=\"name\">{{item.name}}</h4>\r\n          <ul class=\"sub-category\" (change)=\"getServices()\" *ngFor=\"let service of serviceList\">\r\n            <li *ngIf=\"service.categoryId==item.id\">\r\n              <a [routerLink]=\"['/getService', service.id]\">\r\n                <span>{{service.name}}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n</form>"

/***/ }),

/***/ "./src/app/component/MainPage/our-services/our-services.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/component/MainPage/our-services/our-services.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.our-services {\n  padding-bottom: 20px; }\n  section.our-services .services-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around; }\n  @media only screen and (min-width: 1200px) {\n      section.our-services .services-wrapper {\n        justify-content: space-between; } }\n  section.our-services .services-wrapper > li {\n      max-width: 341px;\n      min-width: 300px;\n      background: #fafafa;\n      padding: 25px 30px;\n      margin-bottom: 50px;\n      border-radius: 8px;\n      font-family: \"Oxygen\", sans-serif;\n      font-size: 16px;\n      font-weight: 500; }\n  @media only screen and (min-width: 1200px) {\n        section.our-services .services-wrapper > li {\n          flex-basis: 23%; } }\n  section.our-services .services-wrapper > li:hover {\n        box-shadow: 7px 7px 24px rgba(0, 0, 0, 0.09); }\n  section.our-services .services-wrapper .sub-category li {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 16px; }\n  section.our-services .services-wrapper h4 {\n      margin-bottom: 50px;\n      font-size: 20px;\n      font-weight: 600;\n      position: relative;\n      padding-top: 15px; }\n  section.our-services .services-wrapper h4 span {\n        position: absolute;\n        height: 52px;\n        width: 52px;\n        background: #ce3d66;\n        border-radius: 50%;\n        right: 0;\n        top: 0;\n        padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL291ci1zZXJ2aWNlcy9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcTWFpblBhZ2VcXG91ci1zZXJ2aWNlc1xcb3VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvTWFpblBhZ2Uvb3VyLXNlcnZpY2VzL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9NYWluUGFnZS9vdXItc2VydmljZXMvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFvQixFQXNEdkI7RUF2REQ7SUFNUSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZiw4QkFBNkIsRUE4Q2hDO0VDdkNIO01EZkY7UUFVWSwrQkFBOEIsRUE0Q3JDLEVBQUE7RUF0REw7TUFnQlksaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixvQkVYUTtNRllSLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsbUJBQWtCO01BQ2xCLGtDRXRCZ0I7TUZ1QmhCLGdCQUFlO01BQ2YsaUJBQWdCLEVBSW5CO0VDYlA7UURmRjtVQWNnQixnQkFBZSxFQWN0QixFQUFBO0VBNUJUO1FBMEJnQiw2Q0FBeUMsRUFDNUM7RUEzQmI7TUErQmdCLGNBQWE7TUFDYiwrQkFBOEI7TUFDOUIsb0JBQW1CLEVBQ3RCO0VBbENiO01Bc0NZLG9CQUFtQjtNQUNuQixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsa0JBQWlCLEVBV3BCO0VBckRUO1FBNENnQixtQkFBa0I7UUFDbEIsYUFBWTtRQUNaLFlBQVc7UUFDWCxvQkUzQ0M7UUY0Q0QsbUJBQWtCO1FBQ2xCLFNBQVE7UUFDUixPQUFNO1FBQ04sY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9NYWluUGFnZS9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcbnNlY3Rpb24ub3VyLXNlcnZpY2Vze1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBhOmhvdmVye1xyXG4gICAgICAgIC8vIGNvbG9yOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2VzLXdyYXBwZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmPiBsaXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVza3RvcHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDIzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM0MXB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtZ3JleTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaEZvbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDdweCA3cHggMjRweCByZ2JhKDAsMCwwLDAuMDkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWItY2F0ZWdvcnl7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/MainPage/our-services/our-services.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/MainPage/our-services/our-services.component.ts ***!
  \***************************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");



var OurServicesComponent = /** @class */ (function () {
    function OurServicesComponent(service) {
        this.service = service;
        this.categoryList = [];
        this.serviceList = [];
        this.idList = [];
        this.catnames = [];
        this.servicenames = [];
    }
    OurServicesComponent.prototype.ngOnInit = function () {
        this.getCategory();
    };
    OurServicesComponent.prototype.getCategory = function () {
        var _this = this;
        this.service.GetCategories().subscribe(function (res) {
            _this.categoryList = res;
            console.log(_this.categoryList);
            for (var _i = 0, _a = _this.categoryList; _i < _a.length; _i++) {
                var category = _a[_i];
                _this.idList.push(category.id);
                console.log(_this.idList);
            }
            for (var _b = 0, _c = _this.idList; _b < _c.length; _b++) {
                var id = _c[_b];
                _this.service.GetServicesByCategoryId(id).subscribe(function (result) {
                    for (var i = 0; i < 5; i++) {
                        if (result[i]) {
                            _this.serviceList.push(result[i]);
                            console.log(result[i]);
                        }
                    }
                });
            }
        });
    };
    OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__(/*! ./our-services.component.html */ "./src/app/component/MainPage/our-services/our-services.component.html"),
            styles: [__webpack_require__(/*! ./our-services.component.scss */ "./src/app/component/MainPage/our-services/our-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_2__["AddserviceService"]])
    ], OurServicesComponent);
    return OurServicesComponent;
}());



/***/ }),

/***/ "./src/app/component/MainPage/testiminials/testiminials.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/component/MainPage/testiminials/testiminials.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"testimonials\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h2 class=\"section-title\">Happy Service Finders</h2>\r\n        <p class=\"mb-5\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\r\n      </div>\r\n    </div>\r\n    <!-- slider -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <ngx-slick class=\"slick-slider carousel\" #slickModal=\"slick-modal\" [config]=\"{focus:false,slidesToShow: 2,slidesToScroll:1,dots: true, arrows: false, cssEase: easeInOut,responsive: [\r\n            {\r\n              breakpoint: 768,\r\n              settings: {\r\n                slidesToShow:1,\r\n                slidesToScroll: 1\r\n              }\r\n            }\r\n          ]}\">\r\n            <li ngxSlickItem class=\"slide\">\r\n              <div class=\"user-thumbnail\">\r\n                <img src=\"../../../../assets/img/demouser-1.png\" alt=\"\">\r\n              </div>\r\n              <p class=\"name\">KIM VERSTQACE <span>/ CEO at Cheers</span></p>\r\n              <div class=\"message\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet commodi iste sapiente. Recusandae ipsum dicta tempore sint illo voluptatum excepturi, repudiandae obcaecati qui. Laborum aliquid sint id repellendus necessitatibus.</p>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </li>\r\n            <li ngxSlickItem class=\"slide\">\r\n              <div class=\"user-thumbnail\">\r\n                <img src=\"../../../../assets/img/demouser-2.png\" alt=\"\">\r\n              </div>\r\n              <p class=\"name\">ROBERT TIMPTHY <span>/ CEO at Cheers</span></p>\r\n              <div class=\"message\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet commodi iste sapiente. Recusandae ipsum dicta tempore sint illo voluptatum excepturi, repudiandae obcaecati qui. Laborum aliquid sint id repellendus necessitatibus.</p>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </li>\r\n            <li ngxSlickItem class=\"slide\">\r\n              <div class=\"user-thumbnail\">\r\n                <img src=\"../../../../assets/img/demouser-1.png\" alt=\"\">\r\n              </div>\r\n              <p class=\"name\">KIM VERSTQACE / CEO at Cheers</p>\r\n              <div class=\"message\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet commodi iste sapiente. Recusandae ipsum dicta tempore sint illo voluptatum excepturi, repudiandae obcaecati qui. Laborum aliquid sint id repellendus necessitatibus.</p>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </li>\r\n            <li ngxSlickItem class=\"slide\">\r\n              <div class=\"user-thumbnail\">\r\n                <img src=\"../../../../assets/img/demouser-2.png\" alt=\"\">\r\n              </div>\r\n              <p class=\"name\">ROBERT TIMPTHY <span>/ Sr. Designer at Pexels</span></p>\r\n              <div class=\"message\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet commodi iste sapiente. Recusandae ipsum dicta tempore sint illo voluptatum excepturi, repudiandae obcaecati qui. Laborum aliquid sint id repellendus necessitatibus.</p>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </li>\r\n            <li ngxSlickItem class=\"slide\">\r\n              <div class=\"user-thumbnail\">\r\n                <img src=\"../../../../assets/img/demouser-1.png\" alt=\"\">\r\n              </div>\r\n              <p class=\"name\">KIM VERSTQACE <span>/ CEO at Cheers</span></p>\r\n              <div class=\"message\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet commodi iste sapiente. Recusandae ipsum dicta tempore sint illo voluptatum excepturi, repudiandae obcaecati qui. Laborum aliquid sint id repellendus necessitatibus.</p>\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\r\n              </div>\r\n            </li>\r\n          </ngx-slick>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/MainPage/testiminials/testiminials.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/component/MainPage/testiminials/testiminials.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.testimonials .slide {\n  background-image: url('testimonial-watermark.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  margin-bottom: 25px; }\n  @media only screen and (min-width: 768px) {\n    section.testimonials .slide {\n      background-position: top 50px right 20px;\n      margin: 0 30px;\n      margin-bottom: 50px; } }\n  section.testimonials .slide:focus, section.testimonials .slide:hover {\n    outline: none;\n    box-shadow: 4px 4px 17px rgba(0, 0, 0, 0.2); }\n  section.testimonials .slide .user-thumbnail {\n    margin-bottom: 15px; }\n  section.testimonials .slide .name {\n    font-weight: 500;\n    font-family: \"Oxygen\", sans-serif;\n    font-size: 18px; }\n  section.testimonials .slide .name span {\n      color: #f91942; }\n  section.testimonials .slide .message {\n    color: #b7b7b7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL3Rlc3RpbWluaWFscy9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcTWFpblBhZ2VcXHRlc3RpbWluaWFsc1xcdGVzdGltaW5pYWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvTWFpblBhZ2UvdGVzdGltaW5pYWxzL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9NYWluUGFnZS90ZXN0aW1pbmlhbHMvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLG1EQUF1RTtFQUN2RSw2QkFBNEI7RUFDNUIsK0JBQThCO0VBQzlCLG9CQUFtQixFQXdCdEI7RUNwQkg7SURURjtNQU9ZLHlDQUF3QztNQUN4QyxlQUFjO01BQ2Qsb0JBQW1CLEVBb0IxQixFQUFBO0VBN0JMO0lBWVksY0FBYTtJQUNiLDRDQUEyQyxFQUM5QztFQWRUO0lBZ0JZLG9CQUFtQixFQUN0QjtFQWpCVDtJQW1CWSxpQkFBZ0I7SUFDaEIsa0NFcEJnQjtJRnFCaEIsZ0JBQWUsRUFJbEI7RUF6QlQ7TUF1QmdCLGVFcEJILEVGcUJBO0VBeEJiO0lBMkJZLGVFbkJFLEVGb0JMIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L01haW5QYWdlL3Rlc3RpbWluaWFscy90ZXN0aW1pbmlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvbWl4aW5zJztcclxuc2VjdGlvbi50ZXN0aW1vbmlhbHN7XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdGVzdGltb25pYWwtd2F0ZXJtYXJrLnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCA1MHB4IHJpZ2h0IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZvY3VzLCY6aG92ZXJ7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VyLXRodW1ibmFpbHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkaEZvbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZXNzYWdle1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcbkBtaXhpbiBtZWRpdW0ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWVkaXVtLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRlc2t0b3Age1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJldGluYSB7XHJcbiAgQG1lZGlhXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwcmludCB7XHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5cclxuXHJcbi8vIHZlbmRvciBwcmVmaXhlcnNcclxuQG1peGluIHByZWZpeCgkZGVjbGFyYXRpb25zLCAkcHJlZml4ZXM6ICgpKSB7XHJcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJGRlY2xhcmF0aW9ucyB7XHJcbiAgICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XHJcbiAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgc3RhbmRhcmQgbm9uLXByZWZpeGVkIGRlY2xhcmF0aW9uXHJcbiAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICB9XHJcbn1cclxuLy8gdmVuZG9yIHByZWZpeGVycyIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/MainPage/testiminials/testiminials.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/MainPage/testiminials/testiminials.component.ts ***!
  \***************************************************************************/
/*! exports provided: TestiminialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestiminialsComponent", function() { return TestiminialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestiminialsComponent = /** @class */ (function () {
    function TestiminialsComponent() {
    }
    TestiminialsComponent.prototype.ngOnInit = function () {
    };
    TestiminialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testiminials',
            template: __webpack_require__(/*! ./testiminials.component.html */ "./src/app/component/MainPage/testiminials/testiminials.component.html"),
            styles: [__webpack_require__(/*! ./testiminials.component.scss */ "./src/app/component/MainPage/testiminials/testiminials.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestiminialsComponent);
    return TestiminialsComponent;
}());



/***/ }),

/***/ "./src/app/component/ResetPassword/resetPassword.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/ResetPassword/resetPassword.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"login-forms d-flex justify-content-center align-items-center\">\r\n  <!-- login/'signup wrapper' -->\r\n  <div class=\"tab-wrapper\">\r\n    <div class=\"tab-menu\">\r\n      <!-- tab-menu -->\r\n      <ul class=\"nav nav-tabs\" id=\"loginSignupTab\" role=\"tablist\">\r\n        <li class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\" id=\"loginTab\" href=\"#loginForm\">Reset Your Password\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- tab contents -->\r\n    <div class=\"tab-content\">\r\n      <!-- login -->\r\n      <div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"loginForm\">\r\n        <div class=\"login-wrapper\">\r\n          <form #form=\"ngForm\" class=\"dark-form\" autocomplete=\"off\" (submit)=\"onResetPass(form)\" method=\"POST\">\r\n\r\n            <mat-form-field>\r\n              <input matInput email name=\"email\" #email=\"ngModel\" [(ngModel)]=\"resetPass.email\" placeholder=\"Email\" required>\r\n              <mat-icon matSuffix>person</mat-icon>\r\n            </mat-form-field>\r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n              <div class=\"errorMsg\" *ngIf=\"email.errors.required\">Email is required.</div>\r\n              <div class=\"errorMsg\" *ngIf=\"email.errors?.email\">\r\n                Email formate is not valid.\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <mat-form-field>\r\n              <input matInput [type]=\"hide ? 'text' : 'password'\" name=\"password\" #password=\"ngModel\"\r\n                [(ngModel)]=\"resetPass.password\" placeholder=\"Your New Password is here\" required\r\n                pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{6,}$\">\r\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{\r\n                  hide ? \"visibility\" : \"visibility_off\"\r\n                }}</mat-icon>\r\n            </mat-form-field>\r\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n              <div class=\"errorMsg\" *ngIf=\"password.errors.required\">\r\n                Password is required.\r\n              </div>\r\n              <div class=\"errorMsg\" *ngIf=\"password.errors.pattern\">\r\n                Six or more character password is required and must contain at least one\r\n                digit, one capital letter and one of these symbols !,@,#,$,%,^,&,*\r\n              </div>\r\n            </div>\r\n\r\n            <mat-form-field>\r\n              <input matInput [type]=\"hide ? 'text' : 'password'\" name=\"confirmPassword\" #confirmPassword=\"ngModel\"\r\n                [(ngModel)]=\"resetPass.confirmPassword\" placeholder=\"Your Confirm Password is here\" required\r\n                appConfirmEqualValidator=\"password\">\r\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{\r\n                  hide ? \"visibility\" : \"visibility_off\"\r\n                }}</mat-icon>\r\n            </mat-form-field>\r\n            <div *ngIf=\" confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\r\n              class=\"alert alert-danger\">\r\n              <div class=\"errorMsg\" *ngIf=\"confirmPassword.errors.required\">\r\n                Confirm Password Name is required.\r\n              </div>\r\n              <div class=\"errorMsg\" *ngIf=\"confirmPassword.errors?.notEqual\">\r\n                Password and Confirm Password do not match\r\n              </div>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\">\r\n              Submit <i class=\"material-icons\">arrow_forward</i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/ResetPassword/resetPassword.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/ResetPassword/resetPassword.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.login-forms {\n  background: url('loginbg.png');\n  background-size: cover;\n  background-position: center; }\n  @media only screen and (min-width: 768px) {\n    section.login-forms {\n      height: 100vh;\n      margin-top: -125px; } }\n  section.login-forms .tab-wrapper {\n    background: rgba(0, 0, 0, 0.8);\n    padding: 30px 15px;\n    border-radius: 8px;\n    flex-basis: 90%; }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .tab-wrapper {\n        padding: 50px;\n        width: 100%;\n        max-width: 450px; } }\n  section.login-forms .nav-tabs {\n    border: 0; }\n  section.login-forms .nav-tabs .nav-link {\n      background: none;\n      border: none;\n      color: #fff;\n      opacity: 0.5;\n      font-size: 18px; }\n  section.login-forms .nav-tabs .nav-link:first-child {\n        padding-left: 0; }\n  section.login-forms .nav-tabs .nav-link.active {\n        opacity: 1; }\n  section.login-forms .nav-tabs .nav-link.active::after {\n          content: \"\";\n          display: block;\n          height: 2px;\n          background: #f91942; }\n  section.login-forms form.dark-form {\n    margin-top: 15px; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field {\n      display: block;\n      width: 100%;\n      color: white !important; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field .mat-form-field-label {\n        opacity: 0; }\n  section.login-forms .login-wrapper {\n    display: flex; }\n  @media screen and (max-width: 767px) {\n      section.login-forms .login-wrapper {\n        flex-direction: column; } }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .login-wrapper form, section.login-forms .login-wrapper .quick-sign-in {\n        flex-basis: 100%; } }\n  section.login-forms .login-wrapper .quick-sign-in {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      margin-top: 20px; }\n  @media only screen and (min-width: 768px) {\n        section.login-forms .login-wrapper .quick-sign-in {\n          margin-top: 0;\n          align-items: center;\n          justify-content: center; }\n          section.login-forms .login-wrapper .quick-sign-in h4 {\n            text-align: center; } }\n  section.login-forms .login-wrapper .quick-sign-in h4 {\n        display: inline-block;\n        color: #fff;\n        font-size: 14px;\n        font-weight: 600; }\n  section.login-forms .login-wrapper .quick-sign-in h4::after {\n          content: \"\";\n          height: 2px;\n          width: 100px;\n          background-color: #fff;\n          margin-top: 4px;\n          display: block; }\n  @media only screen and (min-width: 768px) {\n            section.login-forms .login-wrapper .quick-sign-in h4::after {\n              width: 100%; } }\n  section.login-forms .login-wrapper .quick-sign-in ul {\n        display: flex; }\n  section.login-forms .login-wrapper .quick-sign-in ul li {\n          margin: 10px; }\n  section.login-forms .login-wrapper .quick-sign-in ul a {\n          font-size: 24px;\n          color: #fff; }\n  section.login-forms .login-wrapper .quick-sign-in ul a:hover {\n            color: #f91942; }\n  section.login-forms .login-wrapper .btn.btn-primary {\n      display: flex; }\n  section.login-forms .login-wrapper .btn.btn-primary i {\n        margin-left: 15px; }\n  section.login-forms .login-wrapper p {\n      margin-top: 10px;\n      color: #fff; }\n  section.login-forms .login-wrapper p a {\n        color: #f91942; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L1Jlc2V0UGFzc3dvcmQvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXBwXFxjb21wb25lbnRcXFJlc2V0UGFzc3dvcmRcXHJlc2V0UGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9SZXNldFBhc3N3b3JkL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9SZXNldFBhc3N3b3JkL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFzc2V0c1xcc2Fzcy1oZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFRSwrQkFBZ0Q7RUFDaEQsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQW9KNUI7RUNoSkM7SURSRjtNQU9JLGNBQWE7TUFDYixtQkFBa0IsRUFnSnJCLEVBQUE7RUF4SkQ7SUFZSSwrQkFBMkI7SUFDM0IsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixnQkFBZSxFQU9oQjtFQ2REO01EUkY7UUFrQk0sY0FBYTtRQUNiLFlBQVc7UUFDWCxpQkFBZ0IsRUFFbkIsRUFBQTtFQXRCSDtJQXlCSSxVQUFTLEVBd0JWO0VBakRIO01BNEJNLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osWUV6Qk07TUYwQk4sYUFBWTtNQUNaLGdCQUFlLEVBZ0JoQjtFQWhETDtRQW1DUSxnQkFBZSxFQUNoQjtFQXBDUDtRQXVDUSxXQUFVLEVBUVg7RUEvQ1A7VUEwQ1UsWUFBVztVQUNYLGVBQWM7VUFDZCxZQUFXO1VBQ1gsb0JFM0NHLEVGNENKO0VBOUNUO0lBb0RJLGlCQUFnQixFQVdqQjtFQS9ESDtNQXVETSxlQUFjO01BQ2QsWUFBVztNQUNYLHdCQUFxQyxFQUt0QztFQTlETDtRQTREUSxXQUFVLEVBQ1g7RUE3RFA7SUFrRUksY0FBYSxFQW1GZDtFQWpGQztNQXBFSjtRQXFFTSx1QkFBc0IsRUFnRnpCLEVBQUE7RUM3SUQ7TURSRjtRQTBFUSxpQkFBZ0IsRUFFbkIsRUFBQTtFQTVFTDtNQStFTSxjQUFhO01BQ2IsZ0JBQWU7TUFDZix1QkFBc0I7TUFDdEIsaUJBQWdCLEVBaURqQjtFQzNISDtRRFJGO1VBcUZRLGNBQWE7VUFDYixvQkFBbUI7VUFDbkIsd0JBQXVCLEVBNEMxQjtVQW5JTDtZQTBGVSxtQkFBa0IsRUFDbkIsRUFBQTtFQTNGVDtRQStGUSxzQkFBcUI7UUFDckIsWUUzRkk7UUY0RkosZ0JBQWU7UUFDZixpQkFBZ0IsRUFlakI7RUFqSFA7VUFxR1UsWUFBVztVQUNYLFlBQVc7VUFDWCxhQUFZO1VBTVosdUJFeEdFO1VGeUdGLGdCQUFlO1VBQ2YsZUFBYyxFQUNmO0VDeEdQO1lEUkY7Y0EwR1ksWUFBVyxFQU1kLEVBQUE7RUFoSFQ7UUFvSFEsY0FBYSxFQWNkO0VBbElQO1VBdUhVLGFBQVksRUFDYjtFQXhIVDtVQTJIVSxnQkFBZTtVQUNmLFlFdkhFLEVGNEhIO0VBaklUO1lBK0hZLGVFN0hDLEVGOEhGO0VBaElYO01Bc0lNLGNBQWEsRUFLZDtFQTNJTDtRQXlJUSxrQkFBaUIsRUFDbEI7RUExSVA7TUE4SU0saUJBQWdCO01BQ2hCLFlFMUlNLEVGK0lQO0VBcEpMO1FBa0pRLGVFaEpLLEVGaUpOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L1Jlc2V0UGFzc3dvcmQvcmVzZXRQYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy9taXhpbnMnO1xyXG5cclxuc2VjdGlvbi5sb2dpbi1mb3JtcyB7XHJcbiAgLy8gbWFyZ2luLXRvcDogODBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dpbmJnLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogLTEyNXB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYi13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZsZXgtYmFzaXM6IDkwJTtcclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm0uZGFyay1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dpbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtLCAucXVpY2stc2lnbi1pbiB7XHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5xdWljay1zaWduLWluIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gYW5ndWxhciBmb3JtIHJlc2V0dFxyXG4gIC8vIGFuZ3VsYXIgZm9ybSByZXNldHRcclxufVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG5cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuQG1peGluIG1lZGl1bSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRtZWRpdW0td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmV0aW5hIHtcclxuICBAbWVkaWFcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByaW50IHtcclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcblxyXG5cclxuLy8gdmVuZG9yIHByZWZpeGVyc1xyXG5AbWl4aW4gcHJlZml4KCRkZWNsYXJhdGlvbnMsICRwcmVmaXhlczogKCkpIHtcclxuICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiAkZGVjbGFyYXRpb25zIHtcclxuICAgIEBlYWNoICRwcmVmaXggaW4gJHByZWZpeGVzIHtcclxuICAgICAgI3snLScgKyAkcHJlZml4ICsgJy0nICsgJHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE91dHB1dCBzdGFuZGFyZCBub24tcHJlZml4ZWQgZGVjbGFyYXRpb25cclxuICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xyXG4gIH1cclxufVxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzIiwiLy8gZm9udHNcclxuJGdGb250OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuJGhGb250OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIGNvbG9yc1xyXG4kcmVkOiAjZjkxOTQyO1xyXG4kbXV0ZVJlZDogI2NlM2Q2NjsgXHJcbiRibGFjazogIzI1MjUyNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtZ3JleTogI2ZhZmFmYTtcclxuJGdyZXk6ICNiN2I3Yjc7XHJcbiR0cmFuc0JsdWU6ICNkZWVlZjY7XHJcbiRncmVlbjogIzNkY2U4ODtcclxuJGJsdWU6ICMwNmExY2U7XHJcblxyXG4vLyBjb2xvciByb2xlc1xyXG4kcHJpbWFyeS1jb2xvcjogJG11dGVSZWQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICRibGFjaztcclxuXHJcbi8vICBtZWRpYSBxdWVyeSBicmVha3BvaW50c1xyXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcclxuJGRlc2t0b3Atd2lkdGg6IDEyMDBweDtcclxuJG1lZGl1bS13aWR0aDogMzc1cHg7XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/component/ResetPassword/resetPassword.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/ResetPassword/resetPassword.component.ts ***!
  \********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user_resetpass_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user.resetpass.model */ "./src/app/models/user.resetpass.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/SignIn/usersignin.service */ "./src/app/services/SignIn/usersignin.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(signInService, toastr, router, route) {
        this.signInService = signInService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.resetModel = null;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        debugger;
        this.resetPass = new src_app_models_user_resetpass_model__WEBPACK_IMPORTED_MODULE_2__["UserResetPass"]();
        this.token = localStorage.resetPasswordToken;
    };
    ResetPasswordComponent.prototype.onResetPass = function (form) {
        var _this = this;
        debugger;
        if (form.value) {
            this.resetModel = new src_app_models_user_resetpass_model__WEBPACK_IMPORTED_MODULE_2__["UserResetPass"]();
            this.resetModel.email = form.value.email;
            this.resetModel.password = form.value.password;
            this.resetModel.token = this.token;
            this.signInService.resetPassByEmail(this.resetModel).subscribe(function (res) {
                //Clear reset model data
                _this.resetModel = null;
                var response = res;
                if (!response.isSuccess) {
                    _this.toastr.error("Error while resetting the password!", "", { positionClass: 'toast-top-center' });
                }
                else {
                    _this.toastr.success("Password Reset Successful", "", { positionClass: 'toast-top-center' });
                    _this.router.navigate(['signin']);
                }
            });
        }
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetPassword',
            template: __webpack_require__(/*! ./resetPassword.component.html */ "./src/app/component/ResetPassword/resetPassword.component.html"),
            styles: [__webpack_require__(/*! ./resetPassword.component.scss */ "./src/app/component/ResetPassword/resetPassword.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_4__["UserSignInService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/component/ServiceInfo/service-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/ServiceInfo/service-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"service-detail py-0\">\r\n  <div class=\"header\" style=\"background-image: url(../assets/img/default-cover.gif)\">\r\n    <div class=\"container\">\r\n      <!-- upper part -->\r\n      <div class=\"row\">\r\n        <div class=\"service-header-outer col-md-12\">\r\n          <div class=\"service-header-wrapper d-flex align-items-end\">\r\n            <!-- service profile photo -->\r\n            <div class=\"profile-pic\">\r\n              <img src=\"../../../assets/img/default-service-image.png\" alt=\"service-logo\">\r\n            </div>\r\n            <!-- service general details -->\r\n            <div class=\"general-details\">\r\n              <h2>{{serviceDetail.name}} <span class=\"category-icon fooding\"></span></h2>\r\n              <!-- <p class=\"tagline\">We provide better quality product, hygenic foods and goods.</p> -->\r\n              <ul class=\"d-flex\">\r\n                <!-- rating -->\r\n                <!-- <li>\r\n                  <span class=\"lnr lnr-heart\"></span>\r\n                  <span class=\"service-rating\">4.7 <small>/5</small></span>\r\n                </li> -->\r\n                <!-- mail -->\r\n                <li>\r\n                    <span class=\"lnr lnr-envelope\"></span>\r\n                    <a href=\"mailto:{{serviceDetail.email}}\">{{serviceDetail.email}}</a>\r\n                </li>\r\n                <!-- location -->\r\n                <li>\r\n                    <span class=\"lnr lnr-map-marker\"></span>\r\n                    <span>Thamel, Kathmandu</span>\r\n                </li>\r\n                <!-- contact number -->\r\n                <li>\r\n                    <span class=\"lnr lnr-phone-handset\"></span>\r\n                    <a href=\"tel:{{serviceDetail.phoneNumber}}\">{{serviceDetail.phoneNumber}}</a>\r\n                </li>\r\n              </ul>\r\n              <div class=\"directory\">\r\n                <span>services </span><span class=\"lnr lnr-chevron-right\"></span>\r\n                <span>food </span><span class=\"lnr lnr-chevron-right\"></span>\r\n                <span>bikram's bakery </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <!-- lower part -->\r\n    <div class=\"row\">\r\n      <!-- detail tabs -->\r\n      <div class=\"col-md-8\">\r\n        <!-- tab menus -->\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" href=\"#overview\" role=\"tab\" data-toggle=\"tab\">OVERVIEW</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#gallery\" role=\"tab\" data-toggle=\"tab\">GALLERY</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#about-us\" role=\"tab\" data-toggle=\"tab\">ABOUT US</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#reviews\" role=\"tab\" data-toggle=\"tab\">REVIEWS</a>\r\n          </li>\r\n        </ul>\r\n        <!-- tab contents -->\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"overview\">\r\n            <p>{{serviceDetail.description}}</p>\r\n            <!-- <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->\r\n            <!-- <h6>Our Features</h6>\r\n            <ul>\r\n              <li>Pasteries</li>\r\n              <li>Coffee & Drinks</li>\r\n              <li>Birthday Cakes</li>\r\n              <li>Event Receptions(Birthdays, Anniversaries, Seminars, Others)</li>\r\n            </ul> -->\r\n          </div>\r\n          <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"gallery\">\r\n              <ngx-slick class=\"slick-slider carousel gallery-carousel\" #slickModal=\"slick-modal\" \r\n              [config]=\"{\r\n                slidesToShow: 1,\r\n                slidesToScroll:1,\r\n                dots: fale,\r\n                arrows: true,\r\n                cssEase: easeInOut,\r\n                responsive: [\r\n                  {\r\n                    breakpoint: 768,\r\n                    settings: {\r\n                      slidesToShow:1,\r\n                      slidesToScroll: 1\r\n                    }\r\n                  }\r\n                ]\r\n                }\">\r\n                <li *ngFor=\"let item of imageList\" class=\"slide\" ngxSlickItem >\r\n                    <div  class=\"gallery-item\">\r\n                      <img src=\"../../../../../wwwroot/Images/{{item.originalImageName}}\" alt=\"service-thumbnail\">\r\n                      <div class=\"info\">\r\n                        <h4>{{item.originalImageName}}</h4>\r\n                        <p class=\"small-detail\"></p>\r\n                      </div>\r\n                    </div>\r\n                </li>\r\n              </ngx-slick>\r\n          </div>\r\n          <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"about-us\">\r\n            <ul>\r\n              <!-- location -->\r\n              <li>\r\n                  <span class=\"lnr lnr-map-marker\"></span>\r\n                  <p><b>Address</b></p>\r\n                  <span>Thamel, Kathmandu</span>\r\n              </li>\r\n              <!-- mail -->\r\n              <li>\r\n                  <p><b>Email</b></p>\r\n                  <span class=\"lnr lnr-envelope\"></span>\r\n                  <a href=\"mailto:{{serviceDetail.email}}\">{{serviceDetail.email}}</a>\r\n              </li>\r\n              <!-- contact number -->\r\n              <li>\r\n                  <p><b>Contact</b></p>\r\n                  <span class=\"lnr lnr-phone-handset\"></span>\r\n                  <a href=\"tel:{{serviceDetail.phoneNumber}}\">{{serviceDetail.phoneNumber}}</a>\r\n              </li>\r\n              <!-- Parking -->\r\n              <!-- <li>\r\n                  <p><b>Parking</b></p>\r\n                  <span class=\"lnr lnr-car\"></span>\r\n                  <p>Available</p>\r\n              </li> -->\r\n            </ul>\r\n  \r\n            <!-- =================== map section ==================== -->\r\n            <!-- <div>\r\n              <p><b>Map Assistant</b></p>\r\n              <iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/undefined?origin=...&q=...&destination=...&center=...&zoom=...&key=...\" allowfullscreen></iframe>\r\n            </div> -->\r\n            </div>\r\n          <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"reviews\">\r\n            <!-- rating header -->\r\n            <div class=\"rating-overview\">\r\n                <!-- rating highlight -->\r\n                <div class=\"rating-block\">\r\n                  <span>ratings</span>\r\n                  <div>\r\n                    <span class=\"overall-rating\">4.7</span>\r\n                    <span>/5</span>\r\n                  </div>\r\n                </div>\r\n                <!-- rating header -->\r\n                <div>\r\n                  <h3>Reviews</h3>\r\n                  <p>Based  on reviews made by <span>153</span> customers</p>\r\n                </div>\r\n              </div>\r\n              <!-- list of reviews -->\r\n              <ul>\r\n                <li>\r\n                  <p><b>Rabindra, Kathmandu</b>&nbsp;<span class=\"date\">july 2019</span></p>\r\n                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>\r\n                </li>\r\n                <li>\r\n                  <p><b>Rabindra, Kathmandu</b>&nbsp;<span class=\"date\">july 2019</span></p>\r\n                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>\r\n                </li>\r\n                <li>\r\n                  <p><b>Rabindra, Kathmandu</b>&nbsp;<span class=\"date\">july 2019</span></p>\r\n                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>\r\n                </li>\r\n              </ul>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!-- contact part -->\r\n      <div class=\"col-md-4\">\r\n        <P class=\"contact-heading\"><B>CONTACT PROVIDER</B></P>\r\n        <div class=\"shift open\">\r\n          SERVICE OPEN ( <span>9PM</span> - <span>8AM</span> )\r\n        </div>\r\n        <form class=\"contact-form\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"FULL NAME\" required>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"EMAIL ADDRESS\" required>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"CONTACT NO\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n              <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n            </mat-form-field>\r\n          <button class=\"btn btn-primary\">\r\n            Send Message\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/component/ServiceInfo/service-info.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/component/ServiceInfo/service-info.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.service-detail {\n  background-color: rgba(183, 183, 183, 0.2);\n  margin-bottom: 30px; }\n  section.service-detail .header {\n    padding-top: 150px;\n    margin-bottom: 80px; }\n  section.service-detail .header .service-header-wrapper {\n      position: relative;\n      bottom: -40px; }\n  section.service-detail .header .service-header-wrapper .profile-pic {\n        margin-right: 20px;\n        border: 2px solid #f91942; }\n  section.service-detail .header .general-details h2, section.service-detail .header .general-details p, section.service-detail .header .general-details li, section.service-detail .header .general-details a {\n      color: #fff; }\n  section.service-detail .header .general-details ul {\n      margin-bottom: 40px; }\n  section.service-detail .header .general-details ul li {\n        margin-right: 10px; }\n  section.service-detail .header .general-details ul li span.lnr {\n          margin-right: 5px; }\n  section.service-detail .tab-content .tab-pane {\n    display: block;\n    background: #fff;\n    max-height: 555px; }\n  section.service-detail .tab-content .tab-pane.fade {\n      height: 0;\n      padding: 0;\n      overflow: hidden; }\n  section.service-detail .tab-content .tab-pane.fade.active {\n        padding: 30px 15px;\n        height: auto;\n        overflow-y: auto; }\n  section.service-detail .tab-content #gallery {\n    padding: 0; }\n  section.service-detail .tab-content #gallery .gallery-item {\n      position: relative; }\n  section.service-detail .tab-content #gallery .gallery-item .info {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        padding: 0 30px 20px 30px; }\n  section.service-detail .tab-content #gallery .gallery-item .info h4, section.service-detail .tab-content #gallery .gallery-item .info p {\n          color: #fff; }\n  section.service-detail .tab-content #gallery .slick-prev {\n      left: 20px !important; }\n  section.service-detail #overview ul li {\n    position: relative;\n    padding-left: 15px; }\n  section.service-detail #overview ul li::before {\n      content: \"-\";\n      position: absolute;\n      left: 0;\n      top: 0; }\n  section.service-detail #reviews .rating-overview {\n    display: flex;\n    margin-bottom: 30px; }\n  section.service-detail #reviews .rating-overview h3 {\n      font-size: 32px;\n      font-weight: 300; }\n  section.service-detail #reviews .rating-overview p span {\n      color: #f91942; }\n  section.service-detail #reviews .rating-block {\n    background: #f91942;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    height: 96px;\n    flex-basis: 96px;\n    padding: 20px;\n    margin-right: 15px; }\n  section.service-detail #reviews .rating-block span {\n      font-size: 18px; }\n  section.service-detail #reviews .rating-block .overall-rating {\n      font-size: 32px;\n      font-weight: 600; }\n  section.service-detail #reviews .rating-block div span {\n      font-size: 22px; }\n  section.service-detail #reviews ul {\n    margin-bottom: 0; }\n  section.service-detail #reviews ul li {\n      border-bottom: 1px solid rgba(183, 183, 183, 0.4);\n      margin-bottom: 20px; }\n  section.service-detail #reviews ul li:last-child {\n        margin-bottom: 0; }\n  section.service-detail #reviews ul li .date {\n        text-transform: capitalize; }\n  section.service-detail #about-us ul {\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom: 1px solid rgba(183, 183, 183, 0.3);\n    margin-bottom: 25px; }\n  section.service-detail #about-us ul li {\n      flex-basis: 50%;\n      position: relative;\n      padding-left: 30px;\n      margin-bottom: 20px; }\n  section.service-detail #about-us ul li p {\n        margin-bottom: 8px; }\n  section.service-detail #about-us ul li span.lnr {\n        position: absolute;\n        top: 0;\n        left: 0; }\n  section.service-detail .contact-form {\n    padding: 30px 10px 15px;\n    margin-top: 15px;\n    background: #fff; }\n  section.service-detail .contact-form .mat-form-field-appearance-legacy .mat-form-field-infix {\n      background-color: #fff;\n      display: none; }\n  section.service-detail .shift {\n    padding: 15px 10px;\n    color: #fff; }\n  section.service-detail .shift.open {\n      background: #3dce88; }\n  section.service-detail .shift.closed {\n      background: #252525; }\n  section.service-detail .contact-heading {\n    margin-bottom: 20px;\n    color: #f91942; }\n  section.service-detail .nav-tabs {\n    border-bottom: 0;\n    margin-bottom: 20px; }\n  section.service-detail .nav-tabs .nav-item {\n      margin-right: 10px; }\n  section.service-detail .nav-tabs .nav-link {\n      background: transparent;\n      border: 0;\n      padding: 0; }\n  section.service-detail .nav-tabs .nav-link.active {\n        color: #f91942;\n        border-bottom: 2px solid #f91942;\n        font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L1NlcnZpY2VJbmZvL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxTZXJ2aWNlSW5mb1xcc2VydmljZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvU2VydmljZUluZm8vRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDJDQUE2RDtFQUM3RCxvQkFBbUIsRUE2THRCO0VBL0xEO0lBSVEsbUJBQWtCO0lBQ2xCLG9CQUFtQixFQXVCdEI7RUE1Qkw7TUFPWSxtQkFBa0I7TUFDbEIsY0FBYSxFQUtoQjtFQWJUO1FBVWdCLG1CQUFrQjtRQUNsQiwwQkNSSCxFRFNBO0VBWmI7TUFnQmdCLFlDVkosRURXQztFQWpCYjtNQW1CZ0Isb0JBQW1CLEVBT3RCO0VBMUJiO1FBcUJvQixtQkFBa0IsRUFJckI7RUF6QmpCO1VBdUJ3QixrQkFBaUIsRUFDcEI7RUF4QnJCO0lBK0JZLGVBQWM7SUFDZCxpQkMxQkE7SUQyQkEsa0JBQWlCLEVBWXBCO0VBN0NUO01BbUNnQixVQUFTO01BQ1QsV0FBVTtNQUNWLGlCQUFnQixFQU9uQjtFQTVDYjtRQXdDb0IsbUJBQWtCO1FBQ2xCLGFBQVk7UUFDWixpQkFBZ0IsRUFDbkI7RUEzQ2pCO0lBK0NZLFdBQVUsRUFnQmI7RUEvRFQ7TUFpRGdCLG1CQUFrQixFQVVyQjtFQTNEYjtRQW1Eb0IsbUJBQWtCO1FBQ2xCLFFBQU87UUFDUCxVQUFTO1FBQ1QsMEJBQXlCLEVBSTVCO0VBMURqQjtVQXdEd0IsWUNsRFosRURtRFM7RUF6RHJCO01BNkRnQixzQkFBcUIsRUFDeEI7RUE5RGI7SUFvRWdCLG1CQUFrQjtJQUNsQixtQkFBa0IsRUFPckI7RUE1RWI7TUF1RW9CLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsUUFBTztNQUNQLE9BQU0sRUFDVDtFQTNFakI7SUFpRlksY0FBYTtJQUNiLG9CQUFtQixFQVF0QjtFQTFGVDtNQW9GZ0IsZ0JBQWU7TUFDZixpQkFBZ0IsRUFDbkI7RUF0RmI7TUF3RmdCLGVDckZILEVEc0ZBO0VBekZiO0lBNEZZLG9CQ3pGQztJRDBGRCxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsWUMzRkE7SUQ0RkEsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsbUJBQWtCLEVBV3JCO0VBaEhUO01BdUdnQixnQkFBZSxFQUNsQjtFQXhHYjtNQTBHZ0IsZ0JBQWU7TUFDZixpQkFBZ0IsRUFDbkI7RUE1R2I7TUE4R2dCLGdCQUFlLEVBQ2xCO0VBL0diO0lBa0hZLGlCQUFnQixFQVduQjtFQTdIVDtNQW9IZ0Isa0RBQW9FO01BQ3BFLG9CQUFtQixFQU90QjtFQTVIYjtRQXVIb0IsaUJBQWdCLEVBQ25CO0VBeEhqQjtRQTBIb0IsMkJBQTBCLEVBQzdCO0VBM0hqQjtJQWtJWSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZixrREFBb0U7SUFDcEUsb0JBQW1CLEVBZXRCO0VBcEpUO01BdUlnQixnQkFBZTtNQUNmLG1CQUFrQjtNQUNsQixtQkFBa0I7TUFDbEIsb0JBQW1CLEVBU3RCO0VBbkpiO1FBNElvQixtQkFBa0IsRUFDckI7RUE3SWpCO1FBK0lvQixtQkFBa0I7UUFDbEIsT0FBTTtRQUNOLFFBQU8sRUFDVjtFQWxKakI7SUF1SlEsd0JBQXVCO0lBQ3ZCLGlCQUFnQjtJQUNoQixpQkNuSkksRUR3SlA7RUE5Skw7TUEySlksdUJDckpBO01Ec0pBLGNBQWEsRUFDaEI7RUE3SlQ7SUFnS1EsbUJBQWtCO0lBQ2xCLFlDM0pJLEVEa0tQO0VBeEtMO01BbUtZLG9CQ3pKRyxFRDBKTjtFQXBLVDtNQXNLWSxvQkNqS0csRURrS047RUF2S1Q7SUEwS1Esb0JBQW1CO0lBQ25CLGVDeEtLLEVEeUtSO0VBNUtMO0lBK0tRLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFjdEI7RUE5TEw7TUFrTFksbUJBQWtCLEVBQ3JCO0VBbkxUO01BcUxZLHdCQUF1QjtNQUN2QixVQUFTO01BQ1QsV0FBVSxFQU1iO0VBN0xUO1FBeUxnQixlQ3RMSDtRRHVMRyxpQ0N2TEg7UUR3TEcsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L1NlcnZpY2VJbmZvL3NlcnZpY2UtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy9taXhpbnMnO1xyXG5zZWN0aW9uLnNlcnZpY2UtZGV0YWlse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAkZ3JleSwgJGFtb3VudDogMC44KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgICAgIC5zZXJ2aWNlLWhlYWRlci13cmFwcGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTQwcHg7XHJcbiAgICAgICAgICAgIC5wcm9maWxlLXBpY3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRyZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmdlbmVyYWwtZGV0YWlsc3tcclxuICAgICAgICAgICAgaDIscCxsaSxhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5sbnJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWItY29udGVudHtcclxuICAgICAgICAudGFiLXBhbmV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDU1NXB4O1xyXG4gICAgICAgICAgICAmLmZhZGV7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNnYWxsZXJ5e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAuZ2FsbGVyeS1pdGVte1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLmluZm97XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaDQscHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNsaWNrLXByZXZ7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjb3ZlcnZpZXd7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNyZXZpZXdze1xyXG4gICAgICAgIC5yYXRpbmctb3ZlcnZpZXd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmF0aW5nLWJsb2Nre1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA5NnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm92ZXJhbGwtcmF0aW5ne1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnRpemUoJGNvbG9yOiAkZ3JleSwgJGFtb3VudDogMC42KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXN7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50aXplKCRjb2xvcjogJGdyZXksICRhbW91bnQ6IDAuNyk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3Bhbi5sbnJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZm9ybXtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDEwcHggMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNoaWZ0e1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICYub3BlbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNsb3NlZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWN0LWhlYWRpbmd7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgIH1cclxuICAgIC8vIGJvb3RzdHJhcCBvdmVycmlkZXNcclxuICAgIC5uYXYtdGFic3tcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcmVkO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGZvbnRzXHJcbiRnRm9udDogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRoRm9udDogJ094eWdlbicsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBjb2xvcnNcclxuJHJlZDogI2Y5MTk0MjtcclxuJG11dGVSZWQ6ICNjZTNkNjY7IFxyXG4kYmxhY2s6ICMyNTI1MjU7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHdoaXRlLWdyZXk6ICNmYWZhZmE7XHJcbiRncmV5OiAjYjdiN2I3O1xyXG4kdHJhbnNCbHVlOiAjZGVlZWY2O1xyXG4kZ3JlZW46ICMzZGNlODg7XHJcbiRibHVlOiAjMDZhMWNlO1xyXG5cclxuLy8gY29sb3Igcm9sZXNcclxuJHByaW1hcnktY29sb3I6ICRtdXRlUmVkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkYmxhY2s7XHJcblxyXG4vLyAgbWVkaWEgcXVlcnkgYnJlYWtwb2ludHNcclxuJHRhYmxldC13aWR0aDogNzY4cHg7XHJcbiRkZXNrdG9wLXdpZHRoOiAxMjAwcHg7XHJcbiRtZWRpdW0td2lkdGg6IDM3NXB4O1xyXG5cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/component/ServiceInfo/service-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/ServiceInfo/service-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServiceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoComponent", function() { return ServiceInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_user_viewService_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/user.viewService.model */ "./src/app/models/user.viewService.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ServiceInfoComponent = /** @class */ (function () {
    function ServiceInfoComponent(service, activeRoute) {
        this.service = service;
        this.activeRoute = activeRoute;
        this.serviceDetail = new _models_user_viewService_model__WEBPACK_IMPORTED_MODULE_1__["ViewService"]();
        this.imageList = [];
    }
    ServiceInfoComponent.prototype.ngAfterViewInit = function () {
        var routeParams = this.activeRoute.snapshot.params;
        this.serviceId = routeParams !== null ? Number(routeParams.serviceId) : 0;
        this.getServiceDetail();
    };
    ServiceInfoComponent.prototype.getServiceDetail = function () {
        var _this = this;
        if (this.serviceId > 0) {
            this.service.GetServiceByServiceItemId(this.serviceId).subscribe(function (res) {
                _this.serviceDetail = res;
                console.log(_this.serviceDetail);
                _this.service.GetImages(_this.serviceId).subscribe(function (result) {
                    _this.imageList = result;
                    console.log(_this.imageList);
                });
            });
        }
    };
    ServiceInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-service-info',
            template: __webpack_require__(/*! ./service-info.component.html */ "./src/app/component/ServiceInfo/service-info.component.html"),
            styles: [__webpack_require__(/*! ./service-info.component.scss */ "./src/app/component/ServiceInfo/service-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_3__["AddserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ServiceInfoComponent);
    return ServiceInfoComponent;
}());



/***/ }),

/***/ "./src/app/component/ServiceList/ServiceList.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/ServiceList/ServiceList.component.ts ***!
  \****************************************************************/
/*! exports provided: ServiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListComponent", function() { return ServiceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user_addService_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.addService.model */ "./src/app/models/user.addService.model.ts");
/* harmony import */ var src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Dashboard/AddService/addservice.service */ "./src/app/services/Dashboard/AddService/addservice.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var ServiceListComponent = /** @class */ (function () {
    function ServiceListComponent(service, route, searchPipe, router) {
        this.service = service;
        this.route = route;
        this.searchPipe = searchPipe;
        this.router = router;
        this.searchTerm = null;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.provider = new _models_user_addService_model__WEBPACK_IMPORTED_MODULE_4__["AddServiceModel"];
        this.categoryName = null;
    }
    ServiceListComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParamMap.has('searchTerm')) {
            this.searchTerm = this.route.snapshot.queryParamMap.get('searchTerm');
        }
        this.searchedList = JSON.parse(localStorage.getItem('searchedList'));
        this.getCategory();
        this.getServiceNames();
    };
    ServiceListComponent.prototype.getCategory = function () {
        var _this = this;
        this.service.GetCategories().subscribe(function (result) {
            _this.categoryList = result;
            console.log(_this.categoryList);
        });
    };
    ServiceListComponent.prototype.getServiceNames = function () {
        var _this = this;
        this.service.GetServices().subscribe(function (result) {
            _this.serviceList = result;
            console.log(_this.serviceList);
        });
    };
    ServiceListComponent.prototype.onClick = function (searchTerm) {
        var _this = this;
        this.getServiceNames();
        this.searchedList = [];
        //Search if only searchTerm available and if both category and searchTearm available
        if (searchTerm) {
            this.searchTerm = this.searchPipe.whitespace(searchTerm);
            this.serviceList = this.searchPipe.transform(this.serviceList, this.searchTerm);
            //arranging services according to category
            if (this.provider.categoryId) {
                this.serviceList.forEach(function (service) {
                    if (service.categoryId == _this.provider.categoryId) {
                        _this.searchedList.push(service);
                    }
                });
            }
            else {
                this.searchedList = this.serviceList;
            }
        }
        //Search only if categoryID is available. Search according to category only
        else {
            if (this.provider.categoryId) {
                this.serviceList.forEach(function (service) {
                    if (service.categoryId == _this.provider.categoryId) {
                        _this.searchedList.push(service);
                    }
                });
            }
            else {
                this.searchedList = null;
                this.count = 0;
            }
        }
        this.count = this.searchedList.length;
        var navigationExtras = {
            queryParams: {
                "searchTerm": this.searchTerm,
                "categoryId": this.provider.categoryId
            }
        };
        this.router.navigate(['serviceList'], navigationExtras);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], ServiceListComponent.prototype, "paginator", void 0);
    ServiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-serviceList',
            template: __webpack_require__(/*! ./serviceList.component.html */ "./src/app/component/ServiceList/serviceList.component.html"),
            providers: [_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]],
            styles: [__webpack_require__(/*! ./serviceList.component.scss */ "./src/app/component/ServiceList/serviceList.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Dashboard_AddService_addservice_service__WEBPACK_IMPORTED_MODULE_5__["AddserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServiceListComponent);
    return ServiceListComponent;
}());



/***/ }),

/***/ "./src/app/component/ServiceList/serviceList.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/ServiceList/serviceList.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"search-result\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <p><i class=\"fa fa-search\"></i> <span>{{count}}</span> results found </p>\r\n                <div class=\"search-filters\">\r\n                    <form>\r\n                        <mat-form-field appearance=\"legacy\">\r\n                            <mat-label></mat-label>\r\n                            <input matInput matInput [(ngModel)]=\"searchTerm\" [ngModelOptions]=\"{standalone: true}\">\r\n                            <mat-icon matSuffix>search</mat-icon>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <mat-placeholder>Category</mat-placeholder>\r\n                            <mat-select [(ngModel)]=\"provider.categoryId\" name=\"categoryId\" #categoryId=\"ngModel\">\r\n                                <mat-option *ngFor=\"let item of categoryList\" [value]=\"item.id\">{{item.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Date for Service\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-radio-group aria-label=\"Service Provider Status\">\r\n                            <mat-radio-button value=\"1\">Verified Provider</mat-radio-button>\r\n                            <mat-radio-button value=\"2\">Not Required</mat-radio-button>\r\n                        </mat-radio-group>\r\n                        <a (click)=\"onClick(searchTerm)\" class=\"btn btn-primary text-center mt-3\">Filter Search</a>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"sorting\">\r\n                    <form action=\"\">\r\n                        <select name=\"\" id=\"\">\r\n                            <option value=\"1\" selected disabled>Sort By</option>\r\n                            <option value=\"\">Rating</option>\r\n                            <option value=\"\">Disatance</option>\r\n                            <option value=\"\">Popularity</option>\r\n                        </select>\r\n                    </form>\r\n                </div>\r\n                <div class=\"result-list\">\r\n                    <div *ngIf=\"searchedList===null\">No Results Found!!!!!</div>\r\n                    <ul>\r\n                        <li *ngFor=\"let item of searchedList | paginate : {itemsPerPage: 5, currentPage:p}\">\r\n                            <a [routerLink]=\"['/getService', item.id]\">\r\n                                <figure>\r\n                                    <img src=\"assets/img/service-thumbnails/construction.png\" alt=\"\">\r\n                                </figure>\r\n\r\n                                <div class=\"details\">\r\n                                    <h3>{{item.name}}</h3>\r\n                                    <p>{{item.description}}</p>\r\n                                    <!-- <ul>\r\n                      <li>Address: <span>Amannagar, Kathmandu</span></li>\r\n                      <li>Contact: <span>01-6587916</span></li>\r\n                      <li>Emaikl: <span>user@gmail.com</span></li>\r\n                      <li><span class=\"availability\">Available</span></li>\r\n                    </ul> -->\r\n                                    <span class=\"btn btn-primary\">Hire</span>\r\n                                </div>\r\n                                <div class=\"extra\">\r\n                                    <span class=\"rating\"><b>4</b><small>/5</small></span>\r\n                                </div>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"text-right\">\r\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/ServiceList/serviceList.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/component/ServiceList/serviceList.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.search-result {\n  background: #fafafa; }\n  section.search-result .result-list h3 {\n    font-size: 22px; }\n  section.search-result .result-list ul {\n    display: flex;\n    flex-wrap: wrap; }\n  section.search-result .result-list ul li {\n      margin-bottom: 10px;\n      width: 100%; }\n  section.search-result .result-list a {\n    display: block;\n    max-height: 200px;\n    display: flex;\n    background: #fff; }\n  section.search-result .result-list a:hover p {\n      color: initial; }\n  section.search-result .result-list a figure {\n      flex: none;\n      width: 200px;\n      height: 200px;\n      margin: 0; }\n  section.search-result .result-list a figure img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  section.search-result .result-list .details {\n    padding: 10px 20px;\n    flex-grow: 1; }\n  section.search-result .result-list .details ul li {\n      padding: 0;\n      margin-right: 5px;\n      margin-bottom: 5px; }\n  section.search-result .sorting {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 12px; }\n  section.search-result .search-filters {\n    background: #fff;\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L1NlcnZpY2VMaXN0L0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxTZXJ2aWNlTGlzdFxcc2VydmljZUxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9TZXJ2aWNlTGlzdC9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JDTWdCLEVEbURuQjtFQTFERDtJQUlZLGdCQUFlLEVBQ2xCO0VBTFQ7SUFPWSxjQUFhO0lBQ2IsZ0JBQWUsRUFLbEI7RUFiVDtNQVVnQixvQkFBbUI7TUFDbkIsWUFBVyxFQUNkO0VBWmI7SUFlWSxlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLGNBQWE7SUFDYixpQkNaQSxFRDZCSDtFQW5DVDtNQXFCb0IsZUFBYyxFQUNqQjtFQXRCakI7TUF5QmdCLFdBQVU7TUFDVixhQUFZO01BQ1osY0FBYTtNQUNiLFVBQVMsRUFNWjtFQWxDYjtRQThCb0IsWUFBVztRQUNYLGFBQVk7UUFDWixxQkFBaUI7V0FBakIsa0JBQWlCLEVBQ3BCO0VBakNqQjtJQXFDWSxtQkFBa0I7SUFDbEIsYUFBWSxFQVFmO0VBOUNUO01BeUNvQixXQUFVO01BQ1Ysa0JBQWlCO01BQ2pCLG1CQUFrQixFQUNyQjtFQTVDakI7SUFpRFEsY0FBYTtJQUNiLDBCQUF5QjtJQUN6QixvQkFBbUIsRUFDdEI7RUFwREw7SUFzRFEsaUJDaERJO0lEaURKLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvU2VydmljZUxpc3Qvc2VydmljZUxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvbWl4aW5zJztcclxuc2VjdGlvbi5zZWFyY2gtcmVzdWx0e1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWdyZXk7XHJcbiAgICAucmVzdWx0LWxpc3R7XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpZ3VyZXtcclxuICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlsc3tcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29ydGluZ3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtZmlsdGVyc3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbn0iLCIvLyBmb250c1xyXG4kZ0ZvbnQ6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4kaEZvbnQ6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gY29sb3JzXHJcbiRyZWQ6ICNmOTE5NDI7XHJcbiRtdXRlUmVkOiAjY2UzZDY2OyBcclxuJGJsYWNrOiAjMjUyNTI1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS1ncmV5OiAjZmFmYWZhO1xyXG4kZ3JleTogI2I3YjdiNztcclxuJHRyYW5zQmx1ZTogI2RlZWVmNjtcclxuJGdyZWVuOiAjM2RjZTg4O1xyXG4kYmx1ZTogIzA2YTFjZTtcclxuXHJcbi8vIGNvbG9yIHJvbGVzXHJcbiRwcmltYXJ5LWNvbG9yOiAkbXV0ZVJlZDtcclxuJHNlY29uZGFyeS1jb2xvcjogJGJsYWNrO1xyXG5cclxuLy8gIG1lZGlhIHF1ZXJ5IGJyZWFrcG9pbnRzXHJcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xyXG4kZGVza3RvcC13aWR0aDogMTIwMHB4O1xyXG4kbWVkaXVtLXdpZHRoOiAzNzVweDtcclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/component/SignIn/signin.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/SignIn/signin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"login-forms d-flex justify-content-center align-items-center\">\r\n  <!-- login/'signup wrapper' -->\r\n  <div class=\"tab-wrapper\">\r\n    <div class=\"tab-menu\">\r\n      <!-- tab-menu -->\r\n      <ul class=\"nav nav-tabs\" id=\"loginSignupTab\" role=\"tablist\">\r\n        <li><a href=\"#\" class=\"nav-link active\" role=\"tab\" data-toggle=\"tab\" id=\"loginTab\" href=\"#loginForm\">Login</a>\r\n        </li>\r\n        <li><a href=\"#\" class=\"nav-link\" role=\"tab\" data-toggle=\"tab\" id=\"signUpTab\" href=\"#signUpForm\">Sign Up</a></li>\r\n      </ul>\r\n    </div>\r\n    <!-- tab contents -->\r\n    <div class=\"tab-content\">\r\n      <!-- login -->\r\n      <div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"loginForm\">\r\n        <div class=\"login-wrapper\">\r\n          <form class=\"dark-form\" #form=\"ngForm\" action=\"javascript:void(0);\" method=\"POST\"\r\n            (submit)=\"onEmailSignIn(form)\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\" autocomplete=\"off\">\r\n              <mat-icon matSuffix>person</mat-icon>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\"\r\n                [type]=\"hide ? 'text':'password' \">\r\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </mat-form-field>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\">\r\n              Login <i class=\"material-icons\">arrow_forward</i>\r\n            </button>\r\n            <p>Forgot password ? <a routerLink=\"/forgotPassword\">Click here</a></p>\r\n          </form>\r\n\r\n          <!-- Quick Sign In -->\r\n          <div class=\"quick-sign-in\">\r\n            <h4>Quick SIgn In</h4>\r\n            <ul class=\"d-flex flex-column\">\r\n              <li><a (click)=\"OnSocialSignIn('facebook')\"><i class=\"fab fa-facebook\"></i>login with facebook</a></li>\r\n              <li><a (click)=\"OnSocialSignIn('google')\"><i class=\"fab fa-google\"></i>login with google</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- sign up -->\r\n      <div class=\"tab-pane fade\" role=\"tabpanel\" id=\"signUpForm\">\r\n        <app-signup></app-signup>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/component/SignIn/signin.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/SignIn/signin.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.login-forms {\n  background: url('loginbg.png');\n  background-size: cover;\n  background-position: center; }\n  @media only screen and (min-width: 768px) {\n    section.login-forms {\n      height: 100vh;\n      margin-top: -125px; } }\n  section.login-forms .tab-wrapper {\n    background: rgba(0, 0, 0, 0.8);\n    padding: 30px 15px;\n    border-radius: 8px;\n    flex-basis: 90%; }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .tab-wrapper {\n        padding: 50px;\n        width: 100%;\n        max-width: 700px; } }\n  section.login-forms .nav-tabs {\n    border: 0; }\n  section.login-forms .nav-tabs .nav-link {\n      background: none;\n      border: none;\n      color: #fff;\n      opacity: 0.5;\n      font-size: 18px; }\n  section.login-forms .nav-tabs .nav-link:first-child {\n        padding-left: 0; }\n  section.login-forms .nav-tabs .nav-link.active {\n        opacity: 1; }\n  section.login-forms .nav-tabs .nav-link.active::after {\n          content: \"\";\n          display: block;\n          height: 2px;\n          background: #f91942; }\n  section.login-forms form.dark-form {\n    margin-top: 15px; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field {\n      display: block;\n      width: 100%;\n      color: white !important; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field .mat-form-field-label {\n        opacity: 0; }\n  section.login-forms .login-wrapper,\n  section.login-forms .signup-wrapper {\n    display: flex; }\n  @media screen and (max-width: 767px) {\n      section.login-forms .login-wrapper,\n      section.login-forms .signup-wrapper {\n        flex-direction: column; } }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .login-wrapper form, section.login-forms .login-wrapper .quick-sign-in,\n      section.login-forms .signup-wrapper form,\n      section.login-forms .signup-wrapper .quick-sign-in {\n        flex-basis: 50%; } }\n  section.login-forms .login-wrapper .quick-sign-in,\n    section.login-forms .signup-wrapper .quick-sign-in {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      margin-top: 20px; }\n  @media only screen and (min-width: 768px) {\n        section.login-forms .login-wrapper .quick-sign-in,\n        section.login-forms .signup-wrapper .quick-sign-in {\n          margin-top: 0;\n          align-items: center;\n          justify-content: center; }\n          section.login-forms .login-wrapper .quick-sign-in h4,\n          section.login-forms .signup-wrapper .quick-sign-in h4 {\n            text-align: center; } }\n  section.login-forms .login-wrapper .quick-sign-in h4,\n      section.login-forms .signup-wrapper .quick-sign-in h4 {\n        display: inline-block;\n        color: #fff;\n        font-size: 14px;\n        font-weight: 600; }\n  section.login-forms .login-wrapper .quick-sign-in h4::after,\n        section.login-forms .signup-wrapper .quick-sign-in h4::after {\n          content: \"\";\n          height: 2px;\n          width: 100px;\n          background-color: #fff;\n          margin-top: 4px;\n          display: block; }\n  @media only screen and (min-width: 768px) {\n            section.login-forms .login-wrapper .quick-sign-in h4::after,\n            section.login-forms .signup-wrapper .quick-sign-in h4::after {\n              width: 100%; } }\n  section.login-forms .login-wrapper .quick-sign-in ul,\n      section.login-forms .signup-wrapper .quick-sign-in ul {\n        display: flex; }\n  section.login-forms .login-wrapper .quick-sign-in ul li,\n        section.login-forms .signup-wrapper .quick-sign-in ul li {\n          cursor: pointer;\n          margin-top: 10px;\n          padding: 8px 15px;\n          display: flex;\n          align-items: center;\n          background: #4267b2;\n          text-transform: capitalize;\n          color: #fff; }\n  section.login-forms .login-wrapper .quick-sign-in ul li:last-child,\n          section.login-forms .signup-wrapper .quick-sign-in ul li:last-child {\n            background: #34a853; }\n  section.login-forms .login-wrapper .quick-sign-in ul li i,\n          section.login-forms .signup-wrapper .quick-sign-in ul li i {\n            margin-right: 10px; }\n  section.login-forms .login-wrapper .quick-sign-in ul a i,\n        section.login-forms .signup-wrapper .quick-sign-in ul a i {\n          font-size: 24px;\n          color: #fff; }\n  section.login-forms .login-wrapper .quick-sign-in ul a i:hover,\n          section.login-forms .signup-wrapper .quick-sign-in ul a i:hover {\n            color: #f91942; }\n  section.login-forms .login-wrapper .btn.btn-primary,\n    section.login-forms .signup-wrapper .btn.btn-primary {\n      display: flex; }\n  section.login-forms .login-wrapper .btn.btn-primary i,\n      section.login-forms .signup-wrapper .btn.btn-primary i {\n        margin-left: 15px; }\n  section.login-forms .login-wrapper p,\n    section.login-forms .signup-wrapper p {\n      margin-top: 10px;\n      color: #fff; }\n  section.login-forms .login-wrapper p a,\n      section.login-forms .signup-wrapper p a {\n        color: #f91942; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L1NpZ25Jbi9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcU2lnbkluXFxzaWduaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9TaWduSW4vRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L1NpZ25Jbi9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksK0JBQWdEO0VBQ2hELHVCQUFzQjtFQUN0Qiw0QkFBMkIsRUF1STlCO0VDbElDO0lEVEY7TUFNUSxjQUFhO01BQ2IsbUJBQWtCLEVBb0l6QixFQUFBO0VBM0lEO0lBVVEsK0JBQTJCO0lBQzNCLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsZ0JBQWUsRUFNbEI7RUNWSDtNRFRGO1FBZVksY0FBYTtRQUNiLFlBQVc7UUFDWCxpQkFBZ0IsRUFFdkIsRUFBQTtFQW5CTDtJQXFCUSxVQUFTLEVBb0JaO0VBekNMO01BdUJZLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osWUVuQkE7TUZvQkEsYUFBWTtNQUNaLGdCQUFlLEVBYWxCO0VBeENUO1FBNkJnQixnQkFBZSxFQUNsQjtFQTlCYjtRQWdDZ0IsV0FBVSxFQU9iO0VBdkNiO1VBa0NvQixZQUFXO1VBQ1gsZUFBYztVQUNkLFlBQVc7VUFDWCxvQkVsQ1AsRUZtQ0k7RUF0Q2pCO0lBMkNRLGlCQUFnQixFQVNuQjtFQXBETDtNQTZDWSxlQUFjO01BQ2QsWUFBVztNQUNYLHdCQUFxQyxFQUl4QztFQW5EVDtRQWlEZ0IsV0FBVSxFQUNiO0VBbERiOztJQXdEUSxjQUFhLEVBK0VoQjtFQTlFRztNQXpEUjs7UUEwRFksdUJBQXNCLEVBNkU3QixFQUFBO0VDOUhIO01EVEY7OztRQThEZ0IsZ0JBQWUsRUFFdEIsRUFBQTtFQWhFVDs7TUFrRVksY0FBYTtNQUNiLGdCQUFlO01BQ2YsdUJBQXNCO01BQ3RCLGlCQUFnQixFQW9EbkI7RUNoSFA7UURURjs7VUF1RWdCLGNBQWE7VUFDYixvQkFBbUI7VUFDbkIsd0JBQXVCLEVBZ0Q5QjtVQXpIVDs7WUEyRW9CLG1CQUFrQixFQUNyQixFQUFBO0VBNUVqQjs7UUErRWdCLHNCQUFxQjtRQUNyQixZRTFFSjtRRjJFSSxnQkFBZTtRQUNmLGlCQUFnQixFQVluQjtFQTlGYjs7VUFvRm9CLFlBQVc7VUFDWCxZQUFXO1VBQ1gsYUFBWTtVQUlaLHVCRXBGUjtVRnFGUSxnQkFBZTtVQUNmLGVBQWMsRUFDakI7RUNwRmY7WURURjs7Y0F3RndCLFlBQVcsRUFLbEIsRUFBQTtFQTdGakI7O1FBZ0dnQixjQUFhLEVBd0JoQjtFQXhIYjs7VUFrR29CLGdCQUFlO1VBQ2YsaUJBQWdCO1VBQ2hCLGtCQUFpQjtVQUNqQixjQUFhO1VBQ2Isb0JBQW1CO1VBQ25CLG9CQUFtQjtVQUNuQiwyQkFBMEI7VUFDMUIsWUVuR1IsRUYwR0s7RUFoSGpCOztZQTJHd0Isb0JBQW1CLEVBQ3RCO0VBNUdyQjs7WUE4R3dCLG1CQUFrQixFQUNyQjtFQS9HckI7O1VBa0hvQixnQkFBZTtVQUNmLFlFN0dSLEVGaUhLO0VBdkhqQjs7WUFxSHdCLGVFbEhYLEVGbUhRO0VBdEhyQjs7TUEySFksY0FBYSxFQUloQjtFQS9IVDs7UUE2SGdCLGtCQUFpQixFQUNwQjtFQTlIYjs7TUFpSVksaUJBQWdCO01BQ2hCLFlFNUhBLEVGZ0lIO0VBdElUOztRQW9JZ0IsZUVqSUgsRUZrSUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvU2lnbkluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy9taXhpbnMnO1xyXG5zZWN0aW9uLmxvZ2luLWZvcm1ze1xyXG4gICAgLy8gbWFyZ2luLXRvcDogODBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2xvZ2luYmcucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTI1cHg7XHJcbiAgICB9XHJcbiAgICAudGFiLXdyYXBwZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZmxleC1iYXNpczogOTAlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdi10YWJze1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAubmF2LWxpbmt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybS5kYXJrLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi13cmFwcGVyLFxyXG4gICAgLnNpZ251cC13cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybSwucXVpY2stc2lnbi1pbntcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdWljay1zaWduLWlue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MjY3YjI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNGE4NTM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4uYnRuLXByaW1hcnl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBhbmd1bGFyIGZvcm0gcmVzZXR0XHJcblxyXG4gICAgLy8gYW5ndWxhciBmb3JtIHJlc2V0dFxyXG59XHJcblxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG5cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuQG1peGluIG1lZGl1bSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRtZWRpdW0td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmV0aW5hIHtcclxuICBAbWVkaWFcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByaW50IHtcclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcblxyXG5cclxuLy8gdmVuZG9yIHByZWZpeGVyc1xyXG5AbWl4aW4gcHJlZml4KCRkZWNsYXJhdGlvbnMsICRwcmVmaXhlczogKCkpIHtcclxuICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiAkZGVjbGFyYXRpb25zIHtcclxuICAgIEBlYWNoICRwcmVmaXggaW4gJHByZWZpeGVzIHtcclxuICAgICAgI3snLScgKyAkcHJlZml4ICsgJy0nICsgJHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE91dHB1dCBzdGFuZGFyZCBub24tcHJlZml4ZWQgZGVjbGFyYXRpb25cclxuICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xyXG4gIH1cclxufVxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzIiwiLy8gZm9udHNcclxuJGdGb250OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuJGhGb250OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIGNvbG9yc1xyXG4kcmVkOiAjZjkxOTQyO1xyXG4kbXV0ZVJlZDogI2NlM2Q2NjsgXHJcbiRibGFjazogIzI1MjUyNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtZ3JleTogI2ZhZmFmYTtcclxuJGdyZXk6ICNiN2I3Yjc7XHJcbiR0cmFuc0JsdWU6ICNkZWVlZjY7XHJcbiRncmVlbjogIzNkY2U4ODtcclxuJGJsdWU6ICMwNmExY2U7XHJcblxyXG4vLyBjb2xvciByb2xlc1xyXG4kcHJpbWFyeS1jb2xvcjogJG11dGVSZWQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICRibGFjaztcclxuXHJcbi8vICBtZWRpYSBxdWVyeSBicmVha3BvaW50c1xyXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcclxuJGRlc2t0b3Atd2lkdGg6IDEyMDBweDtcclxuJG1lZGl1bS13aWR0aDogMzc1cHg7XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/component/SignIn/signin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/SignIn/signin.component.ts ***!
  \******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/SignIn/usersignin.service */ "./src/app/services/SignIn/usersignin.service.ts");
/* harmony import */ var src_app_models_user_registration_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user.registration.model */ "./src/app/models/user.registration.model.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__);








var SigninComponent = /** @class */ (function () {
    function SigninComponent(signInService, socialAuthService, toasterService, router) {
        this.signInService = signInService;
        this.socialAuthService = socialAuthService;
        this.toasterService = toasterService;
        this.router = router;
        this.toaster = null;
        this.user = new src_app_models_user_registration_model__WEBPACK_IMPORTED_MODULE_4__["UserRegistrationModel"]();
        this.UpdateSignInCommonData = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.toaster = toasterService;
    }
    SigninComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    //For Email SignIn
    SigninComponent.prototype.onEmailSignIn = function (form) {
        var _this = this;
        if (form.value.email == null || form.value.password == null) {
            this.toaster.error("please fill up all fields", "", { positionClass: 'toast-top-center' });
        }
        else {
            this.signInService.postEmailSignInData(form.value).subscribe(function (res) {
                var result = res;
                if (!result.isSuccess) {
                    _this.toaster.error(result.errors[0], "", { positionClass: 'toast-top-center' });
                }
                else {
                    localStorage.setItem("initial_record", JSON.stringify(result));
                    localStorage.setItem('twoFactorEmail', result.loginData.email);
                    localStorage.setItem('twoFactorName', result.loginData.displayName);
                    localStorage.setItem('twoFactorphoneNumber', result.loginData.phoneNumber);
                    if (result.twoFactorEnabled)
                        _this.router.navigate(["/twofactor"]);
                    else
                        _this.router.navigate(["/dashboard/userdetail"]);
                }
            });
        }
    };
    //For Third-Party SignIn
    SigninComponent.prototype.OnSocialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.signInService.postExternalSignInData(userData).subscribe(function (res) {
                var response = res;
                if (response.isSuccess) {
                    _this.router.navigate(["/dashboard"]);
                    localStorage.setItem('twoFactorEmail', userData.email);
                    localStorage.setItem('twoFactorName', userData.name);
                    localStorage.setItem('twoFactorImage', userData.image);
                    _this.toaster.success(" Log in Successful", "", { positionClass: 'toast-top-center' });
                }
            });
        });
    };
    SigninComponent.prototype.RegUsingEmail = function () {
        this.router.navigate(["/signup"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"])
    ], SigninComponent.prototype, "UpdateSignInCommonData", void 0);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: "app-signin",
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/component/SignIn/signin.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])("dialog", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])("void => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "scale3d(.3, .3, .3)" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])("* => void", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "scale3d(.0, .0, .0)" }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/component/SignIn/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_3__["UserSignInService"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/component/SignUp/signup.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/SignUp/signup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-wrapper\">\r\n  <form\r\n    class=\"dark-form\"\r\n    #form=\"ngForm\"\r\n    (submit)=\"onSignUp(form)\"\r\n    method=\"POST\"\r\n    autocomplete=\"off\"\r\n  >\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Display Name\"\r\n        name=\"displayName\"\r\n        #displayName=\"ngModel\"\r\n        [(ngModel)]=\"user.displayName\"\r\n        required\r\n      />\r\n      <mat-icon matSuffix>person</mat-icon>\r\n    </mat-form-field>\r\n    <div\r\n      *ngIf=\"displayName.invalid && (displayName.dirty || displayName.touched)\"\r\n      class=\"alert alert-danger\"\r\n    >\r\n      <div class=\"errorMsg\" *ngIf=\"displayName.errors.required\">\r\n        Display Name is required.\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Email\"\r\n        name=\"email\"\r\n        #email=\"ngModel\"\r\n        [(ngModel)]=\"user.email\"\r\n        required\r\n        email\r\n      />\r\n      <mat-icon matSuffix>mail</mat-icon>\r\n    </mat-form-field>\r\n    <div\r\n      *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n      class=\"alert alert-danger\"\r\n    >\r\n      <div class=\"errorMsg\" *ngIf=\"email.errors.required\">Email is required.</div>\r\n      <div class=\"errorMsg\" *ngIf=\"email.errors?.email\">\r\n        Email formate is not valid.\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"PhoneNumber\"\r\n        type=\"tel\"\r\n        name=\"phoneNumber\"\r\n        #phoneNumber=\"ngModel\"\r\n        [(ngModel)]=\"user.phoneNumber\"       \r\n        maxlength=\"10\"\r\n        required\r\n      />\r\n      <mat-icon matSuffix>phone</mat-icon>\r\n    </mat-form-field>\r\n    <div\r\n      *ngIf=\"phoneNumber.invalid && phoneNumber.touched\"\r\n      class=\"alert alert-danger\"\r\n    >\r\n      <div class=\"errorMsg\" *ngIf=\"phoneNumber.errors.required\">\r\n        PhoneNumber is required and must have 10 digits\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Password\"\r\n        [type]=\"hide ? 'text' : 'password'\"\r\n        name=\"password\"\r\n        #password=\"ngModel\"\r\n        [(ngModel)]=\"user.password\"\r\n        required\r\n        pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{6,}$\"\r\n      />\r\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{\r\n        hide ? \"visibility\" : \"visibility_off\"\r\n      }}</mat-icon>\r\n    </mat-form-field>\r\n    <div\r\n      *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n      class=\"alert alert-danger\"\r\n    >\r\n      <div class=\"errorMsg\" *ngIf=\"password.errors.required\">\r\n          Password is required.\r\n      </div>\r\n      <div class=\"errorMsg\" *ngIf=\"password.errors.pattern\">\r\n        Six or more character password is required and must contain at least one\r\n        digit, one capital letter and one of these symbols !,@,#,$,%,^,&,*\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        placeholder=\"Confirm Password\"\r\n        [type]=\"hide ? 'text' : 'password'\"\r\n        name=\"confirmPassword\"\r\n        #confirmPassword=\"ngModel\"\r\n        [(ngModel)]=\"user.confirmPassword\"\r\n        appConfirmEqualValidator=\"password\"\r\n      />\r\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{\r\n        hide ? \"visibility\" : \"visibility_off\"\r\n      }}</mat-icon>\r\n    </mat-form-field>\r\n    <div\r\n      *ngIf=\" confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\"\r\n      class=\"alert alert-danger\">\r\n      <div class=\"errorMsg\" *ngIf=\"confirmPassword.errors.required\">\r\n        Confirm Password Name is required.\r\n      </div>\r\n      <div\r\n        class=\"errorMsg\" *ngIf=\"confirmPassword.errors?.notEqual\">\r\n        Password and Confirm Password do not match\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\">\r\n      Signup <i class=\"material-icons\">arrow_forward</i>\r\n    </button>\r\n  </form>\r\n\r\n  <!-- Quick Sign In -->\r\n  <div class=\"quick-sign-in\">\r\n    <h4>Quick SIgn In</h4>\r\n    <ul class=\"d-flex flex-column\"> \r\n      <li>\r\n        <a (click)=\"OnSocialSignIn('facebook')\"\r\n          ><i class=\"fab fa-facebook\"></i\r\n        >login with facebook</a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"OnSocialSignIn('google')\"><i class=\"fab fa-google\"></i>login with google</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/SignUp/signup.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/SignUp/signup.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form.dark-form {\n  margin-top: 15px; }\n  form.dark-form mat-form-field.mat-form-field {\n    display: block;\n    width: 100%;\n    color: white !important; }\n  form.dark-form mat-form-field.mat-form-field .mat-form-field-label {\n      opacity: 0; }\n  .login-wrapper,\n.signup-wrapper {\n  display: flex; }\n  @media screen and (max-width: 767px) {\n    .login-wrapper,\n    .signup-wrapper {\n      flex-direction: column; } }\n  @media only screen and (min-width: 768px) {\n    .login-wrapper form, .login-wrapper .quick-sign-in,\n    .signup-wrapper form,\n    .signup-wrapper .quick-sign-in {\n      flex-basis: 50%; } }\n  .login-wrapper .quick-sign-in,\n  .signup-wrapper .quick-sign-in {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    margin-top: 20px; }\n  @media only screen and (min-width: 768px) {\n      .login-wrapper .quick-sign-in,\n      .signup-wrapper .quick-sign-in {\n        margin-top: 0;\n        align-items: center;\n        justify-content: center; }\n        .login-wrapper .quick-sign-in h4,\n        .signup-wrapper .quick-sign-in h4 {\n          text-align: center; } }\n  .login-wrapper .quick-sign-in h4,\n    .signup-wrapper .quick-sign-in h4 {\n      display: inline-block;\n      color: #fff;\n      font-size: 14px;\n      font-weight: 600; }\n  .login-wrapper .quick-sign-in h4::after,\n      .signup-wrapper .quick-sign-in h4::after {\n        content: \"\";\n        height: 2px;\n        width: 100px;\n        background-color: #fff;\n        margin-top: 4px;\n        display: block; }\n  @media only screen and (min-width: 768px) {\n          .login-wrapper .quick-sign-in h4::after,\n          .signup-wrapper .quick-sign-in h4::after {\n            width: 100%; } }\n  .login-wrapper .quick-sign-in ul,\n    .signup-wrapper .quick-sign-in ul {\n      display: flex; }\n  .login-wrapper .quick-sign-in ul li,\n      .signup-wrapper .quick-sign-in ul li {\n        cursor: pointer;\n        margin-top: 10px;\n        padding: 8px 15px;\n        display: flex;\n        align-items: center;\n        background: #4267b2;\n        text-transform: capitalize;\n        color: #fff; }\n  .login-wrapper .quick-sign-in ul li:last-child,\n        .signup-wrapper .quick-sign-in ul li:last-child {\n          background: #34a853; }\n  .login-wrapper .quick-sign-in ul li i,\n        .signup-wrapper .quick-sign-in ul li i {\n          margin-right: 10px; }\n  .login-wrapper .quick-sign-in ul a i,\n      .signup-wrapper .quick-sign-in ul a i {\n        font-size: 24px;\n        color: #fff; }\n  .login-wrapper .quick-sign-in ul a i:hover,\n        .signup-wrapper .quick-sign-in ul a i:hover {\n          color: #f91942; }\n  .login-wrapper .btn.btn-primary,\n  .signup-wrapper .btn.btn-primary {\n    display: flex; }\n  .login-wrapper .btn.btn-primary i,\n    .signup-wrapper .btn.btn-primary i {\n      margin-left: 15px; }\n  .login-wrapper p,\n  .signup-wrapper p {\n    margin-top: 10px;\n    color: #fff; }\n  .login-wrapper p a,\n    .signup-wrapper p a {\n      color: #f91942; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L1NpZ25VcC9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudFxcU2lnblVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9TaWduVXAvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXNzZXRzXFxzYXNzLWhlbHBlcnNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L1NpZ25VcC9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksaUJBQWdCLEVBU25CO0VBVkQ7SUFHUSxlQUFjO0lBQ2QsWUFBVztJQUNYLHdCQUFxQyxFQUl4QztFQVRMO01BT1ksV0FBVSxFQUNiO0VBSVQ7O0VBRUksY0FBYSxFQStFaEI7RUE5RUc7SUFISjs7TUFJUSx1QkFBc0IsRUE2RTdCLEVBQUE7RUN0Rkg7SURLRTs7O01BUVksZ0JBQWUsRUFFdEIsRUFBQTtFQVZMOztJQVlRLGNBQWE7SUFDYixnQkFBZTtJQUNmLHVCQUFzQjtJQUN0QixpQkFBZ0IsRUFvRG5CO0VDeEVQO01ES0U7O1FBaUJZLGNBQWE7UUFDYixvQkFBbUI7UUFDbkIsd0JBQXVCLEVBZ0Q5QjtRQW5FTDs7VUFxQmdCLG1CQUFrQixFQUNyQixFQUFBO0VBdEJiOztNQXlCWSxzQkFBcUI7TUFDckIsWUVsQ0o7TUZtQ0ksZ0JBQWU7TUFDZixpQkFBZ0IsRUFZbkI7RUF4Q1Q7O1FBOEJnQixZQUFXO1FBQ1gsWUFBVztRQUNYLGFBQVk7UUFJWix1QkU1Q1I7UUY2Q1EsZ0JBQWU7UUFDZixlQUFjLEVBQ2pCO0VDNUNmO1VES0U7O1lBa0NvQixZQUFXLEVBS2xCLEVBQUE7RUF2Q2I7O01BMENZLGNBQWEsRUF3QmhCO0VBbEVUOztRQTRDZ0IsZ0JBQWU7UUFDZixpQkFBZ0I7UUFDaEIsa0JBQWlCO1FBQ2pCLGNBQWE7UUFDYixvQkFBbUI7UUFDbkIsb0JBQW1CO1FBQ25CLDJCQUEwQjtRQUMxQixZRTNEUixFRmtFSztFQTFEYjs7VUFxRG9CLG9CQUFtQixFQUN0QjtFQXREakI7O1VBd0RvQixtQkFBa0IsRUFDckI7RUF6RGpCOztRQTREZ0IsZ0JBQWU7UUFDZixZRXJFUixFRnlFSztFQWpFYjs7VUErRG9CLGVFMUVYLEVGMkVRO0VBaEVqQjs7SUFxRVEsY0FBYSxFQUloQjtFQXpFTDs7TUF1RVksa0JBQWlCLEVBQ3BCO0VBeEVUOztJQTJFUSxpQkFBZ0I7SUFDaEIsWUVwRkEsRUZ3Rkg7RUFoRkw7O01BOEVZLGVFekZILEVGMEZBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L1NpZ25VcC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzLWhlbHBlcnMvbWl4aW5zJztcclxuXHJcbiAgICBcclxuICAgIGZvcm0uZGFyay1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW4td3JhcHBlcixcclxuICAgIC5zaWdudXAtd3JhcHBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0sLnF1aWNrLXNpZ24taW57XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucXVpY2stc2lnbi1pbntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDI2N2IyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzRhODUzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSBpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYW5ndWxhciBmb3JtIHJlc2V0dFxyXG5cclxuICAgIC8vIGFuZ3VsYXIgZm9ybSByZXNldHRcclxuXHJcblxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG5cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuQG1peGluIG1lZGl1bSB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRtZWRpdW0td2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skdGFibGV0LXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRofSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmV0aW5hIHtcclxuICBAbWVkaWFcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHByaW50IHtcclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8vIG1lZGlhIHF1ZXJpZXMgbWl4aW5zXHJcblxyXG5cclxuLy8gdmVuZG9yIHByZWZpeGVyc1xyXG5AbWl4aW4gcHJlZml4KCRkZWNsYXJhdGlvbnMsICRwcmVmaXhlczogKCkpIHtcclxuICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiAkZGVjbGFyYXRpb25zIHtcclxuICAgIEBlYWNoICRwcmVmaXggaW4gJHByZWZpeGVzIHtcclxuICAgICAgI3snLScgKyAkcHJlZml4ICsgJy0nICsgJHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE91dHB1dCBzdGFuZGFyZCBub24tcHJlZml4ZWQgZGVjbGFyYXRpb25cclxuICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xyXG4gIH1cclxufVxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzIiwiLy8gZm9udHNcclxuJGdGb250OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuJGhGb250OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIGNvbG9yc1xyXG4kcmVkOiAjZjkxOTQyO1xyXG4kbXV0ZVJlZDogI2NlM2Q2NjsgXHJcbiRibGFjazogIzI1MjUyNTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kd2hpdGUtZ3JleTogI2ZhZmFmYTtcclxuJGdyZXk6ICNiN2I3Yjc7XHJcbiR0cmFuc0JsdWU6ICNkZWVlZjY7XHJcbiRncmVlbjogIzNkY2U4ODtcclxuJGJsdWU6ICMwNmExY2U7XHJcblxyXG4vLyBjb2xvciByb2xlc1xyXG4kcHJpbWFyeS1jb2xvcjogJG11dGVSZWQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICRibGFjaztcclxuXHJcbi8vICBtZWRpYSBxdWVyeSBicmVha3BvaW50c1xyXG4kdGFibGV0LXdpZHRoOiA3NjhweDtcclxuJGRlc2t0b3Atd2lkdGg6IDEyMDBweDtcclxuJG1lZGl1bS13aWR0aDogMzc1cHg7XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/component/SignUp/signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/SignUp/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_SignUp_usersignup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/SignUp/usersignup.service */ "./src/app/services/SignUp/usersignup.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_models_user_registration_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user.registration.model */ "./src/app/models/user.registration.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/SignIn/usersignin.service */ "./src/app/services/SignIn/usersignin.service.ts");








var SignupComponent = /** @class */ (function () {
    function SignupComponent(signUpService, signInService, toastr, socialAuthService, router) {
        this.signUpService = signUpService;
        this.signInService = signInService;
        this.toastr = toastr;
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.user = new src_app_models_user_registration_model__WEBPACK_IMPORTED_MODULE_4__["UserRegistrationModel"];
    }
    SignupComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    SignupComponent.prototype.onSignUp = function (form) {
        var _this = this;
        if (form.value.email == null || form.value.password == null || form.value.displayName == null || form.value.phoneNumber == null || form.value.confirmPassword == null) {
            this.toastr.error("Please fill up all the fields", "", { positionClass: 'toast-top-center' });
        }
        else if (form.value.password != form.value.confirmPassword) {
            this.toastr.error("Password does not match", "", { positionClass: 'toast-top-center' });
        }
        else {
            this.signUpService.signUpUser(form.value).subscribe(function (res) {
                var response = res;
                if (!response.isSuccess) {
                    response.errors.forEach(function (error) {
                        _this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
                    });
                }
                else {
                    form.reset();
                    _this.toastr.success("Inserted Successfully", "User Registered", { positionClass: 'toast-top-center' });
                }
            });
        }
    };
    SignupComponent.prototype.OnSocialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            _this.signInService.postExternalSignInData(userData).subscribe(function (res) {
                var response = res;
                if (response.success) {
                    _this.router.navigate(["/dashboard"]);
                    localStorage.setItem('twoFactorEmail', userData.email);
                    localStorage.setItem('twoFactorName', userData.name);
                    localStorage.setItem('twoFactorImage', userData.image);
                    _this.toastr.success(" Log in Successful", "User Logged in", { positionClass: 'toast-top-center' });
                }
            });
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/component/SignUp/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/component/SignUp/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_SignUp_usersignup_service__WEBPACK_IMPORTED_MODULE_2__["UserSignUpService"],
            src_app_services_SignIn_usersignin_service__WEBPACK_IMPORTED_MODULE_7__["UserSignInService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/component/TwoFactorAuth/twofactorauthentication.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/component/TwoFactorAuth/twofactorauthentication.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section class=\"login-forms d-flex justify-content-center align-items-center\">\r\n    <div class=\"tab-wrapper\">\r\n        <div class=\"tab-content\">\r\n            <div class=\"tab-pane fade show active\" role=\"tabpanel\" id=\"loginForm\">\r\n                <div class=\"login-wrapper flex-column\">\r\n                    <p>Enter your verification code you recieved in email.</p>\r\n                    <form class=\"dark-form\" #form=\"ngForm\" (submit)=\"onEmailVerification(form)\" method=\"POST\" autocomplete=\"off\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Verification Code\" name=\"code\" #code=\"ngModel\" [(ngModel)]=\"emailVerify.code\">\r\n                        </mat-form-field>\r\n                        <button type=\"submit\" class=\"btn btn-primary\">\r\n                            Verify Code\r\n                        </button>\r\n                        <p>Code will be valid for 15 minutes only.....</p>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/component/TwoFactorAuth/twofactorauthentication.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/component/TwoFactorAuth/twofactorauthentication.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.login-forms {\n  background: url('loginbg.png');\n  background-size: cover;\n  background-position: center; }\n  @media only screen and (min-width: 768px) {\n    section.login-forms {\n      height: 100vh;\n      margin-top: -125px; } }\n  section.login-forms .tab-wrapper {\n    background: rgba(0, 0, 0, 0.8);\n    padding: 30px 15px;\n    border-radius: 8px;\n    flex-basis: 90%; }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .tab-wrapper {\n        padding: 50px;\n        width: 100%;\n        max-width: 500px; } }\n  section.login-forms .nav-tabs {\n    border: 0; }\n  section.login-forms .nav-tabs .nav-link {\n      background: none;\n      border: none;\n      color: #fff;\n      opacity: 0.5;\n      font-size: 18px; }\n  section.login-forms .nav-tabs .nav-link:first-child {\n        padding-left: 0; }\n  section.login-forms .nav-tabs .nav-link.active {\n        opacity: 1; }\n  section.login-forms .nav-tabs .nav-link.active::after {\n          content: \"\";\n          display: block;\n          height: 2px;\n          background: #f91942; }\n  section.login-forms form.dark-form {\n    margin-top: 15px;\n    align-items: center; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field {\n      display: block;\n      width: 100%;\n      color: white !important; }\n  section.login-forms form.dark-form mat-form-field.mat-form-field .mat-form-field-label {\n        opacity: 0; }\n  section.login-forms .login-wrapper,\n  section.login-forms .signup-wrapper {\n    display: flex; }\n  @media screen and (max-width: 767px) {\n      section.login-forms .login-wrapper,\n      section.login-forms .signup-wrapper {\n        flex-direction: column; } }\n  @media only screen and (min-width: 768px) {\n      section.login-forms .login-wrapper form, section.login-forms .login-wrapper .quick-sign-in,\n      section.login-forms .signup-wrapper form,\n      section.login-forms .signup-wrapper .quick-sign-in {\n        flex-basis: 50%; } }\n  section.login-forms .login-wrapper .quick-sign-in,\n    section.login-forms .signup-wrapper .quick-sign-in {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      margin-top: 20px; }\n  @media only screen and (min-width: 768px) {\n        section.login-forms .login-wrapper .quick-sign-in,\n        section.login-forms .signup-wrapper .quick-sign-in {\n          margin-top: 0;\n          align-items: center;\n          justify-content: center; }\n          section.login-forms .login-wrapper .quick-sign-in h4,\n          section.login-forms .signup-wrapper .quick-sign-in h4 {\n            text-align: center; } }\n  section.login-forms .login-wrapper .quick-sign-in h4,\n      section.login-forms .signup-wrapper .quick-sign-in h4 {\n        display: inline-block;\n        color: #fff;\n        font-size: 14px;\n        font-weight: 600; }\n  section.login-forms .login-wrapper .quick-sign-in h4::after,\n        section.login-forms .signup-wrapper .quick-sign-in h4::after {\n          content: \"\";\n          height: 2px;\n          width: 100px;\n          background-color: #fff;\n          margin-top: 4px;\n          display: block; }\n  @media only screen and (min-width: 768px) {\n            section.login-forms .login-wrapper .quick-sign-in h4::after,\n            section.login-forms .signup-wrapper .quick-sign-in h4::after {\n              width: 100%; } }\n  section.login-forms .login-wrapper .quick-sign-in ul,\n      section.login-forms .signup-wrapper .quick-sign-in ul {\n        display: flex; }\n  section.login-forms .login-wrapper .quick-sign-in ul li,\n        section.login-forms .signup-wrapper .quick-sign-in ul li {\n          margin: 10px; }\n  section.login-forms .login-wrapper .quick-sign-in ul a,\n        section.login-forms .signup-wrapper .quick-sign-in ul a {\n          font-size: 24px;\n          color: #fff; }\n  section.login-forms .login-wrapper .quick-sign-in ul a:hover,\n          section.login-forms .signup-wrapper .quick-sign-in ul a:hover {\n            color: #f91942; }\n  section.login-forms .login-wrapper .btn.btn-primary,\n    section.login-forms .signup-wrapper .btn.btn-primary {\n      display: flex; }\n  section.login-forms .login-wrapper .btn.btn-primary i,\n      section.login-forms .signup-wrapper .btn.btn-primary i {\n        margin-left: 15px; }\n  section.login-forms .login-wrapper p,\n    section.login-forms .signup-wrapper p {\n      margin-top: 10px;\n      color: #fff; }\n  section.login-forms .login-wrapper p a,\n      section.login-forms .signup-wrapper p a {\n        color: #f91942; }\n  #buttonCss {\n  margin-top: 5px;\n  background-color: #ee5f00;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L1R3b0ZhY3RvckF1dGgvRzpcXFdvcmtpbmdGb2xkZXJcXFNlcnZpY2VGaW5kZXJcXHNyY1xcU2VydmljZUZpbmRlclxcQ2xpZW50QXBwL3NyY1xcYXBwXFxjb21wb25lbnRcXFR3b0ZhY3RvckF1dGhcXHR3b2ZhY3RvcmF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvVHdvRmFjdG9yQXV0aC9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvVHdvRmFjdG9yQXV0aC9HOlxcV29ya2luZ0ZvbGRlclxcU2VydmljZUZpbmRlclxcc3JjXFxTZXJ2aWNlRmluZGVyXFxDbGllbnRBcHAvc3JjXFxhc3NldHNcXHNhc3MtaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksK0JBQWdEO0VBQ2hELHVCQUFzQjtFQUN0Qiw0QkFBMkIsRUE0SDlCO0VDdkhDO0lEVEY7TUFNUSxjQUFhO01BQ2IsbUJBQWtCLEVBeUh6QixFQUFBO0VBaElEO0lBVVEsK0JBQTJCO0lBQzNCLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsZ0JBQWUsRUFNbEI7RUNWSDtNRFRGO1FBZVksY0FBYTtRQUNiLFlBQVc7UUFDWCxpQkFBZ0IsRUFFdkIsRUFBQTtFQW5CTDtJQXFCUSxVQUFTLEVBb0JaO0VBekNMO01BdUJZLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osWUVuQkE7TUZvQkEsYUFBWTtNQUNaLGdCQUFlLEVBYWxCO0VBeENUO1FBNkJnQixnQkFBZSxFQUNsQjtFQTlCYjtRQWdDZ0IsV0FBVSxFQU9iO0VBdkNiO1VBa0NvQixZQUFXO1VBQ1gsZUFBYztVQUNkLFlBQVc7VUFDWCxvQkVsQ1AsRUZtQ0k7RUF0Q2pCO0lBMkNRLGlCQUFnQjtJQVNoQixvQkFBbUIsRUFDdEI7RUFyREw7TUE2Q1ksZUFBYztNQUNkLFlBQVc7TUFDWCx3QkFBcUMsRUFJeEM7RUFuRFQ7UUFpRGdCLFdBQVUsRUFDYjtFQWxEYjs7SUF5RFEsY0FBYSxFQW1FaEI7RUFsRUc7TUExRFI7O1FBMkRZLHVCQUFzQixFQWlFN0IsRUFBQTtFQ25ISDtNRFRGOzs7UUErRGdCLGdCQUFlLEVBRXRCLEVBQUE7RUFqRVQ7O01BbUVZLGNBQWE7TUFDYixnQkFBZTtNQUNmLHVCQUFzQjtNQUN0QixpQkFBZ0IsRUF3Q25CO0VDckdQO1FEVEY7O1VBeUVnQixjQUFhO1VBQ2Isb0JBQW1CO1VBQ25CLHdCQUF1QixFQW1DOUI7VUE5R1Q7O1lBNkVvQixtQkFBa0IsRUFDckIsRUFBQTtFQTlFakI7O1FBaUZnQixzQkFBcUI7UUFDckIsWUU1RUo7UUY2RUksZ0JBQWU7UUFDZixpQkFBZ0IsRUFZbkI7RUFoR2I7O1VBc0ZvQixZQUFXO1VBQ1gsWUFBVztVQUNYLGFBQVk7VUFJWix1QkV0RlI7VUZ1RlEsZ0JBQWU7VUFDZixlQUFjLEVBQ2pCO0VDdEZmO1lEVEY7O2NBMEZ3QixZQUFXLEVBS2xCLEVBQUE7RUEvRmpCOztRQWtHZ0IsY0FBYSxFQVdoQjtFQTdHYjs7VUFvR29CLGFBQVksRUFDZjtFQXJHakI7O1VBdUdvQixnQkFBZTtVQUNmLFlFbEdSLEVGc0dLO0VBNUdqQjs7WUEwR3dCLGVFdkdYLEVGd0dRO0VBM0dyQjs7TUFnSFksY0FBYSxFQUloQjtFQXBIVDs7UUFrSGdCLGtCQUFpQixFQUNwQjtFQW5IYjs7TUFzSFksaUJBQWdCO01BQ2hCLFlFakhBLEVGcUhIO0VBM0hUOztRQXlIZ0IsZUV0SEgsRUZ1SEE7RUFRYjtFQUNJLGdCQUFlO0VBQ2YsMEJBQWlDO0VBQ2pDLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9Ud29GYWN0b3JBdXRoL3R3b2ZhY3RvcmF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MtaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy1oZWxwZXJzL21peGlucyc7XHJcbnNlY3Rpb24ubG9naW4tZm9ybXN7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9naW5iZy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMjVweDtcclxuICAgIH1cclxuICAgIC50YWItd3JhcHBlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBmbGV4LWJhc2lzOiA5MCU7XHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LXRhYnN7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIC5uYXYtbGlua3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtLmRhcmstZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4td3JhcHBlcixcclxuICAgIC5zaWdudXAtd3JhcHBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0sLnF1aWNrLXNpZ24taW57XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucXVpY2stc2lnbi1pbntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYW5ndWxhciBmb3JtIHJlc2V0dFxyXG5cclxuICAgIC8vIGFuZ3VsYXIgZm9ybSByZXNldHRcclxufVxyXG5cclxuI2J1dHRvbkNzc3tcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDk1LCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyBtZWRpYSBxdWVyaWVzIG1peGluc1xyXG5AbWl4aW4gbWVkaXVtIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JG1lZGl1bS13aWR0aH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGRlc2t0b3Atd2lkdGh9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXRpbmEge1xyXG4gIEBtZWRpYVxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLFxyXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcclxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksXHJcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcHJpbnQge1xyXG4gIEBtZWRpYSBwcmludCB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLy8gbWVkaWEgcXVlcmllcyBtaXhpbnNcclxuXHJcblxyXG4vLyB2ZW5kb3IgcHJlZml4ZXJzXHJcbkBtaXhpbiBwcmVmaXgoJGRlY2xhcmF0aW9ucywgJHByZWZpeGVzOiAoKSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRkZWNsYXJhdGlvbnMge1xyXG4gICAgQGVhY2ggJHByZWZpeCBpbiAkcHJlZml4ZXMge1xyXG4gICAgICAjeyctJyArICRwcmVmaXggKyAnLScgKyAkcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3V0cHV0IHN0YW5kYXJkIG5vbi1wcmVmaXhlZCBkZWNsYXJhdGlvblxyXG4gICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbi8vIHZlbmRvciBwcmVmaXhlcnMiLCIvLyBmb250c1xyXG4kZ0ZvbnQ6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4kaEZvbnQ6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gY29sb3JzXHJcbiRyZWQ6ICNmOTE5NDI7XHJcbiRtdXRlUmVkOiAjY2UzZDY2OyBcclxuJGJsYWNrOiAjMjUyNTI1O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiR3aGl0ZS1ncmV5OiAjZmFmYWZhO1xyXG4kZ3JleTogI2I3YjdiNztcclxuJHRyYW5zQmx1ZTogI2RlZWVmNjtcclxuJGdyZWVuOiAjM2RjZTg4O1xyXG4kYmx1ZTogIzA2YTFjZTtcclxuXHJcbi8vIGNvbG9yIHJvbGVzXHJcbiRwcmltYXJ5LWNvbG9yOiAkbXV0ZVJlZDtcclxuJHNlY29uZGFyeS1jb2xvcjogJGJsYWNrO1xyXG5cclxuLy8gIG1lZGlhIHF1ZXJ5IGJyZWFrcG9pbnRzXHJcbiR0YWJsZXQtd2lkdGg6IDc2OHB4O1xyXG4kZGVza3RvcC13aWR0aDogMTIwMHB4O1xyXG4kbWVkaXVtLXdpZHRoOiAzNzVweDtcclxuXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/component/TwoFactorAuth/twofactorauthentication.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/TwoFactorAuth/twofactorauthentication.component.ts ***!
  \******************************************************************************/
/*! exports provided: TwofactorauthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwofactorauthenticationComponent", function() { return TwofactorauthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_email_verification_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../models/user.email-verification.model */ "./src/app/models/user.email-verification.model.ts");
/* harmony import */ var _Services_TwoFactorAuth_twofactorauthentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/TwoFactorAuth/twofactorauthentication.service */ "./src/app/Services/TwoFactorAuth/twofactorauthentication.service.ts");






var TwofactorauthenticationComponent = /** @class */ (function () {
    function TwofactorauthenticationComponent(toastr, emailVerificationService, router) {
        this.toastr = toastr;
        this.emailVerificationService = emailVerificationService;
        this.router = router;
        this.emailVerify = new _models_user_email_verification_model__WEBPACK_IMPORTED_MODULE_4__["EmailVerificationModel"];
    }
    TwofactorauthenticationComponent.prototype.ngOnInit = function () {
    };
    TwofactorauthenticationComponent.prototype.onEmailVerification = function (form) {
        var _this = this;
        this.emailVerificationService.postEmailCode(form.value).subscribe(function (res) {
            var result = res;
            if (result.success) {
                _this.router.navigate(["/dashboard"]);
                _this.toastr.success("login successful", "via twoFactor", { positionClass: 'toast-top-center' });
            }
            else {
                _this.toastr.error("Please enter valid verification code", "", { positionClass: 'toast-top-center' });
            }
        });
    };
    TwofactorauthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-twofactorauthentication',
            template: __webpack_require__(/*! ./twofactorauthentication.component.html */ "./src/app/component/TwoFactorAuth/twofactorauthentication.component.html"),
            styles: [__webpack_require__(/*! ./twofactorauthentication.component.scss */ "./src/app/component/TwoFactorAuth/twofactorauthentication.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _Services_TwoFactorAuth_twofactorauthentication_service__WEBPACK_IMPORTED_MODULE_5__["TwofactorauthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TwofactorauthenticationComponent);
    return TwofactorauthenticationComponent;
}());



/***/ }),

/***/ "./src/app/component/notfound/notfound.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/notfound/notfound.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n  <title>ServiceFinder</title>\r\n  <!-- Google font -->\r\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat:200,400,700\" rel=\"stylesheet\">\r\n</head>\r\n\r\n<body>\r\n  <div id=\"notfound\">\r\n    <div class=\"notfound\">\r\n      <div class=\"notfound-404\">\r\n        <h1>Oops!</h1>\r\n        <h2>404 - The Page can't be found</h2>\r\n      </div>\r\n      <a href=\"#\">Go TO Homepage</a>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/component/notfound/notfound.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/notfound/notfound.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\n#notfound {\n  position: relative;\n  height: 100vh; }\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.notfound {\n  max-width: 520px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center; }\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 200px;\n  margin: 0px auto 20px;\n  z-index: -1; }\n\n.notfound .notfound-404 h1 {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 236px;\n  font-weight: 200;\n  margin: 0px;\n  color: #211b19;\n  text-transform: uppercase;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.notfound .notfound-404 h2 {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #211b19;\n  background: #fff;\n  padding: 10px 5px;\n  margin: auto;\n  display: inline-block;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0; }\n\n.notfound a {\n  font-family: 'Montserrat', sans-serif;\n  display: inline-block;\n  font-weight: 700;\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 13px 23px;\n  background: #ff6300;\n  font-size: 18px;\n  transition: 0.2s all; }\n\n.notfound a:hover {\n  color: #ff6300;\n  background: #211b19; }\n\n@media only screen and (max-width: 767px) {\n  .notfound .notfound-404 h1 {\n    font-size: 148px; } }\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    height: 148px;\n    margin: 0px auto 10px; }\n  .notfound .notfound-404 h1 {\n    font-size: 86px; }\n  .notfound .notfound-404 h2 {\n    font-size: 16px; }\n  .notfound a {\n    padding: 7px 15px;\n    font-size: 14px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25vdGZvdW5kL0c6XFxXb3JraW5nRm9sZGVyXFxTZXJ2aWNlRmluZGVyXFxzcmNcXFNlcnZpY2VGaW5kZXJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50XFxub3Rmb3VuZFxcbm90Zm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFWSx1QkFBc0IsRUFDL0I7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsVUFBUyxFQUNWOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsU0FBUTtFQUNSLHlDQUF3QztFQUVoQyxpQ0FBZ0MsRUFDekM7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxzQ0FBcUM7RUFDckMsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsZUFBYztFQUNkLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsVUFBUztFQUNULFNBQVE7RUFDUix5Q0FBd0M7RUFFaEMsaUNBQWdDLEVBQ3pDOztBQUVEO0VBQ0Usc0NBQXFDO0VBQ3JDLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsUUFBTztFQUNQLFNBQVEsRUFDVDs7QUFFRDtFQUNFLHNDQUFxQztFQUNyQyxzQkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFFZixxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0U7SUFDRSxpQkFBZ0IsRUFDakIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsY0FBYTtJQUNiLHNCQUFxQixFQUN0QjtFQUNEO0lBQ0UsZ0JBQWUsRUFDaEI7RUFDRDtJQUNFLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNub3Rmb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQgLm5vdGZvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGNvbG9yOiAjMjExYjE5O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogIzIxMWIxOTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgYSB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDEzcHggMjNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjYzMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmY2MzAwO1xyXG4gICAgYmFja2dyb3VuZDogIzIxMWIxOTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gICAgICBmb250LXNpemU6IDE0OHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICAgIGhlaWdodDogMTQ4cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweDtcclxuICAgIH1cclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgICAgZm9udC1zaXplOiA4NnB4O1xyXG4gICAgfVxyXG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAubm90Zm91bmQgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/component/notfound/notfound.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/notfound/notfound.component.ts ***!
  \**********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/component/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.scss */ "./src/app/component/notfound/notfound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (serviceList, searchTerm) {
        //check if searchTerm is undefined
        if (searchTerm === undefined) {
            return [];
        }
        //return updated search array
        return serviceList.filter(function (service) {
            return service.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    FilterPipe.prototype.whitespace = function (value, args) {
        return value.trim();
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/user.addService.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/user.addService.model.ts ***!
  \*************************************************/
/*! exports provided: AddServiceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceModel", function() { return AddServiceModel; });
var AddServiceModel = /** @class */ (function () {
    function AddServiceModel() {
    }
    return AddServiceModel;
}());



/***/ }),

/***/ "./src/app/models/user.category.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/user.category.model.ts ***!
  \***********************************************/
/*! exports provided: CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return CategoryModel; });
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
    }
    return CategoryModel;
}());



/***/ }),

/***/ "./src/app/models/user.changePassword.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/user.changePassword.model.ts ***!
  \*****************************************************/
/*! exports provided: ChangePasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModel", function() { return ChangePasswordModel; });
var ChangePasswordModel = /** @class */ (function () {
    function ChangePasswordModel() {
    }
    return ChangePasswordModel;
}());



/***/ }),

/***/ "./src/app/models/user.editProfile.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/user.editProfile.model.ts ***!
  \**************************************************/
/*! exports provided: EditProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModel", function() { return EditProfileModel; });
var EditProfileModel = /** @class */ (function () {
    function EditProfileModel() {
    }
    return EditProfileModel;
}());



/***/ }),

/***/ "./src/app/models/user.email-verification.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/models/user.email-verification.model.ts ***!
  \*********************************************************/
/*! exports provided: EmailVerificationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationModel", function() { return EmailVerificationModel; });
var EmailVerificationModel = /** @class */ (function () {
    function EmailVerificationModel() {
    }
    return EmailVerificationModel;
}());



/***/ }),

/***/ "./src/app/models/user.registration.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/user.registration.model.ts ***!
  \***************************************************/
/*! exports provided: UserRegistrationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationModel", function() { return UserRegistrationModel; });
var UserRegistrationModel = /** @class */ (function () {
    function UserRegistrationModel() {
    }
    return UserRegistrationModel;
}());



/***/ }),

/***/ "./src/app/models/user.resetpass.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/user.resetpass.model.ts ***!
  \************************************************/
/*! exports provided: UserResetPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResetPass", function() { return UserResetPass; });
var UserResetPass = /** @class */ (function () {
    function UserResetPass() {
    }
    return UserResetPass;
}());



/***/ }),

/***/ "./src/app/models/user.viewService.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/user.viewService.model.ts ***!
  \**************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
var ViewService = /** @class */ (function () {
    function ViewService() {
    }
    return ViewService;
}());



/***/ }),

/***/ "./src/app/router.ts":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _component_Dashboard_User_ChangePassword_change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/Dashboard/User/ChangePassword/change-password.component */ "./src/app/component/Dashboard/User/ChangePassword/change-password.component.ts");
/* harmony import */ var _component_Dashboard_User_UserDetail_UserDetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/Dashboard/User/UserDetail/UserDetail.component */ "./src/app/component/Dashboard/User/UserDetail/UserDetail.component.ts");
/* harmony import */ var _component_Header_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Header/categories/categories.component */ "./src/app/component/Header/categories/categories.component.ts");
/* harmony import */ var _AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthGuard/auth.guard */ "./src/app/AuthGuard/auth.guard.ts");
/* harmony import */ var _component_Dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Dashboard/dashboard.component */ "./src/app/component/Dashboard/dashboard.component.ts");
/* harmony import */ var _component_MainPage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/MainPage/mainpage.component */ "./src/app/component/MainPage/mainpage.component.ts");
/* harmony import */ var _component_SignIn_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/SignIn/signin.component */ "./src/app/component/SignIn/signin.component.ts");
/* harmony import */ var _component_TwoFactorAuth_twofactorauthentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/TwoFactorAuth/twofactorauthentication.component */ "./src/app/component/TwoFactorAuth/twofactorauthentication.component.ts");
/* harmony import */ var _component_Dashboard_User_AddServices_addservices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/Dashboard/User/AddServices/addservices.component */ "./src/app/component/Dashboard/User/AddServices/addservices.component.ts");
/* harmony import */ var _component_SignUp_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/SignUp/signup.component */ "./src/app/component/SignUp/signup.component.ts");
/* harmony import */ var _component_Header_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/Header/services/services.component */ "./src/app/component/Header/services/services.component.ts");
/* harmony import */ var _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/notfound/notfound.component */ "./src/app/component/notfound/notfound.component.ts");
/* harmony import */ var _component_Dashboard_User_ProviderService_providerService_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/Dashboard/User/ProviderService/providerService.component */ "./src/app/component/Dashboard/User/ProviderService/providerService.component.ts");
/* harmony import */ var _component_ServiceInfo_service_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/ServiceInfo/service-info.component */ "./src/app/component/ServiceInfo/service-info.component.ts");
/* harmony import */ var _component_ServiceList_ServiceList_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/ServiceList/ServiceList.component */ "./src/app/component/ServiceList/ServiceList.component.ts");
/* harmony import */ var _component_Footer_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/Footer/home/home.component */ "./src/app/component/Footer/home/home.component.ts");
/* harmony import */ var _component_Footer_about_us_aboutUs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/Footer/about-us/aboutUs.component */ "./src/app/component/Footer/about-us/aboutUs.component.ts");
/* harmony import */ var _component_Footer_privacy_policy_privacyPolicy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/Footer/privacy-policy/privacyPolicy.component */ "./src/app/component/Footer/privacy-policy/privacyPolicy.component.ts");
/* harmony import */ var _component_Footer_others_others_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/Footer/others/others.component */ "./src/app/component/Footer/others/others.component.ts");
/* harmony import */ var _component_Footer_terms_and_conditions_termsAndConditions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/Footer/terms-and-conditions/termsAndConditions.component */ "./src/app/component/Footer/terms-and-conditions/termsAndConditions.component.ts");
/* harmony import */ var _component_Footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/Footer/footer.component */ "./src/app/component/Footer/footer.component.ts");
/* harmony import */ var _component_Dashboard_User_EditProfile_edit_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/Dashboard/User/EditProfile/edit-profile.component */ "./src/app/component/Dashboard/User/EditProfile/edit-profile.component.ts");
/* harmony import */ var _component_ForgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/ForgotPassword/forgotPassword.component */ "./src/app/component/ForgotPassword/forgotPassword.component.ts");
/* harmony import */ var _component_ResetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/ResetPassword/resetPassword.component */ "./src/app/component/ResetPassword/resetPassword.component.ts");
























var appRoutes = [
    {
        path: "",
        component: _component_MainPage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"]
    },
    {
        path: "signin",
        component: _component_SignIn_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
    },
    {
        path: "signup",
        component: _component_SignUp_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]
    },
    {
        path: "twofactor",
        component: _component_TwoFactorAuth_twofactorauthentication_component__WEBPACK_IMPORTED_MODULE_7__["TwofactorauthenticationComponent"]
    },
    {
        path: "categories",
        component: _component_Header_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"]
    },
    {
        path: "services",
        component: _component_Header_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"]
    },
    {
        path: "serviceList",
        component: _component_ServiceList_ServiceList_component__WEBPACK_IMPORTED_MODULE_14__["ServiceListComponent"],
        data: { some_data: 'some value' }
    },
    {
        path: "footer",
        component: _component_Footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
    },
    {
        path: "home",
        component: _component_Footer_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: "aboutus",
        component: _component_Footer_about_us_aboutUs_component__WEBPACK_IMPORTED_MODULE_16__["AboutUsComponent"],
        pathMatch: 'full'
    },
    {
        path: "privacypolicy",
        component: _component_Footer_privacy_policy_privacyPolicy_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyPolicyComponent"],
        pathMatch: 'full'
    },
    {
        path: "others",
        component: _component_Footer_others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
        pathMatch: 'full'
    },
    {
        path: "terms",
        component: _component_Footer_terms_and_conditions_termsAndConditions_component__WEBPACK_IMPORTED_MODULE_19__["TermsAndConditionsComponent"],
        pathMatch: 'full'
    },
    {
        path: "dashboard",
        component: _component_Dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: "myservices",
                component: _component_Dashboard_User_ProviderService_providerService_component__WEBPACK_IMPORTED_MODULE_12__["ProviderServiceComponent"],
                canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "userdetail",
                component: _component_Dashboard_User_UserDetail_UserDetail_component__WEBPACK_IMPORTED_MODULE_1__["UserDetailComponent"],
                canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "edit/:id",
                component: _component_Dashboard_User_AddServices_addservices_component__WEBPACK_IMPORTED_MODULE_8__["AddServicesComponent"],
                canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                pathMatch: 'full'
            },
            {
                path: "editprofile",
                component: _component_Dashboard_User_EditProfile_edit_profile_component__WEBPACK_IMPORTED_MODULE_21__["EditProfileComponent"],
                canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "changePassword",
                component: _component_Dashboard_User_ChangePassword_change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"],
                canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            }
        ]
    },
    {
        path: "getService/:serviceId",
        component: _component_ServiceInfo_service_info_component__WEBPACK_IMPORTED_MODULE_13__["ServiceInfoComponent"],
        pathMatch: 'full'
    },
    {
        path: "forgotPassword",
        component: _component_ForgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"],
        pathMatch: 'full'
    },
    {
        path: "resetPassword",
        component: _component_ResetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_23__["ResetPasswordComponent"]
    },
    {
        path: "**",
        component: _component_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/services/Dashboard/AddService/addservice.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/Dashboard/AddService/addservice.service.ts ***!
  \*********************************************************************/
/*! exports provided: AddserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddserviceService", function() { return AddserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddserviceService = /** @class */ (function () {
    function AddserviceService(http) {
        this.http = http;
        this.baseurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    AddserviceService.prototype.AddService = function (selectedFile, options) {
        debugger;
        return this.http.post(this.baseurl + "api/service/addService", selectedFile, options);
    };
    AddserviceService.prototype.GetCategories = function () {
        return this.http.get(this.baseurl + 'api/service/getCategories');
    };
    AddserviceService.prototype.GetServices = function () {
        return this.http.get(this.baseurl + 'api/service/getServices');
    };
    AddserviceService.prototype.GetServicesByCategoryId = function (id) {
        return this.http.get(this.baseurl + 'api/service/getServicesByCategoryId/' + id);
    };
    AddserviceService.prototype.GetServiceByServiceItemId = function (id) {
        return this.http.get(this.baseurl + 'api/service/getService/' + id);
    };
    AddserviceService.prototype.GetImages = function (id) {
        return this.http.get(this.baseurl + 'api/service/getImages/' + id);
    };
    AddserviceService.prototype.GetServicesByUserId = function () {
        return this.http.get(this.baseurl + 'api/service/getServicesByUserId');
    };
    AddserviceService.prototype.deleteService = function (id) {
        return this.http.delete(this.baseurl + 'api/service/deleteService/' + id);
    };
    AddserviceService.prototype.editService = function (id, selectedFile, options) {
        return this.http.put(this.baseurl + 'api/service/updateService/' + id, selectedFile, options);
    };
    AddserviceService.prototype.getCurrentUser = function () {
        return this.http.get(this.baseurl + 'api/editProfile/getUserByID');
    };
    AddserviceService.prototype.updateUser = function (model) {
        return this.http.put(this.baseurl + 'api/editProfile/editUserProfile', model);
    };
    AddserviceService.prototype.changePassword = function (data) {
        return this.http.post(this.baseurl + 'api/editProfile/changePassword', data);
    };
    AddserviceService.prototype.deleteImageById = function (id) {
        return this.http.delete(this.baseurl + 'api/service/deleteImageByServiceItemImageId/' + id);
    };
    AddserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AddserviceService);
    return AddserviceService;
}());



/***/ }),

/***/ "./src/app/services/Dashboard/Dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/Dashboard/Dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardService = /** @class */ (function () {
    function DashboardService(jwtHelper, router) {
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    DashboardService.prototype.getUserRole = function (token) {
        var local = typeof localStorage.initial_record !== 'undefined' ? JSON.parse(localStorage.initial_record) : null;
        return local !== null ? local.role[0] : null;
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/SignIn/usersignin.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/SignIn/usersignin.service.ts ***!
  \*******************************************************/
/*! exports provided: UserSignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignInService", function() { return UserSignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserSignInService = /** @class */ (function () {
    function UserSignInService(http) {
        this.http = http;
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    }
    UserSignInService.prototype.postEmailSignInData = function (formData) {
        return this.http.post(this.baseurl + "api/auth/login", formData);
    };
    UserSignInService.prototype.postExternalSignInData = function (data) {
        return this.http.post(this.baseurl + "api/externalauth/login", {
            email: data.email,
            name: data.name
        });
    };
    UserSignInService.prototype.forgotpassword = function (email) {
        var data = { "email": email };
        return this.http.post(this.baseurl + "api/auth/forgotpassword", data);
    };
    UserSignInService.prototype.resetPassByEmail = function (formData) {
        debugger;
        return this.http.post(this.baseurl + "api/auth/resetpassword", formData);
    };
    UserSignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserSignInService);
    return UserSignInService;
}());



/***/ }),

/***/ "./src/app/services/SignUp/usersignup.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/SignUp/usersignup.service.ts ***!
  \*******************************************************/
/*! exports provided: UserSignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpService", function() { return UserSignUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserSignUpService = /** @class */ (function () {
    function UserSignUpService(http) {
        this.http = http;
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    }
    UserSignUpService.prototype.signUpUser = function (formData) {
        return this.http.post(this.baseurl + "api/auth/register", formData);
    };
    UserSignUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserSignUpService);
    return UserSignUpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    baseURL: "http://10.10.7.77:8888/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\WorkingFolder\ServiceFinder\src\ServiceFinder\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map