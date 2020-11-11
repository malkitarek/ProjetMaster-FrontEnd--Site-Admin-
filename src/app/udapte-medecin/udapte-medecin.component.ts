import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-udapte-medecin',
  templateUrl: './udapte-medecin.component.html',
  styleUrls: ['./udapte-medecin.component.css']
})
export class UdapteMedecinComponent implements OnInit {
  public medecin;
  public id;
  public errorMessage;
  public services;
  constructor(private route:ActivatedRoute,private authServ:AdminService,private router:Router) { }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.authServ.getMedecin(this.id).subscribe(data=>{
      console.log(data)
      this.medecin=data;
    },err=>{
      console.log(err);
    });

    this.authServ.getServicesPage(-1).subscribe(data=>{
     // console.log(data)
      this.services=data;
    },err=>{
      console.log(err);
    })

  }

  update(medecin) {
    //console.log(medecin);
    this.authServ.updateMedecin(medecin,this.id).subscribe(data=>{

      this.router.navigate(['/medecins']);
    },err=>{
      this.errorMessage=err.error.message
      console.log(err)
    })
  }

  updatedate(event) {

    this.medecin.dateNaissance = new Date(event);
  }
}
