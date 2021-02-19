import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBj5sLXvS8AjYwpe1I0yx_I3QryVnT3cSI",
    authDomain: "website-backend-75c1e.firebaseapp.com",
    projectId: "website-backend-75c1e",
    storageBucket: "website-backend-75c1e.appspot.com",
    messagingSenderId: "992797841145",
    appId: "1:992797841145:web:f56ed962ef180b6f267428",
    measurementId: "G-H32MJBT7XH"
  };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

  ]
})
export class AuthModuleModule { }
