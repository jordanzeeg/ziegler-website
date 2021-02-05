import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweiteTableComponent } from './zweite-table.component';

describe('ZweiteTableComponent', () => {
  let component: ZweiteTableComponent;
  let fixture: ComponentFixture<ZweiteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZweiteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZweiteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
