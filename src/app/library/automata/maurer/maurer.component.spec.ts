import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaurerComponent } from './maurer.component';

describe('MaurerComponent', () => {
  let component: MaurerComponent;
  let fixture: ComponentFixture<MaurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaurerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
