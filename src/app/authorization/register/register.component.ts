import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  authError: any;

  constructor(public auth: AuthorizeService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe(data =>{
      this.authError = data;
    })
  }
  createUser(frm) {
    this.auth.createUser(frm.value);
  }
}
