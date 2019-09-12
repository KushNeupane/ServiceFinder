import { ViewImages } from './../../models/user.viewImage.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AddserviceService } from 'src/app/services/Dashboard/AddService/addservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestOptions, Headers } from '@angular/http';
import { NgbModal, NgbRatingConfig, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceReviewModel } from 'src/app/models/user.serviceReview.model';
import { ViewServiceById } from 'src/app/models/user.ViewServiceById.model';
import { ServiceVisitLogModel } from 'src/app/models/user.serviceVisitLog.model';
import { UserSignInService } from 'src/app/services/SignIn/usersignin.service';
import { FacebookLoginProvider, GoogleLoginProvider, AuthService } from 'angular-6-social-login';
import { AuthServices } from 'src/app/services/common/auth.service';
import { UserRegistrationModel } from 'src/app/models/user.registration.model';
import { UserSignUpService } from 'src/app/services/SignUp/usersignup.service';
import { QuestionAnswerModel } from 'src/app/models/user.questionAnswerModel';
import { QuestionAnswerDisplayModel } from '../MainPage/QuestionAnswer/question-answer-display.model';
import { QuestionModel } from '../MainPage/QuestionAnswer/question.model';
import { AnswerModel } from '../MainPage/QuestionAnswer/answer.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';



@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss'],
  providers: [
    NgbModal,
    NgbRatingConfig,
    NgbModalConfig
  ]
})
export class ServiceInfoComponent implements OnInit {

  public serviceId: number;
  path: string[];
  public ans: string;
  public qnId: number;

  public serviceReview = new ServiceReviewModel();
  public serviceDetail = new ViewServiceById();
  public serviceVisitLog = new ServiceVisitLogModel();
  public imageList: ViewImages[] = [];
  public reviewList: ServiceReviewModel[] = [];
  ProfileimageUrl: string = "../../../assets/img/default-service-image.png"
  CoverimageUrl: string = "../../../assets/img/default-cover.gif"
  avgRating: number[] = [];
  averageRating: number = 0;
  userName: string;
  userId: string;
  reviewer: string;
  statusActive: boolean = false;
  reviewIdToDel: number;
  reviewDisplay: boolean = true;
  showButton: boolean = false;
  updatePic: boolean = false;
  updateCoverPic: boolean = false;
  showCoverButton: boolean = false;
  updateButton: boolean = false;
  updateReviewId: number;
  loggedIn: boolean;
  isValidUser: boolean;
  MemberStatus: string = "New";
  Status: string = "Register";
  LogInStatus: boolean = true;

  user: UserRegistrationModel = new UserRegistrationModel;
  passPattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$"

  public selectedProfileImage = new FormData();
  public selectedCoverImage = new FormData();

  public options
  public profileImage: string;
  public CoverImage: string;
  ProfileToUpload: File = null;
  CoverToUpload: File = null;

  //For Questions and Answer Section
  questionanswer: QuestionAnswerModel = new QuestionAnswerModel;
  question: boolean;
  reply: boolean;
  updateQuestion: boolean;
  updateAnswer: boolean;
  firstQuestion: boolean;
  asker: boolean = false;
  answerer: boolean = false;
  public questionTodelete: number;
  public answerTodelete: number;
  qaModelActive: boolean = false;
  aModelActive: boolean = false;

  QADisplayModel: any[] = [];

