import { Component, OnInit } from '@angular/core';
import { users, UserService, Technologies } from '../services/user.service';
//Deleting technology from technology table in admin portal.
@Component({
  selector: 'app-deltech',
  templateUrl: './deltech.component.html',
  styleUrls: ['./deltech.component.css']
})
export class DeltechComponent implements OnInit {
  technologies: Technologies[];
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.UserService.getTrackTechs().subscribe(
      response => this.handleSuccessfulResponse(response),
  );
  }
  handleSuccessfulResponse(response) {
    this.technologies = response;
  }
  Del(id): void {
    this.UserService.Del(id)
      .subscribe(data => {
        location.reload();
      })
  };
}
