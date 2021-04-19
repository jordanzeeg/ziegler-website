import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsteChallengeComponent } from './erste-challenge.component';

describe('ErsteChallengeComponent', () => {
  let component: ErsteChallengeComponent;
  let fixture: ComponentFixture<ErsteChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErsteChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErsteChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
