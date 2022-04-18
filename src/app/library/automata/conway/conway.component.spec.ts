import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwayComponent } from './conway.component';

describe('ConwayComponent', () => {
  let component: ConwayComponent;
  let fixture: ComponentFixture<ConwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
