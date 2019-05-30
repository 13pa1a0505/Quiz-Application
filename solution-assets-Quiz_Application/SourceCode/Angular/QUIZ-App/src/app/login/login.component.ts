import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoginAuthenticationService } from '../services/login-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/** Handle login of the user */
export class LoginComponent implements OnInit {
 username="";
 accessType="";
 match=false;
  constructor(private router:Router,public loginAuthService: LoginAuthenticationService) { }
  
  ngOnInit() {
  }
  OnClick(username,password){
    this.loginAuthService.isUserLoggedIn(username,password); //check whether the user with a particular username and password is logged in or not
  }
  
}

