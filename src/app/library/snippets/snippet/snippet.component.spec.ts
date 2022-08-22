import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceService } from '../../service/data-service.service';

import { SnippetComponent } from './snippet.component';

describe('SnippetComponent', () => {
  let component: SnippetComponent;
  let fixture: ComponentFixture<SnippetComponent>;

  beforeEach(async () => {

  });

  beforeEach(() => {
    const dataServiceSpy = jasmine.createSpyObj<DataServiceService>(['getAutomations']);
    dataServiceSpy.getAutomations.and.returnValue((new DataServiceService().automations)); //works because automations is stored as object inside dataServiceService

    component = new SnippetComponent(dataServiceSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
