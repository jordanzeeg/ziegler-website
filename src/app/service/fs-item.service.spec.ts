import { TestBed } from '@angular/core/testing';

import { FsItemService } from './fs-item.service';

describe('FsItemService', () => {
  let service: FsItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
