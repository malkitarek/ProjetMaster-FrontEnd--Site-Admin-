import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MedecinComponent } from './medecin/medecin.component';
import { CreateMedecinComponent } from './create-medecin/create-medecin.component';
import { UdapteMedecinComponent } from './udapte-medecin/udapte-medecin.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ChangeMdpComponent } from './change-mdp/change-mdp.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { ServiceComponent } from './service/service.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PatientComponent } from './patient/patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import {ChartsModule} from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedecinComponent,
    CreateMedecinComponent,
    UdapteMedecinComponent,
    ChangeMdpComponent,
    ServiceComponent,
    CreateServiceComponent,
    UpdateServiceComponent,
    PatientComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
