import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapboxDatalessComponent } from './soapbox-dataless.component';

describe('SoapboxDatalessComponent', () => {
  let component: SoapboxDatalessComponent;
  let fixture: ComponentFixture<SoapboxDatalessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapboxDatalessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapboxDatalessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
