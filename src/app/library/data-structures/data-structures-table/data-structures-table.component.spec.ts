import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructuresTableComponent } from './data-structures-table.component';

describe('DataStructuresTableComponent', () => {
  let component: DataStructuresTableComponent;
  let fixture: ComponentFixture<DataStructuresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStructuresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStructuresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
