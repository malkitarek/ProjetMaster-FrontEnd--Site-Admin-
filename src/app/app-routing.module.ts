import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedecinComponent} from './medecin/medecin.component';
import {LoginComponent} from './login/login.component';
import {CreateMedecinComponent} from './create-medecin/create-medecin.component';
import {UdapteMedecinComponent} from './udapte-medecin/udapte-medecin.component';

import {AuthGuardService} from './services/auth-guard.service';
import {AppComponent} from './app.component';
import {AuthGuardInverseService} from './services/auth-guard-inverse.service';
import {ChangeMdpComponent} from './change-mdp/change-mdp.component';
import {ServiceComponent} from './service/service.component';
import {CreateServiceComponent} from './create-service/create-service.component';
import {UpdateServiceComponent} from './update-service/update-service.component';
import {PatientComponent} from './patient/patient.component';
import {CreatePatientComponent} from './create-patient/create-patient.component';
import {UpdatePatientComponent} from './update-patient/update-patient.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:"full",canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuardInverseService]},
 // {path:'login',component:LoginComponent},
  {path:'changeMdp/:username',component:ChangeMdpComponent,canActivate:[AuthGuardService]},
  {path:'medecins',component:MedecinComponent,canActivate:[AuthGuardService]},
  {path:'create',component:CreateMedecinComponent,canActivate:[AuthGuardService]},
  {path:'update/:id',component:UdapteMedecinComponent,canActivate:[AuthGuardService]},
  {path:'services',component:ServiceComponent,canActivate:[AuthGuardService]},
  {path:'createService',component:CreateServiceComponent,canActivate:[AuthGuardService]},
  {path:'updateService/:id',component:UpdateServiceComponent,canActivate:[AuthGuardService]},
  {path:'patients',component:PatientComponent,canActivate:[AuthGuardService]},
  {path:'createPatient',component:CreatePatientComponent,canActivate:[AuthGuardService]},
  {path:'updatePatient/:id',component:UpdatePatientComponent,canActivate:[AuthGuardService]},

  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
