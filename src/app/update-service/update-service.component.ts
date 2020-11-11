import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  public service;
  public errorMessage;
  public medecins;
  public medecins2;
  public id;
  public medecin;
  public trrigerChef= true;

  constructor(private authServ:AdminService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.authServ.getService(this.id).subscribe(data => {

      console.log(data)
      this.service = data;
      this.authServ.getChefService(this.service.id).subscribe(data => {

        this.medecin = data;
        console.log(this.service.id)
        console.log(this.medecin)
      }, err => {
        console.log(err);
      })

    }, err => {
      console.log(err);
    });

    this.authServ.getMedecins(-1).subscribe(data => {
      //console.log(data)
      this.medecins = data;
    }, err => {
      console.log(err);
    });

  }



  update(service) {
    console.log(service)
    this.authServ.updateService(service,this.id).subscribe(data=>{

      this.router.navigate(['/services']);
    },err=>{
      this.errorMessage=err.error.message
      console.log(err)
    })
  }
}
