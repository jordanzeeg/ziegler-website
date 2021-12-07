import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsWorkspaceComponent } from './threejs-workspace.component';

describe('ThreejsWorkspaceComponent', () => {
  let component: ThreejsWorkspaceComponent;
  let fixture: ComponentFixture<ThreejsWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreejsWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
