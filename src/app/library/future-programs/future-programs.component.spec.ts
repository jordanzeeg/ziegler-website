import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProgramsComponent } from './future-programs.component';

describe('FutureProgramsComponent', () => {
  let component: FutureProgramsComponent;
  let fixture: ComponentFixture<FutureProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
