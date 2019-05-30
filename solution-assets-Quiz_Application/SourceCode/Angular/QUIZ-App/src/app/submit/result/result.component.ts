import { Component, OnInit } from '@angular/core';
import { Question, UserService } from '../../services/user.service';
import { Router } from '@angular/router';
//Displaying Quiz Correct Answers with questions
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  questions: Question[];
  constructor(private UserService: UserService, public route: Router) { }

  ngOnInit() {

    this.UserService.getTrackAnswers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.questions = response;

  }
}
