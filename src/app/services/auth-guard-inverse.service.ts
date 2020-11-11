import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AdminService} from './admin.service';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardInverseService implements CanActivate{

  constructor(private authServ:AdminService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!tokenNotExpired('token', this.authServ.jwtToken)) {
      return true;
    } else {
      this.router.navigateByUrl("/medecins");
      return false;
    }
  }
}
