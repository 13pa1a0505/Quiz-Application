import { Component, OnInit } from '@angular/core';
import { users, UserService } from '../services/user.service';
//Display User List Details in Admin profile
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: users[];

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getTrackUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.users = response;
  }
}

