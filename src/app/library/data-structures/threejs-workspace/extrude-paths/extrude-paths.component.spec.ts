import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrudePathsComponent } from './extrude-paths.component';

describe('ExtrudePathsComponent', () => {
  let component: ExtrudePathsComponent;
  let fixture: ComponentFixture<ExtrudePathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrudePathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrudePathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
