import { Component, OnInit } from '@angular/core';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 patients;
 medecins;
 services;
 nomsServices;
 nbrMed;
 nbrPat;
 ser;

  constructor(private authSer:AdminService) { }

  public Options1 = {
   scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{id: 'y-axis-1', ticks: {min: 0}}]
    }
  };
  public Labels1 = [];
  public Labels2= [];
  public Type = 'bar';
  public Legend1 = true;
  public Data1 = [
    {data: [], label: 'Medecins'},

  ];
  public Data2 = [
    {data: [], label: 'Patients'},

  ];

  public colours2 = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  public colours:[{
    backgroundColor:"#F00",
    hoverBackgroundColor:"#FF0",
    borderColor:"#0F0",
    hoverBorderColor:"#00F"
  }];



  ngOnInit(): void {
    //this.getMedecins();
    this.getPatients();
    this.getServices();
    this.getPatsParSer();
  }
  getPatients(){
    this.authSer.getPatinets().subscribe(data=>{
      this.patients=data;

    })
  }

  getServices(){
    this.authSer.getServicesPage(-1).subscribe(data=>{
      this.services=data;

      this.authSer.getMedecins(-1).subscribe(data=>{
       console.log(data)
        this.medecins=data;
        this.nomsServices=[]
        this.nbrMed=[]
        for(let i=0;i<this.services.length;i++){
          this.nomsServices.push(this.services[i].nom)
          let x=0;
          for(let j=0;j<this.medecins.length;j++){
            if(this.medecins[j].service.nom==this.services[i].nom){
              x=x+1;
            }
          }
          this.nbrMed.push(x);
        }
        this.Data1[0].data=this.nbrMed;
        this.Labels1=this.nomsServices;
      })

    })
  }
  getPatsParSer(){
    this.authSer.getPatsParService().subscribe(data=>{
      console.log(data)
      this.ser=data;
      this.nomsServices=[];
      this.nbrPat=[];
      for(let i=0;i<this.ser.length;i++){
        this.nomsServices.push(this.ser[i].nomService);
        this.nbrPat.push(this.ser[i].nbrPats);
      }
      this.Data2[0].data=this.nbrPat;
      this.Labels2=this.nomsServices;
    })
  }
}
