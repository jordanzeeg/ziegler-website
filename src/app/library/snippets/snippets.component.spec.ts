import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

import { SnippetsComponent } from './snippets.component';

describe('SnippetsComponent', () => {
  let component: SnippetsComponent;
  let fixture: ComponentFixture<SnippetsComponent>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj<Router>(['config']);
    //develop dataservicespy
    const dataServiceSpy = jasmine.createSpyObj<DataServiceService>(['getAutomations']);
    dataServiceSpy.getAutomations.and.returnValue((new DataServiceService().automations)); //works because automations is stored as object inside dataServiceService

    component = new SnippetsComponent(routerSpy,dataServiceSpy);
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //other functions need to be unit tested
  //ngOnInit()
  //updateErste(num)
});
