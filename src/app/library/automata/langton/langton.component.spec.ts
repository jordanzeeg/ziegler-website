import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangtonComponent } from './langton.component';

describe('LangtonComponent', () => {
  let component: LangtonComponent;
  let fixture: ComponentFixture<LangtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
