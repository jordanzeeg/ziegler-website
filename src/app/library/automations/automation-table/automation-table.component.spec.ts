import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationTableComponent } from './automation-table.component';

describe('AutomationTableComponent', () => {
  let component: AutomationTableComponent;
  let fixture: ComponentFixture<AutomationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
