import { ChangePasswordModel } from './../../../models/user.changePassword.model';
import { ViewImages } from './../../../models/user.viewImage.model';
import { ViewService } from './../../../models/user.viewService.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryModel } from 'src/app/models/user.category.model';
import { Observable } from 'rxjs';
import { EditProfileModel } from 'src/app/models/user.editProfile.model';
import { basename } from 'path';
import { ServiceReviewModel } from 'src/app/models/user.serviceReview.model';


@Injectable({
  providedIn: 'root'
})
export class AddserviceService {

  baseurl = environment.baseURL;
  constructor(private http: HttpClient) { }

  AddService(selectedFile, options) {
    return this.http.post(this.baseurl + "api/service/addService", selectedFile, options);
  }

  GetCategories() {
    return this.http.get<CategoryModel[]>(this.baseurl + 'api/service/getCategories')
  }

  GetServices() {
    return this.http.get<ViewService[]>(this.baseurl + 'api/service/getServices')
  }

  GetServicesByCategoryId(id) {
    return this.http.get<ViewService[]>(this.baseurl + 'api/service/getServicesByCategoryId/' + id);
  }

  GetServiceByServiceItemId(id) {
    return this.http.get<ViewService>(this.baseurl + 'api/service/getService/' + id);
  }

  GetImages(id) {
    return this.http.get<ViewImages[]>(this.baseurl + 'api/service/getImages/' + id);
  }

  GetServicesByUserId() {
    return this.http.get<ViewService[]>(this.baseurl + 'api/service/getServicesByUserId');
  }

  deleteService(id) {
    return this.http.delete(this.baseurl + 'api/service/deleteService/' + id)
  }

  editService(id, selectedFile, options) {
    return this.http.put(this.baseurl + 'api/service/updateService/' + id, selectedFile, options);
  }

  getCurrentUser() {
    return this.http.get<EditProfileModel>(this.baseurl + 'api/editProfile/getUserByID');
  }

  updateUser(selectedFile, options) {
    return this.http.put(this.baseurl + 'api/editProfile/editUserProfile', selectedFile, options);
  }

  changePassword(data: ChangePasswordModel) {
    return this.http.post(this.baseurl + 'api/editProfile/changePassword', data);
  }

  deleteImageById(id) {
    return this.http.delete(this.baseurl + 'api/service/deleteImageByServiceItemImageId/'+ id)
  }

  addReview(model) {
    return this.http.post(this.baseurl + 'api/service/addReview/', model)
  }

  getReviewByServiceId(id) {
    return this.http.get<ServiceReviewModel[]>(this.baseurl + 'api/service/getReviewByService/' +id);
  }

  clearCookies(){
    return this.http.get(this.baseurl+'api/externalauth/clearCookie');
  }

}