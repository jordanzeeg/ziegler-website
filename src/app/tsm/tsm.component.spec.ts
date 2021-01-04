import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsmComponent } from './tsm.component';

describe('TsmComponent', () => {
  let component: TsmComponent;
  let fixture: ComponentFixture<TsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
