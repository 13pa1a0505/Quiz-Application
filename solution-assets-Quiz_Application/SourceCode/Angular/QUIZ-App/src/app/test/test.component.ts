import { Component, OnInit } from '@angular/core';
import { Question, UserService, T_Selectedanswer } from '../services/user.service';
import { Router } from '@angular/router';
//Test page
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  selectedOption: string = '';
  qid: string = '';
  questions: Question[];
  T_Selectedanswer: T_Selectedanswer[];
  ss = false;
  count: number;
  status = false;
  constructor(private UserService: UserService, public route: Router) { }

  ngOnInit() {

    this.UserService.getTrackquestion(this.UserService.temp).subscribe(
      response => {
        console.log("response", response);
        this.handleSuccessfulResponse(response)
      }
    );


  }



  handleSuccessfulResponse(response) {
    this.questions = response;
    if (this.questions.length === 0) {
      this.status = true;
    }

  }
  //Capturing the selected answer
  radioChangedHandler(question, number) {


    this.selectedOption = question;
    console.log(this.selectedOption);
    console.log(number)


    this.UserService.submittedAnswers(this.selectedOption, number).subscribe(
      response => console.log(response),
    );

  }

  //To navigate Next question
  next() {


    if (this.selectedOption === "") {
      this.ss = true;
    }
    else {
      this.UserService.temp = this.UserService.temp + 1;

      this.UserService.getTrackquestion(this.UserService.temp).subscribe(
        response => {
          console.log("response", response);
          this.handleSuccessfulResponse(response)
        }
      );
      this.selectedOption = "";

      this.ss = false;
    }
  }
  //To navigate previous question
  previous() {
    this.UserService.temp = this.UserService.temp - 1;
    this.UserService.getTrackquestion(this.UserService.temp).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  //Submitting the test
  Submit() {


    this.UserService.finalSubmition().subscribe(
      response => console.log(response),
    );
    this.route.navigate(['/Submit']);
  }


}
