import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FsItemService } from '../../service/fs-item.service';

import { SoapboxFormComponent } from './soapbox-form.component';

describe('SoapboxFormComponent', () => {
  let component: SoapboxFormComponent;
  let fixture: ComponentFixture<SoapboxFormComponent>;

  beforeEach(async () => {
  });

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj<Router>(['config']);
    
    const itemServiceSpy = jasmine.createSpyObj<FsItemService>(['soapboxSubmit'])
    
    component = new SoapboxFormComponent(itemServiceSpy,routerSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //functions to unit test
  //ngOnInit
  //soapboxSubmit()
  //clearErrorMessage()
  //validateForm(title1,description1)

});
