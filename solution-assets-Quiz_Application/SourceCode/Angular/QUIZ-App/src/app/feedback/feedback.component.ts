import { Component, OnInit } from '@angular/core';
import { UserService, Feedback } from '../services/user.service';
//Users Feedback in user portal
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  Feedback: Feedback = new Feedback("", "", "");
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }
  createFeedBack(): void {
    console.log(this.Feedback);
    this.UserService.createFeedBack(this.Feedback)
      .subscribe(data => {
        alert("user Feedback submitted successfully.");
        location.reload();
      });
  }

}
