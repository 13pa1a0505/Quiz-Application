import { Component, OnInit } from '@angular/core';
import { users, UserService } from '../services/user.service';
//Admin Dashboard
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  users: users[];
  uname: String;
  constructor() { }

  ngOnInit() { this.uname = sessionStorage.getItem("username"); }


}


