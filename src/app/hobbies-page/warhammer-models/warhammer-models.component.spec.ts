import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarhammerModelsComponent } from './warhammer-models.component';

describe('WarhammerModelsComponent', () => {
  let component: WarhammerModelsComponent;
  let fixture: ComponentFixture<WarhammerModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarhammerModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarhammerModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
