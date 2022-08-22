import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesPageComponent } from './hobbies-page.component';

describe('HobbiesPageComponent', () => {
  let component: HobbiesPageComponent;
  let fixture: ComponentFixture<HobbiesPageComponent>;

  beforeEach(async () => {

  });

  beforeEach(() => {
    component = new HobbiesPageComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //ngOnInit
  //canvasDrawing()
  //possibly reformat hobbies-page so that hobby isn't subclassed to a function
});
