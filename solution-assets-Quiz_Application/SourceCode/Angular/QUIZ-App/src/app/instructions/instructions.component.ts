import { Component, OnInit } from '@angular/core';
import { users, UserService, Technologies } from '../services/user.service';
//Istructions To start the test in user portal
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }
  get(id, level): void {
    let val = id;
    console.log(val);
    console.log(level);
    this.UserService.get(id, level);
  };

}
