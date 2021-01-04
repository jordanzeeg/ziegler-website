import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsteComponent } from './erste.component';

describe('ErsteComponent', () => {
  let component: ErsteComponent;
  let fixture: ComponentFixture<ErsteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErsteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErsteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
