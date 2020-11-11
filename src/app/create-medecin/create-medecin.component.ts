import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-medecin',
  templateUrl: './create-medecin.component.html',
  styleUrls: ['./create-medecin.component.css']
})
export class CreateMedecinComponent implements OnInit {
  public medecin;
  public erroMessage;
  public mode;
  public services;

  constructor(private authServ:AdminService,private router:Router) { }

  ngOnInit(){
    this.authServ.getServicesPage(-1).subscribe(data=>{
      this.services=data;
    },err=>{
      console.log(err)
    });
  }

  add(medecin) {

    this.authServ.saveMedecin(medecin).subscribe(data=>{
      this.medecin=data;

      this.router.navigateByUrl("/medecins")
    },err=>{
      console.log(err)
      this.erroMessage=err.error.message;
      this.mode=1;
    });
  }
}
