import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-change-mdp',
  templateUrl: './change-mdp.component.html',
  styleUrls: ['./change-mdp.component.css']
})
export class ChangeMdpComponent implements OnInit {

  public username;
  public mode;
  public messageError;
  constructor(private authSer:AdminService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  onChangeMdp(change) {
    this.username=this.route.snapshot.params.username;
    console.log(this.username)
     this.authSer.changeMdp(change,this.username).subscribe(resp=>{
       this.authSer.logout();
       this.router.navigateByUrl("/login");
     },err=>{
       console.log(err)
       this.mode=1;
       this.messageError=err.error.message
     });
  }
}
