import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FsItemService } from '../service/fs-item.service';

import { SoapboxComponent } from './soapbox.component';

describe('SoapboxComponent', () => {
  let component: SoapboxComponent;
  let fixture: ComponentFixture<SoapboxComponent>;

  beforeEach(async () => {

  });

  beforeEach(() => {
    const itemServiceSpy = jasmine.createSpyObj<FsItemService>(['getSoapboxes'])
    component = new SoapboxComponent(itemServiceSpy)
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //ngOnInit
});
