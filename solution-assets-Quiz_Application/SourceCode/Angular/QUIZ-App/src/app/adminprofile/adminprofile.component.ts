import { Component, OnInit } from '@angular/core';
import { users, UserService } from '../services/user.service';
//Admin Profile 
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  users: users[];
  uname: String;
  constructor() { }

  ngOnInit() { this.uname = sessionStorage.getItem("username"); }
  logout() {
    alert("you are going to logout.");
  }
}
