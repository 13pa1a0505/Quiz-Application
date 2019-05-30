import { Component, OnInit } from '@angular/core';
import { users,UserService } from '../services/user.service';
//Users DashBoard
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  users:users[];
  uname:String;
  constructor() { }

  ngOnInit() {
    this.uname=sessionStorage.getItem("username");
  }

}
