import { Component, OnInit } from '@angular/core';
import { UserService, users,RegisterDetails } from '../services/user.service';

//Registration of new user.
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: users = new users("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  registration:RegisterDetails[];
  registrationList = JSON.parse(localStorage.getItem("register")); 
  
  constructor(
    private UserService: UserService
  ) { }

  ngOnInit( ) {
    this.UserService. getRegistrationFields().subscribe(
      response => this.handleSuccessfulTechResponse(response),
      );  
  }

  handleSuccessfulTechResponse(response) {
    this.registration= response;
    console.log(this.registration);
    localStorage.setItem("register", JSON.stringify(this.registration));
    }  

   

  createUser(gen,sq): void {
    let val=gen;
    console.log(val);
    console.log(this.user);
    this.UserService.createUser(this.user,gen,sq)
      .subscribe(data => {
        alert("user registered successfully.");
        location.reload();
      });

  };

}
