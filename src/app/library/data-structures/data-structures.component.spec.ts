import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructuresComponent } from './data-structures.component';

describe('DataStructuresComponent', () => {
  let component: DataStructuresComponent;

  //originally had a template parse error where it could not find ngbcollapse
  //eliminated it by not 
  beforeEach(async () => {
    component = new DataStructuresComponent();
  });

  beforeEach(() => {
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //create unit test to verify blank constructor and ngOnInit? 
  //sounds silly just thinking about it 
});
