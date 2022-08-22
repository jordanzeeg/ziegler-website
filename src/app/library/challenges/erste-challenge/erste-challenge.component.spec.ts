import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataServiceService } from '../../service/data-service.service';

import { ErsteChallengeComponent } from './erste-challenge.component';

describe('ErsteChallengeComponent', () => {
  let component: ErsteChallengeComponent;
  let fixture: ComponentFixture<ErsteChallengeComponent>;

  beforeEach(async () => {
  });

  beforeEach(() => {
    const dataServiceSpy = jasmine.createSpyObj<DataServiceService>(['getChallenges'])
    dataServiceSpy.getChallenges.and.returnValue( (new DataServiceService()).getChallenges())
    component = new ErsteChallengeComponent(dataServiceSpy)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
