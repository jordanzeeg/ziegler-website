import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthorizeService } from '../authorize.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach( () => {
    const routerSpy = jasmine.createSpyObj<Router>(['config']);
    //develop dataservicespy
    const authserviceSpy = jasmine.createSpyObj<AuthorizeService>(['createUser']);

    component = new RegisterComponent(authserviceSpy,routerSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //ngOnInit
  //clearErrorMessage()
  //register()
  //validateForm(email, password): boolean
  
});
