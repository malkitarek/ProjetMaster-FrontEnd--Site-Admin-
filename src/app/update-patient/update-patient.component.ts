import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
    patient;
    erroMessage;

  constructor(private authSer:AdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(){
    this.authSer.getPatient(this.route.snapshot.params['id']).subscribe(data=>{
      this.patient=data;
      console.log(this.patient)
    })
  }
  update(patient) {
    this.authSer.updatePatient(patient,this.route.snapshot.params['id']).subscribe(data=>{
      this.router.navigateByUrl('/patients')
    },err=>{
      this.erroMessage=err.error.message
    })
  }
}
