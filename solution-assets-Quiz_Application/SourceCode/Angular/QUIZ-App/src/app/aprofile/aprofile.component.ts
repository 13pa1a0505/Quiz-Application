import { Component, OnInit } from '@angular/core';
import { users, UserService } from '../services/user.service';
//Admin Profile Displaying
@Component({
  selector: 'app-aprofile',
  templateUrl: './aprofile.component.html',
  styleUrls: ['./aprofile.component.css']
})
export class AprofileComponent implements OnInit {

  users: users[];

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getProfile().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.users = response;
  }

}
