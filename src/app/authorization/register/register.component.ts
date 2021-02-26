import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  email="";
  password="";
  message = '';
  authError: any;

  constructor(public auth: AuthorizeService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe(data =>{
      this.authError = data;
    })
  }
  createUser(email: string, password:string) {
    this.auth.createUser(email,password);
  }
}
