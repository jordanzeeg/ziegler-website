import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspsComponent } from './msps.component';

describe('MspsComponent', () => {
  let component: MspsComponent;
  let fixture: ComponentFixture<MspsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
