import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginAuthenticationService } from '../app/services/login-authentication.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Routing to the error page in case a wrong url is entered,
 * activate admin and user pages only if user is logged in
*/
export class RouterGuardService {
match=sessionStorage.getItem("match");
  constructor(private loginAuthSevice:LoginAuthenticationService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    console.log("match is"+this.loginAuthSevice.match);
    if(this.match){
      return true;// match is used to activate the pages only if user is logged in
    }
    else if(!this.match)
    {
      this.router.navigate(['error']);  //redirect to error page to login again
    }
    else{
      return false;
    }
  }
}
