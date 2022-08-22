import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsteComponent } from './erste.component';

describe('ErsteComponent', () => {
  let component: ErsteComponent;
  let fixture: ComponentFixture<ErsteComponent>;

  beforeEach(async () => {
  });

  beforeEach(() => {
    component = new ErsteComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
