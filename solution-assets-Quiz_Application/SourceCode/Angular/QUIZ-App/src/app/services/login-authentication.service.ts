import { Injectable } from '@angular/core';
import { ValidationService } from '../../app/validation.service';
import { Router } from '@angular/router';
import { users } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
/**Determine role of user login is admin or user */
export class LoginAuthenticationService {
  username = "";
  accessType = "";
  match;
  constructor(public validationService: ValidationService, private router: Router) { }
  ngOnInit() { }
  /**
   * check whether loggedin user is admin or user and redirect as required
   * @param uname 
   * @param password 
   */
  isUserLoggedIn(uname, password) {
    console.log(uname);
    console.log(password);

    this.validationService.loginvalidation(uname, password).subscribe((res) => {
      if (res == "user") {
        sessionStorage.setItem("access", res);
        sessionStorage.setItem("username", uname);
        sessionStorage.setItem("match", "true");
        console.log("session...get.....", sessionStorage.getItem("username"));
        this.accessType = res;
        this.router.navigate(['ub']);
      }
      else if (res == "admin") {
        sessionStorage.setItem("access", res);
        sessionStorage.setItem("username", uname);
        sessionStorage.setItem("match", "true");
        this.accessType = res;
        console.log("session...get.....", sessionStorage.getItem("username"));
        this.router.navigate(['ab']);
      }

      else {
        console.log("Enter the right credentials");
        this.router.navigate(['error']);
        sessionStorage.setItem("inavlid credentials", "true");
      }
    });



  }
}
