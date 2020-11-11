import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
  public medecins;
  public pages;
  public page=0;
 public currentPage=0;
  public medId;
  public service;
  public medecin;
  public searchText;
  public p;
  constructor(private authServ:AdminService,private router:Router) { }

  ngOnInit(): void {
    if (this.authServ.getAdmin()==null) {
      this.router.navigate(['login']).then(() => {
        window.location.reload();});
    }
   this.getPages();
  }
  /**************** pagination coté serveur ***************************/
 /* getPages(){
    this.authServ.getMedecins(this.page).subscribe(data =>{
      this.medecins=data['content'];
      this.pages= new Array(data['totalPages'])
      console.log(data)
    },err=>{
      //this.authServ.logout();
      //this.router.navigateByUrl("login");
      console.log(err)

    })
  }*/

 /****************** paginationcoté client ****************************/
 getPages(){
   this.authServ.getMedecins(-1).subscribe(data=>{
     console.log(data)
     this.medecins=data;
   },err=>{
     console.log(err);
   })
 }

  setPage(i, event) {
    this.currentPage=i;
    event.preventDefault();
    this.page=i;
    this.getPages();
  }

  delete() {
    this.authServ.supp(this.medId).subscribe(data=>{
      this.getPages();
    },err=>{
      console.log(err)
    })

  }

  smsMedecin(id) {
    this.medId=id;
    this.getMedecinDetail()
  }

  update(id) {
    this.router.navigate(['update',id]);
  }

  getMedecinDetail(){
    this.authServ.getMedecin(this.medId).subscribe(data=>{
      this.medecin=data
    },err=>{
      console.log(err);
    })
  }
}
