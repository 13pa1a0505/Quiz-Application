import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Submitting the Quiz
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  answers() {
    this.route.navigate(['/Results']);
  }
}
