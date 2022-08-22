import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceService } from '../../service/data-service.service';

import { CompletionComponent } from './completion.component';

describe('CompletionComponent', () => {
  let component: CompletionComponent;
  

  beforeEach(async () => {
    const dataServiceSpy = jasmine.createSpyObj<DataServiceService>(['getCompletions']);
    dataServiceSpy.getCompletions.and.returnValue((new DataServiceService().getCompletions())); //works because automations is stored as object inside dataServiceService

    component = new CompletionComponent(dataServiceSpy);
    component.ngOnInit();
  });

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //there are other functions needed here
});
