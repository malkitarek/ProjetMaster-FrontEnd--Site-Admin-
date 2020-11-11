import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients;
  p;
  searchText;
  idPat;
  constructor(private authSer:AdminService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.authSer.getPatinets().subscribe(data=>{
      this.patients=data;
    });
  }
  update(id) {

  }

  smsPat(id) {
   this.idPat=id;
  }

  delete() {

  }

}
