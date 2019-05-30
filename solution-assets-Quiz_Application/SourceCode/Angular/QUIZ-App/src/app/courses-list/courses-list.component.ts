import { Component, OnInit } from '@angular/core';
import { users, UserService, Technologies } from '../services/user.service';
//Listing Out courses from table in user portal
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
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

  get(id, level): void {
    let val = id;
    console.log(val);
    console.log(level);
    this.UserService.get(id, level);
  };


}
