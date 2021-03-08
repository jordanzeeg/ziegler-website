import { TestBed } from '@angular/core/testing';

import { WaechterinGuard } from './waechterin.guard';

describe('WaechterinGuard', () => {
  let guard: WaechterinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WaechterinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
