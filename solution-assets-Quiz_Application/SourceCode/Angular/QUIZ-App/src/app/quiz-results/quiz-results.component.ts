import { Component, OnInit } from '@angular/core';
import {Results,UserService,users} from '../services/user.service';
import { Router } from '@angular/router';
//Displaying Quiz results in user portal
@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  users:users[];
  uname:String;
  results: Results[];
  constructor(private UserService:UserService,public route:Router) { }

  ngOnInit() {
    this.uname=sessionStorage.getItem("username");
    this.UserService.getUserResults().subscribe(
      response=>this.handleGetAllUserResults(response
     ),
   );
 }
 handleGetAllUserResults(response){
   console.log(this.results=response);
 }

}
