import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of} from 'rxjs';
import { RouterTestingModule} from '@angular/router/testing';
import { DataServiceService } from '../service/data-service.service';
import { AutomationsComponent } from './automations.component';

//these tests are structured differently to just test the typescript. no testing of templates, etc
//treats components like class
describe('AutomationsComponent', () => {
  let component: AutomationsComponent;

  beforeEach(async () => {
    
    //Router and DataService needed to be added to the default
    const routerSpy = jasmine.createSpyObj<Router>(['config']);
    //develop dataservicespy
    const dataServiceSpy = jasmine.createSpyObj<DataServiceService>(['getAutomations']);
    dataServiceSpy.getAutomations.and.returnValue((new DataServiceService().automations)); //works because automations is stored as object inside dataServiceService

    //create component like a class
    component = new AutomationsComponent(routerSpy,dataServiceSpy);
    component.ngOnInit();
  });

  beforeEach(() => {
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  //custom test built here following tutorial
  //didn't work because not understanding how we can do this without knowledge of dataserviceservice
  it('should have automations', () => {
    var length = new DataServiceService().getAutomations().length;
    expect(component.automationList.length).toBe(length);
  })

});
