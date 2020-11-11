import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  public erroMessage;
  public medecins;
  public service;
  public mode;

  constructor(private authServ:AdminService, private router:Router) { }

  ngOnInit() {
    this.authServ.getMedecins(-1).subscribe(data=>{
      this.medecins=data;
    },err=>{
      console.log(err)
    });
  }

  add(service) {
    this.authServ.saveService(service).subscribe(data=>{
      this.service=data;

      this.router.navigateByUrl("/services")
    },err=>{
      console.log(err)
      this.erroMessage=err.error.message;
      this.mode=1;
    });
  }
}
