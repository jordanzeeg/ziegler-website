import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsTableComponent } from './snippets-table.component';

describe('SnippetsTableComponent', () => {
  let component: SnippetsTableComponent;
  let fixture: ComponentFixture<SnippetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnippetsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
