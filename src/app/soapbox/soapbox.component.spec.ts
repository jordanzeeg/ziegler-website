import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapboxComponent } from './soapbox.component';

describe('SoapboxComponent', () => {
  let component: SoapboxComponent;
  let fixture: ComponentFixture<SoapboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
