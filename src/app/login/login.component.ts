import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mode;
  public roles;
  public erroMessage;
  constructor(public authService:AdminService,private router:Router) { }

  ngOnInit() {
    if (this.authService.getAdmin()!=null) {
      this.router.navigateByUrl("/medecins").then(() => {
        window.location.reload();
      });
    }
  }

  onLogin(user) {

    this.authService.login(user).subscribe(resp=>{
      let jwt = resp.headers.get("authorization");
      let jwtHelper=new JwtHelper();
      this.roles=jwtHelper.decodeToken(jwt).roles;

      for (let r of this.roles){
        if(r.authority=="ADMIN") {
          this.authService.saveToken(jwt);
          this.authService.isConnected=true;
          this.router.navigateByUrl("/medecins").then(() => {
            window.location.reload();
          });
        }
        else {
          this.mode=1
        }}


    },err=>{
     // console.log(err)
      this.mode=1;
     // this.erroMessage=err.error.message
    });


  }
}