  constructor(
    private service: AddserviceService,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private config: NgbRatingConfig,
    private modal: NgbModalConfig,
    private router: Router,
    private signInService: UserSignInService,
    private socialAuthService: AuthService,
    private authService: AuthServices,
    private signUpService: UserSignUpService,

  ) {

    this.config.max = 5;
    this.config.readonly = true;
    this.modal.backdrop = 'static';
    this.modal.keyboard = false;
  }


  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    this.serviceId = routeParams !== null ? Number(routeParams.serviceId) : 0;
    this.isValidUser = this.authService.IsUserValidUser();
    this.getServiceDetail();
    this.getReviewByService();
    this.getQuestionsAndAnswers();
  }

  getServiceDetail() {
    if (this.serviceId > 0) {

      this.service.GetServiceByServiceItemId(this.serviceId).subscribe(res => {

        let result = <any>res;

        if (result.serviceData["applicationUser"] == null) {
          this.profileImage = null;
          this.CoverImage = null;
        }
        this.reviewDisplay = result.showReview;
        this.loggedIn = result.loggedIn;
        this.userName = result.serviceData["applicationUser"].displayName
        this.serviceDetail = result.serviceData;
        this.serviceVisitLog.serviceItemId = this.serviceId;
        this.profileImage = result.serviceData.originalProfileImageName;
        this.CoverImage = result.serviceData.originalCoverImageName;
        if (this.profileImage == null) {
          this.ProfileimageUrl = "../../../assets/img/default-service-image.png"
        }
        else {
          this.ProfileimageUrl = "../../../../../wwwroot/ServiceProfilePicture/" + this.userName + "/" + this.profileImage;
        }
        if (this.profileImage == null) {
          this.ProfileimageUrl = "../../../assets/img/default-service-image.png"
        }
        else {
          this.ProfileimageUrl = "../../../../../wwwroot/ServiceProfilePicture/" + this.userName + "/" + this.profileImage;
        }
        if (this.CoverImage == null) {
          this.CoverimageUrl = "../../../assets/img/default-cover.gif";
        }
        else {
          this.CoverimageUrl = "../../../../../wwwroot/ServiceCoverPicture/" + this.userName + "/" + this.CoverImage;
        }

        this.service.GetImages(this.serviceId).subscribe(result => {
          this.imageList = result;
          console.log(this.imageList)
        })

        //Posting the service view count in ServiceItemViewLog
        this.service.postServiceVisitLog(this.serviceVisitLog).subscribe(res => {
        });

      })
    }
  }

  //Service Profile image upload
  serviceProfileUpload(file: FileList) {
    if (this.profileImage) {
      this.updatePic = true;
      this.profileImage = null;
      this.ProfileimageUrl = null;

    }
    this.ProfileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ProfileimageUrl = event.target.result;
      this.showButton = true;
    }
    reader.readAsDataURL(this.ProfileToUpload)
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: headers });
  }

  //Uploading profile Picture to Database Function
  uploadServiceProfileImage(form: NgForm) {
    this.selectedProfileImage.set("image", '');
    this.selectedProfileImage.append('image', this.ProfileToUpload);
    this.selectedProfileImage.append('profile', "profile");
    this.selectedProfileImage.append('cover', "notCover");
    this.service.editService(this.serviceId, this.selectedProfileImage, this.options).subscribe(res => {
      this.toastr.success("Your Service Main Picture is updated", "", { positionClass: 'toast-bottom-right' });
      this.selectedProfileImage.delete("profile")
      this.selectedProfileImage.delete("cover")
      form.reset();
    });
  }

  //Service Cover Image Upload
  serviceCoverUpload(file: FileList) {
    if (this.CoverImage) {
      this.updateCoverPic = true;
      this.CoverImage = null;
      this.CoverimageUrl = null;
    }
    this.CoverToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.CoverimageUrl = event.target.result;
      this.showCoverButton = true;
    }
    reader.readAsDataURL(this.CoverToUpload)
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: headers });
  }

  //for uploading cover phot to database
  uploadServiceCoverImage(form: NgForm) {
    this.selectedCoverImage.set("image", '');
    this.selectedCoverImage.append('image', this.CoverToUpload);
    this.selectedCoverImage.append('cover', "cover");
    this.selectedCoverImage.append('profile', "notProfile");
    this.service.editService(this.serviceId, this.selectedCoverImage, this.options).subscribe(res => {
      this.toastr.success("Your Service Cover Picture is updated", "", { positionClass: 'toast-bottom-right' });
      this.selectedCoverImage.delete("cover");
      this.selectedCoverImage.delete("profile");
      form.reset();
    });
  }
  open(content) {
    this.config.readonly = false;
    this.updateButton = false;
    this.getReviewByService();
    this.getServiceDetail();
    this.serviceReview = new ServiceReviewModel();
    this.service.getMyReviews().subscribe(res => {
      let result = <any>res;
      for (let review of result) {
        if (review.serviceItemId == this.serviceId) {
          this.serviceReview = review;
        }
      }
    })
    this.modalService.open(content);
  }

  update(content, id) {
    this.updateButton = true;
    this.config.readonly = false;
    this.updateReviewId = id;
    for (let review of this.reviewList) {
      if (review.showOptions) {
        this.serviceReview = review;
      }
    }        
    this.modalService.open(content);

  }

  onRating(form: NgForm) {

    if (form.value.overAllReview == null || form.value.reviewTest == null) {

      this.toastr.error("Please fill the review fields properly", "", { positionClass: 'toast-top-center' })
    }
    else {
      if (form.value) {
        this.serviceReview = new ServiceReviewModel();
        this.serviceReview.overAllReview = form.value.overAllReview;
        this.serviceReview.reviewTest = form.value.reviewTest;
        this.serviceReview.serviceItemId = this.serviceId;
      }
      this.service.addReview(this.serviceReview).subscribe(res => {
        let response = <any>res;
        if (!response.isSuccess) {
          form.reset();

          response.errors.forEach(error => {
            this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
          });
          this.config.readonly = true;
        }
        else {
          form.reset();
          this.toastr.success(response.successMessage, "", { positionClass: 'toast-top-center' });
          this.config.readonly = true;
          this.getReviewByService();
        }
      })
    }


  }

  updateReview(form: NgForm) {
    if (form.value.overAllReview == null || form.value.reviewTest == null) {

      this.toastr.error("Please fill the review fields properly", "", { positionClass: 'toast-top-center' })
    }

    else {
      if (form.value) {
        this.serviceReview = new ServiceReviewModel();
        this.serviceReview.overAllReview = form.value.overAllReview;
        this.serviceReview.reviewTest = form.value.reviewTest;
        this.serviceReview.serviceItemId = this.serviceId;
      }
      this.service.updateReview(this.updateReviewId, this.serviceReview).subscribe(res => {
        let response = <any>res;
        if (!response.isSuccess) {
          form.reset();

          response.errors.forEach(error => {
            this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
          });
          this.config.readonly = true;
        }
        else {
          form.reset();
          this.toastr.success("Review Updated !!", "", { positionClass: 'toast-top-center' });
          this.getReviewByService();
          this.config.readonly = true;
        }
      })
    }
  }



  getReviewByService() {
    this.service.getReviewByServiceId(this.serviceId).subscribe(res => {

      let result = <any>res;

      this.reviewList = result;

      if (this.reviewList.length == 0) {
        this.averageRating = 0;
      }
      else {
        this.avgRating = [];
        for (let review of this.reviewList) {
          this.avgRating.push(review.overAllReview);
        }
        this.averageRating = 0;
        for (let avg of this.avgRating) {
          this.averageRating += avg;
        }
        this.averageRating = parseFloat((this.averageRating / this.reviewList.length).toFixed(2));

      }
    })
  }
  deleteReview(id) {
    this.service.deleteReview(id).subscribe(res => {
      console.log(res);
      this.toastr.success("Deleted Successfully", "", { positionClass: 'toast-top-center' });
      this.getReviewByService();
    });
    this.statusActive = false;
  }

  deleteReviewConfirmation(id) {
    this.reviewIdToDel = id;
    this.statusActive = true;
  }

  close(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate(["/getService", this.serviceId]));
  }
  destroyConfbox() {
    this.statusActive = false;
  }

  onEmailSignIn(form: NgForm) {
    if (form.value.email == null || form.value.password == null) {
      this.toastr.error("please fill up all fields", "", { positionClass: 'toast-top-center' });
    }
    else {
      this.signInService.postEmailSignInData(form.value).subscribe(res => {
        let result = <any>res;
        if (!result.isSuccess) {
          this.toastr.error(result.errors[0], "", { positionClass: 'toast-top-center' });
        }
        else {
          localStorage.setItem("initial_record", JSON.stringify(result));
          localStorage.setItem('twoFactorEmail', result.loginData.email);
          localStorage.setItem('twoFactorName', result.loginData.displayName);
          localStorage.setItem('twoFactorphoneNumber', result.loginData.phoneNumber);
          this.toastr.success("Logged In Sucessfully", "", { positionClass: 'toast-top-center' });

          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate(["/getService", this.serviceId]));
          if (result.twoFactorEnabled)
            this.router.navigate(["/twofactor"]);
        }
      });

    }
  }

  //For Third-Party SignIn
  public OnSocialSignIn(socialPlatform: string) {
    let socialPlatformProvider;

    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;

    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    }

    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      this.signInService.postExternalSignInData(userData).subscribe(res => {
        let response = <any>res;

        if (response.isSuccess) {

          this.router.navigate(["/dashboard"]);
          localStorage.setItem('twoFactorEmail', userData.email);
          localStorage.setItem('twoFactorName', userData.name);
          localStorage.setItem('twoFactorImage', userData.image);
          this.toastr.success(" Log in Successful", "", { positionClass: 'toast-top-center' });

        }
      });
    });
  }

  onSignUp(form: NgForm) {

    if (form.value.email == null || form.value.password == null || form.value.displayName == null || form.value.phoneNumber == null || form.value.confirmPassword == null) {
      this.toastr.error("Please fill up all the fields", "", { positionClass: 'toast-top-center' });
    }
    else if (form.value.password != form.value.confirmPassword) {
      this.toastr.error("Password does not match", "", { positionClass: 'toast-top-center' });
    }
    else {
      this.signUpService.signUpUser(form.value).subscribe(res => {
        let response = <any>res;
        if (!response.isSuccess) {
          response.errors.forEach(error => {
            this.toastr.error(error, "Error", { positionClass: 'toast-top-center' });
          });
        }
        else {
          this.LogInStatus = true;
          form.reset();
          this.toastr.success("Inserted Successfully", "User Registered", { positionClass: 'toast-top-center' });
        }
      });
    }
  }
  Logging() {
    if (this.MemberStatus == "New") {
      this.MemberStatus = "Already";
      this.Status = "Login";
      this.LogInStatus = false;

    }
    else {
      this.MemberStatus = "New";
      this.Status = "Register";
      this.LogInStatus = true;

    }

  }
  ForgetPassword() {
    this.router.navigate(["/forgotPassword"])
  }

  //QuestionAnswer Section
  onQuestion(form: NgForm) {
    if (form.value) {
      this.questionanswer.serviceItemId = this.serviceId;
      this.questionanswer.questionText = form.value.questionText;

    }
    this.service.askQuestions(this.questionanswer).subscribe(res => {
      this.getQuestionsAndAnswers()
      form.reset();
    });
  }

  getQuestionsAndAnswers() {
    this.service.getQuestionsAndAnswerByServiceId(this.serviceId).subscribe(res => {
      let response = <any>res;
      this.QADisplayModel = this.prepareQuestionAnswere(response);
      debugger;
      if (this.QADisplayModel[0].firstQuestion == true && this.QADisplayModel[0].showOptions == true && this.QADisplayModel[0].questionId == 0) {
        this.firstQuestion = true;
        this.question = false;
        this.reply = false;
      }

      if (this.QADisplayModel[0].firstQuestion == true && this.QADisplayModel[0].showOptions == false) {
        this.firstQuestion = false;
        this.question = true;
      }
      else {
        for (let questions of this.QADisplayModel) {

          if (questions.showOptions == true && questions.questionId > 0) {
            this.question = false;
            this.updateAnswer = true;

          }
          if (questions.showOptions == false) {
            this.question = true;
            this.firstQuestion = false;
          }

        }
      }


    })
  }
  onAnswer(form: NgForm) {
    if (form.value) {
      this.questionanswer.answerText = form.value.answerText;
      this.questionanswer.Id = form.value.answerId;
      this.questionanswer.questionId = form.value.questionId;
    }
    this.service.giveAnswers(this.questionanswer).subscribe(res => {
      this.getQuestionsAndAnswers()
      this.reply = false;
      form.reset();
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(["/getService", this.serviceId]));


    });
  }

  private prepareQuestionAnswere(reponse: any) {
    debugger;
    var temp = [];
    let qaDisplayModel: any[] = [];
    if (reponse !== null && typeof reponse !== "undefined") {
      reponse.filter(function (item) {
        if (!temp.includes(item.questionId)) {
          let answerModel: AnswerModel[] = [];

          temp.push(item.questionId);
          item.answers = answerModel;
          qaDisplayModel.push(item);
        }
      });

      reponse.filter(function (item) {
        qaDisplayModel.filter(function (qa) {
          if (item.questionId === qa.questionId) {
            qa.answers.push({ "answerId": item.answerId, "answerText": item.answerText });
          }
        });
      });


      return qaDisplayModel;
    }
  }

  editQuestion(id: number) {
    this.service.getQuestionByQuestionId(id).subscribe(res => {
      let result = <any>res;
      this.questionanswer = null
      this.questionanswer = result.data;

    })
  }
  editAnswer(id: Number) {
    this.reply = true;
    this.service.getAnswerByAnswerId(id).subscribe(res => {
      
      let result = <any>res;
      this.questionanswer = null;
      this.questionanswer = result;

    })
  }
  deleteAnswer(id: number) {
    
    this.aModelActive = true;
    this.answerTodelete = id;
  }

  deleteAnswerPopUp(id: number) {
    this.service.deleteAnswer(id).subscribe(res => {
      this.getQuestionsAndAnswers();
      this.toastr.success("Deleted Successfully" , "", { positionClass: 'toast-top-center' });
    })
    this.aModelActive = false;
  }
  destroyAConfbox() {
    this.aModelActive = false;
  }


  deleteQuestion(id: number) {
    
    this.questionTodelete = id;
    this.qaModelActive = true;
  }

  deleteQuetionPopUp(id: number) {
    this.service.deleteQuestion(id).subscribe(res => {
      this.getQuestionsAndAnswers();
      this.toastr.success("Deleted Successfully" , "", { positionClass: 'toast-top-center' });
    })
    this.qaModelActive = false;
  }

  destroyQAConfbox() {
    this.qaModelActive = false;
  }

  replyOnQuestion(id: number) {
    
    this.reply = true;
    this.question = false;
    this.questionanswer.questionId = id;
  }
}