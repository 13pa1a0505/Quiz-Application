import { Component, OnInit } from '@angular/core';
import { Results, UserService } from '../services/user.service';
import { Router } from '@angular/router';
//All users quiz results Displaying in Admin Portal
@Component({
  selector: 'app-quiz-result-d',
  templateUrl: './quiz-result-d.component.html',
  styleUrls: ['./quiz-result-d.component.css']
})
export class QuizResultDComponent implements OnInit {

  results: Results[];

  constructor(private UserService: UserService, public route: Router) { }


  ngOnInit() {
    this.UserService.getAllResults().subscribe(
      response => this.handleGetAllResults(response
      ),
    );
  }
  handleGetAllResults(response) {
    console.log(this.results = response);
  }

}
