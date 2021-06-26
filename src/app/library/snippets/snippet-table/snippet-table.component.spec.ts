import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetTableComponent } from './snippet-table.component';

describe('SnippetTableComponent', () => {
  let component: SnippetTableComponent;
  let fixture: ComponentFixture<SnippetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnippetTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
