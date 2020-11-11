import {Component, OnInit} from '@angular/core';
import {AdminService} from './services/admin.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'admin-front';
  public showHead = false;
  public services;
  constructor(private router: Router,public authSer:AdminService) {
    // on route change to '/login', set the variable showHead to false

  }

  ngOnInit() {
    if (this.authSer.getAdmin()==null) {
      this.showHead=false
    }else {this.showHead=true}
    /*this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });*/
    //this.getListServices();
  }

   /*getListServices() {
    this.authSer.getServices().subscribe(data=>{
      this.services=data
    },err=>{
      console.log(err)
    })

  }*/
  onLogout() {
    this.authSer.logout();
    this.router.navigateByUrl("login").then(() => {
      window.location.reload();
    });
  }

  onChange(username) {

    this.router.navigateByUrl("/changeMdp/"+username);

  }



}
