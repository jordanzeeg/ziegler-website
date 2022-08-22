import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceService } from '../../service/data-service.service';

import { AutomationComponent } from './automation.component';

describe('AutomationComponent', () => {
  let component: AutomationComponent;
  let fixture: ComponentFixture<AutomationComponent>;

  beforeEach(async () => {
  });

  beforeEach(() => {
    const dataServiceSpy = jasmine.createSpyObj<DataServiceService>(['getAutomations'])
    component = new AutomationComponent(dataServiceSpy)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
