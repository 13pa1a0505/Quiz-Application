import { Component, OnInit } from '@angular/core';
import { users,UserService } from '../services/user.service';
//User Profile Displaying
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users:users[];

  constructor(  private UserService:UserService) { }

  ngOnInit() {
    this.UserService.getProfile().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response)
{
    this.users=response;
}

}
