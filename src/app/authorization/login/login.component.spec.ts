import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizeService } from '../authorize.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;

  //authService router
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj<Router>(['config']);
    const authServiceSpy = jasmine.createSpyObj<AuthorizeService>(['login']);
    component = new LoginComponent(authServiceSpy, routerSpy);
    component.ngOnInit();
  });

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*for unit testing should expect to see tests for...
  * void clearErrorMessage()
  * void login()
  * boolean validateForm(email, password)
  */
});
