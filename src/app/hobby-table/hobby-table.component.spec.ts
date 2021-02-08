import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyTableComponent } from './hobby-table.component';

describe('HobbyTableComponent', () => {
  let component: HobbyTableComponent;
  let fixture: ComponentFixture<HobbyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
