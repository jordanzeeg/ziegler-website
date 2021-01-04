import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseReimbursementSystemComponent } from './expense-reimbursement-system.component';

describe('ExpenseReimbursementSystemComponent', () => {
  let component: ExpenseReimbursementSystemComponent;
  let fixture: ComponentFixture<ExpenseReimbursementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseReimbursementSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseReimbursementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
