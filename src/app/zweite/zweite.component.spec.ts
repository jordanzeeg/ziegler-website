import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweiteComponent } from './zweite.component';

describe('ZweiteComponent', () => {
  let component: ZweiteComponent;
  let fixture: ComponentFixture<ZweiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
