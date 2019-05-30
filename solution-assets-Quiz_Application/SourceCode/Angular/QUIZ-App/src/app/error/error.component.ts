import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
/**redirect is performed to this component when error occurs */
export class ErrorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  redirectToLogin(){
    this.router.navigate(['login']);//when logged out user tries to access pages redirect back to login page
  }
}
