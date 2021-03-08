import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  authState: any = null;
  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) {
      this.afAuth.authState.subscribe((auth => {
        this.authState =auth;
      }))
     }

  getUserState() {
    if(this.afAuth.authState)
    {
      return this.afAuth.authState;
    }
    else return null;
  }

  login( email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(user => {
        if(user) {
          this.authState = user
          this.router.navigate(['/dashboard']);
        }
      })
  }

  createUser(email: string,password: string) {
    console.log();
    return this.afAuth.createUserWithEmailAndPassword( email,password)
      .then( user => {
        this.authState = user;
        this.router.navigate(['\dashboard']);
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  logout() {
    this.router.navigate(['/login']);
    this.authState = null;
    return this.afAuth.signOut();
    
  }
}