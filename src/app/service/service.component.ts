import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';
import { interval, Observable } from 'rxjs';
import { mapTo, startWith, map, flatMap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public searchText;
  //public services:Observable<any>;
  services;
  public service;
  public pages;
  public page=0;
  public currentPage=0;
  public serId;
  public medecins;
  public medecinsDetail;
  public p;


  constructor(private authServ:AdminService,private router:Router,private http:HttpClient) {


  }

  ngOnInit(){

    this.getPages();
    this.getMedecins();
  }

 getPages(){

    this.authServ.getServicesPage(this.page).subscribe(data =>{

      this.services=data;

    },err=>{
      //this.authServ.logout()
      //this.router.navigateByUrl("login");
      console.log(err)

    })

  }
/* getPages(){

this.services=this.authServ.getServices()
 }*/
  getMedecins(){
    this.authServ.getMedecins(-1).subscribe(data=>{
      this.medecins=data;
      this.medecinsDetail=data;
    },er=>{
      console.log(er)
    });
  }
  update(id) {
    this.router.navigate(['updateService',id]);
  }

  smsService(id) {
    this.serId=id;
    this.getServiceDetail();
  }

  delete() {
    this.authServ.suppService(this.serId).subscribe(data=>{
      this.getPages();
    },err=>{
      console.log(err)
    })

  }

  setPage(i, event) {
    this.currentPage=i;
    event.preventDefault();
    this.page=i;
    this.getPages();
  }


   getServiceDetail() {
     this.authServ.getService(this.serId).subscribe(data=>{
       this.service=data
     },err=>{
       console.log(err);
     })
  }

}
