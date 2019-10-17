import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CategoryModel } from "src/app/models/user.category.model";
import { ViewImages } from "./../../../models/user.viewImage.model";
import { ViewService } from "./../../../models/user.viewService.model";
import { EditProfileModel } from "src/app/models/user.editProfile.model";
import { ViewServiceById } from "src/app/models/user.ViewServiceById.model";
import { ServiceReviewModel } from "src/app/models/user.serviceReview.model";
import { QuestionAnswerModel } from "src/app/models/user.questionAnswerModel";
import { ChangePasswordModel } from "./../../../models/user.changePassword.model";

@Injectable({
  providedIn: "root"
})
export class AddserviceService {
  baseurl = environment.baseURL;
  constructor(private http: HttpClient) {}

  AddService(selectedFile, options) {
    return this.http.post(
      this.baseurl + "api/service/addService",
      selectedFile,
      options
    );
  }

  GetCategories() {
    return this.http.get<CategoryModel[]>(
      this.baseurl + "category/all-category"
    );
  }

  getCategoriesWithServiceCount(loadMoreCount) {
    return this.http.get<CategoryModel[]>(
      this.baseurl +
        "api/service/getCategoriesWithServiceCount/" +
        loadMoreCount
    );
  }

  GetServices() {
    return this.http.get<ViewService[]>(
      this.baseurl + "api/service/getServices"
    );
  }

  GetServicesByCategoryId(id) {
    return this.http.get<ViewService[]>(
      this.baseurl + "api/service/getServicesByCategoryId/" + id
    );
  }

  GetServiceByServiceItemId(id) {
    return this.http.get<ViewServiceById>(
      this.baseurl + "api/service/getService/" + id
    );
  }

  GetImages(id) {
    return this.http.get<ViewImages[]>(
      this.baseurl + "api/service/getImages/" + id
    );
  }

  GetServicesByUserId() {
    return this.http.get<ViewService[]>(
      this.baseurl + "api/service/getServicesByUserId"
    );
  }

  deleteService(id) {
    return this.http.delete(this.baseurl + "api/service/deleteService/" + id);
  }

  editService(id, selectedFile, options) {
    return this.http.put(
      this.baseurl + "api/service/updateService/" + id,
      selectedFile,
      options
    );
  }

  getCurrentUser() {
    return this.http.get<EditProfileModel>(
      this.baseurl + "api/editProfile/getUserByID"
    );
  }

  updateUser(selectedFile, options) {
    return this.http.put(
      this.baseurl + "api/editProfile/editUserProfile",
      selectedFile,
      options
    );
  }

  changePassword(data: ChangePasswordModel) {
    return this.http.post(
      this.baseurl + "api/editProfile/changePassword",
      data
    );
  }

  deleteImageById(id) {
    return this.http.delete(
      this.baseurl + "api/service/deleteImageByServiceItemImageId/" + id
    );
  }

  addReview(model) {
    return this.http.post(this.baseurl + "api/service/addReview/", model);
  }

  getReviewByServiceId(id) {
    return this.http.get<ServiceReviewModel[]>(
      this.baseurl + "api/service/getReviewByService/" + id
    );
  }

  clearCookies() {
    return this.http.get(this.baseurl + "api/externalauth/clearCookie");
  }

  postServiceVisitLog(model) {
    return this.http.post(
      this.baseurl + "api/service/addServiceVisitLog/",
      model
    );
  }

  getTotalViewCount() {
    return this.http.get<ViewService[]>(
      this.baseurl + "api/service/getTotalServiceViewCount"
    );
  }

  deleteReview(id) {
    return this.http.delete(this.baseurl + "api/service/deleteReview/" + id);
  }

  updateReview(id, formdata) {
    return this.http.put(
      this.baseurl + "api/service/updateReview/" + id,
      formdata
    );
  }

  getMyReviews() {
    return this.http.get(this.baseurl + "api/service/getReviewByUser");
  }

  getCities() {
    return this.http.get(this.baseurl + "city/all-city");
  }

  getFilteredSearch(value: string) {
    return this.http.get(
      this.baseurl + "api/service/getFilteredService/" + value
    );
  }

  askQuestions(data) {
    return this.http.post(
      this.baseurl + "api/questionAnswer/postQuestions",
      data
    );
  }

  getQuestionsAndAnswerByServiceId(id) {
    return this.http.get(
      this.baseurl + "api/questionAnswer/getQuestionsAndAnswerById/" + id
    );
  }

  giveAnswers(data) {
    return this.http.post(
      this.baseurl + "api/questionAnswer/postAnswers",
      data
    );
  }

  getAnswerByServiceItemId(id) {
    return this.http.get<QuestionAnswerModel[]>(
      this.baseurl + "api/questionAnswer/getAnswers/" + id
    );
  }

  getQuestionByQuestionId(id) {
    return this.http.get(
      this.baseurl + "api/questionAnswer/getQuestionById/" + id
    );
  }

  getAnswerByAnswerId(id) {
    return this.http.get(
      this.baseurl + "api/questionAnswer/getAnswerById/" + id
    );
  }

  deleteAnswer(id) {
    return this.http.delete(
      this.baseurl + "api/questionAnswer/deleteAnswer/" + id
    );
  }

  deleteQuestion(id) {
    return this.http.delete(
      this.baseurl + "api/questionAnswer/deleteQuestion/" + id
    );
  }
}
