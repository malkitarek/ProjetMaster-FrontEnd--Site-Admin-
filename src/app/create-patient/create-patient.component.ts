import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  erroMessage;

  constructor(private authSer:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  add(patient) {
   this.authSer.savePatient(patient).subscribe(data=>{
    this.router.navigateByUrl("/patients")
   },err=>{
     this.erroMessage=err.error.message;
   })
  }
}
