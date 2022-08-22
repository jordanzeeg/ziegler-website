import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FsItemService } from '../service/fs-item.service';
import {of } from 'rxjs';
import { ProgramsComponent } from './programs.component';

describe('ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;

  beforeEach(async () => {

    //create service test object using <ServiceName> 
    const ItemServiceSpy = jasmine.createSpyObj<FsItemService>(['getItems']);

    //getItems returns an observable so we do this and.returnValue thing for.. reasons
    // of([]) is a value that's basically an empty observable. of is an rxjs keyword imported above
    //not sure what of does
    ItemServiceSpy.getItems.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ ProgramsComponent ],
      providers: [{provide: FsItemService,useValue: ItemServiceSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
