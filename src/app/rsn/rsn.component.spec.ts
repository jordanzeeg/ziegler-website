import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsnComponent } from './rsn.component';

describe('RsnComponent', () => {
  let component: RsnComponent;
  let fixture: ComponentFixture<RsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
