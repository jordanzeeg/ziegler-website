import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapboxFormComponent } from './soapbox-form.component';

describe('SoapboxFormComponent', () => {
  let component: SoapboxFormComponent;
  let fixture: ComponentFixture<SoapboxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapboxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
