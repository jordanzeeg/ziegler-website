import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AuthorizeService } from './authorize.service';

describe('AuthorizeService', () => {
  let service: AuthorizeService;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj<Router>(['config']);
    const afAuthSpy = jasmine.createSpyObj<AngularFireAuth>(['signInWithEmailAndPassword','createUserWithEmailAndPassword','signOut'],);
    
    //dataServiceSpy.getAutomations.and.returnValue((new DataServiceService().automations)); //works because automations is stored as object inside dataServiceService
    service = new AuthorizeService(afAuthSpy,routerSpy)
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  //not really sure what i'm doing here with a service
});
