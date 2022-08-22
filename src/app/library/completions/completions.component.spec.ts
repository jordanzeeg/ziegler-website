import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FsItemService } from '../../service/fs-item.service';
import { DataServiceService } from '../service/data-service.service';

import { CompletionsComponent } from './completions.component';

describe('CompletionsComponent', () => {
  let component: CompletionsComponent;
  let fixture: ComponentFixture<CompletionsComponent>;

  beforeEach(async () => {
    
  });

  beforeEach(() => {
    const itemServiceSpy = jasmine.createSpyObj<FsItemService>(['getChallenges'])
    
    const routerSpy = jasmine.createSpyObj<Router>(['config'])
    const dataServiceSpy = jasmine.createSpyObj<DataServiceService>(['getCompletions']);
    dataServiceSpy.getCompletions.and.returnValue((new DataServiceService().getCompletions())); //works because automations is stored as object inside dataServiceService

    component = new CompletionsComponent(itemServiceSpy,routerSpy,dataServiceSpy)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //ngOnInit
  //updateErste(num)
});
