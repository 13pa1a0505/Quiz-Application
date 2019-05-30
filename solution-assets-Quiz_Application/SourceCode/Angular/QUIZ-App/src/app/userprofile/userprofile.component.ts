import { Component, OnInit } from '@angular/core';
import { users, UserService } from '../services/user.service';
//User Profile
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  users: users[];
  uname: String;
  constructor() { }

  ngOnInit() { this.uname = sessionStorage.getItem("username"); }
  //Logout Function
  logout() {
    alert("you are going to logout.");
  }

}