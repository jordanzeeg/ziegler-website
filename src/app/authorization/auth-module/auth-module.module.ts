import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from'@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from 'src/app/submissions/dashboard/dashboard.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule
  ]
})
export class AuthModuleModule { }
