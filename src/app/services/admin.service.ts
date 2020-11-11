import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import { interval, Observable } from 'rxjs';
import { mapTo, startWith, map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public host="http://localhost:8888"
 // public host="http://192.168.99.100:30006"
  public jwtToken=null;
  public roles;
  public isConnected;
  quote: Observable<any>;

  constructor(private http:HttpClient) { }

  login(user) {
    return this.http.post(this.host+"/login",user,{observe:'response'});
  }
  getAdmin(){
    this.jwtToken=localStorage.getItem("token");
    let jwtHelper=new JwtHelper();
    return jwtHelper.decodeToken(this.jwtToken).sub
  }

  isAdmin(jwt){
    let jwtHelper=new JwtHelper();
    this.roles=jwtHelper.decodeToken(jwt).roles;
    for (let r of this.roles){
      if(r.authority=="ADMIN") return true;
      return false;
    }
  }
  loadToken(){
    this.jwtToken=localStorage.getItem("token");
  }

  saveToken(jwt) {
    localStorage.setItem('token',jwt);
  }
  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }

  getMedecins(page) {
    //if(this.jwtToken==null) this.loadToken();
    if(page==-1)return this.http.get(this.host+"/suivi-patient-service/medecinsPage",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    else return this.http.get(this.host+"/suivi-patient-service/medecins?page="+page,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  saveMedecin(medecin) {
    return this.http.post(this.host+'/suivi-patient-service/medecins',medecin,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  supp(id) {
    return this.http.delete(this.host+'/suivi-patient-service/medecins/'+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }

  getMedecin(id) {
   return this.http.get(this.host+'/suivi-patient-service/medecins/'+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  updateMedecin(medecin,id) {
    return this.http.put(this.host+'/suivi-patient-service/medecins/'+id,medecin,{headers:new HttpHeaders({'Authorization':this.jwtToken})});

  }

  changeMdp(change,username) {
    return this.http.post(this.host+'/change/'+username,change,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
 /* getServices(){
    //if(this.jwtToken==null) this.loadToken();

    return  interval(10000) // Setup the interval (emits every 5 seconds)
      .pipe(
        startWith(0),             // Starts immediatly
        mapTo(                    // Map to your request
          this.http.get(this.host+"/suivi-patient-service/services",{headers:new HttpHeaders({'Authorization':this.jwtToken})})
          //this.authServ.getServices()
        ),
        flatMap(v => v),          // Flatten result
        map(services => services.valueOf()) // Take the field you need
      );




  }*/
/************************************************* Service hospitaliare ***************/

  getServicesPage(page) {
                   // Map to your request
        return this.http.get(this.host+"/suivi-patient-service/services",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}




  suppService(id) {
    return this.http.delete(this.host+'/suivi-patient-service/services/'+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  getService(id) {
    return this.http.get(this.host+'/suivi-patient-service/services/'+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  saveService(service) {
    //if(service.chefservice!=null) this.triggerChef=1;
    return this.http.post(this.host+'/suivi-patient-service/services',service,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  updateService(service, id) {
    return this.http.put(this.host+'/suivi-patient-service/services/'+id,service,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getChefService(serId){
    return this.http.get(this.host+'/suivi-patient-service/chefService/'+serId,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}

/************************************************** patient ****************************************************/
getPatinets() {
  return this.http.get(this.host+'/suivi-patient-service/patients',{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}
  savePatient(patient){
    return this.http.post(this.host+"/suivi-patient-service/patients",patient,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getPatient(idPat) {
    return this.http.get(this.host+'/suivi-patient-service/patientchanel/'+idPat,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  updatePatient(patient,idPat) {
    return this.http.put(this.host+"/suivi-patient-service/patients/"+idPat,patient,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  getPatsParService(){
    return this.http.get(this.host+'/suivi-patient-service/patsParSer',{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
}
