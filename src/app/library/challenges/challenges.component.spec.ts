import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FsItemService } from '../../service/fs-item.service';
import { DataServiceService } from '../service/data-service.service';

import { ChallengesComponent } from './challenges.component';

describe('ChallengesComponent', () => {
  let component: ChallengesComponent;
  let fixture: ComponentFixture<ChallengesComponent>;

  beforeEach(async () => {
  });

  beforeEach(() => {
    const itemServiceSpy = jasmine.createSpyObj<FsItemService>(['getChallenges'])
    const routerSpy = jasmine.createSpyObj<Router>(['config'])
    const dataServiceSpy= jasmine.createSpyObj<DataServiceService>(['getChallenges'])
    component = new ChallengesComponent(itemServiceSpy,routerSpy,dataServiceSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //ngOnInit()
  //updateErste
});
