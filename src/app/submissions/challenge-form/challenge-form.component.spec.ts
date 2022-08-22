import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FsItemService } from '../../service/fs-item.service';

import { ChallengeFormComponent } from './challenge-form.component';

describe('ChallengeFormComponent', () => {
  let component: ChallengeFormComponent;
  let fixture: ComponentFixture<ChallengeFormComponent>;

  beforeEach(async () => {
  });

  beforeEach(() => {
    const itemServiceSpy = jasmine.createSpyObj<FsItemService>(['challengeSubmit'])
    const routerSpy = jasmine.createSpyObj<Router>(['config'])
    component = new ChallengeFormComponent(itemServiceSpy,routerSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //ngOnInit
  //challengeSubmit()
  //validateForm()
  //clearErrorMessage()
});
