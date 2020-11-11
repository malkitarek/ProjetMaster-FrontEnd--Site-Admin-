import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AdminService} from './admin.service';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authServ:AdminService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authServ.loadToken();
    if (tokenNotExpired("token",this.authServ.jwtToken)) {
     // console.log("rrr")
      return true;
    } else {
      this.router.navigateByUrl("login")
      return false;
    }
  }
}
