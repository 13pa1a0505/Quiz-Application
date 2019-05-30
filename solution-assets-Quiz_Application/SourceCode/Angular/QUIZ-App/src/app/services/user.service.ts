import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class users {
  constructor(
    public uid: number | string,
    public firstName : string,
    public middleName : string,
    public lastName : string,
    public dateOfBirth : Date|string,
    public gender : string,
    public username: string,
    public email:string,
    public securityQuestion: string,
    public secretAnswer : string,
    public address : string,
    public contactno:number|string,
    public password:number | string,
    public createdBy : string,
    public createdOn : Date | string,
    public updatedBy : string,
    public updatedOn : Date|string,
    public role:string
    ) { }
}


export class Feedback{
  constructor(
    public uId: number | string,  
    public rating: string,
    public comments : string,){}
}

export class Technologies{
  constructor(
    public tid: number|string,
    public tname:string
  ){}
}

export class Question{
  constructor(
    public qid:number|string,
    public questions:number|string,
    public A:number|string,
    public B:number|string,
    public C:number|string,
    public D:number|string,
    
  ){}
}

export class Results{
  constructor(
    public uID:string|number,
    public technologyName:string,
    public level:string,
    public qsnsattempted:string|number,
    public qsnscorrect:string|number,
    public score:string|number,
  ){}
  }
  export class T_Selectedanswer{
    constructor(
      public qid:string|number,
      public selectedOption:string,
    ){}
  }
  export class RegisterDetails{
    constructor(
      public gender:string,
      public squestion:string,
    ){}
  }


   

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userid:String;
  ntid:String |number;
  nlevel:String |number;
  public temp:number=1;
  constructor(private http: HttpClient) { }

 getRegistrationFields() {
    return this.http.get<RegisterDetails[]>("http://localhost:8080/users/registerDetails")
    } 

createUser(user: users,val,sq) {
    return this.http.post<users>("http://localhost:8080/users/"+val+"/"+sq, user);
}
login(username,password) {
  return this.http.get<users>("http://localhost:8080/users/" + "/login/" + "/"+username+"/" +"/" +password+"/" );
}

getTrackUsers() {
  return this.http.get<users[]>("http://localhost:8080/users/All");
}
getTrackTechs() {
  return this.http.get<Technologies[]>("http://localhost:8080/users/technologiesDetails");
}
createFeedBack(Feedback: Feedback) {
  return this.http.post<Feedback>("http://localhost:8080/users/feedback", Feedback);
}
get(tid,level){
this.ntid=tid;
this.nlevel=level;
}
newTech(tech:Technologies)
{
  return this.http.post<Technologies>("http://localhost:8080/users/addingTechnology", tech);
}
Del(tid){
  return this.http.get<Technologies>("http://localhost:8080/users/" + "deletingTechnology" + "/"+tid );
}



getTrackquestion(count){
  console.log(count);
  return this.http.get<Question[]>("http://localhost:8080/users/allQuestions/"+this.ntid+"/"+this.nlevel+"/"+count);

}

submittedAnswers(selectedOption,qid){

  console.log(qid+" : "+selectedOption);
console.log("var================="+selectedOption+qid);
return this.http.get<any>("http://localhost:8080/users/selectedAnswer/"+selectedOption+"/"+qid);
}
finalSubmition(){
  return this.http.get<any>("http://localhost:8080/users/answerValidation/"+ this.ntid+"/"+this.nlevel).pipe();
 }
 getTrackAnswers(){
 
  return this.http.get<any>("http://localhost:8080/users/fectchingAnswers/" + this.ntid+"/"+this.nlevel);
}
getAllResults(){
  return this.http.get<Results[]>("http://localhost:8080/users/adminPageResult");
}
getUserResults(){
  return this.http.get<Results[]>("http://localhost:8080/users/userPageResult/");
}
getProfile(){
  return this.http.get<users[]>("http://localhost:8080/users/profiles");
}

}
