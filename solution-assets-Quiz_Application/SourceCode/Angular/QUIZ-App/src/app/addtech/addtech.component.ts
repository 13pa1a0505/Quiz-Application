import { Component, OnInit } from '@angular/core';
import { Technologies, UserService } from '../services/user.service';
// Adding Technology to Technology list in admin page
@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {
  Technology: Technologies = new Technologies("", "");
  constructor(private UserService: UserService) { }

  ngOnInit() {

  }
  newtech(): void {
    this.UserService.newTech(this.Technology)
      .subscribe(data => {
        alert("Technology Added successfully.");
        location.reload();
      });
  };

}
