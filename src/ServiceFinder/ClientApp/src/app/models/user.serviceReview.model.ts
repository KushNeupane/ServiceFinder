export class ServiceReviewModel{
    id : number;
    overAllReview: number=0;
    reviewTest: string;
    serviceItemId : number;
    userId : number;
    createdOn : Date;
    showOptions : boolean =false;
    everUsed : boolean = false;
}