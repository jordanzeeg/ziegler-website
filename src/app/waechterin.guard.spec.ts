import { TestBed } from '@angular/core/testing';
import { AuthorizeService } from './authorization/authorize.service';

import { WaechterinGuard } from './waechterin.guard';

describe('WaechterinGuard', () => {
  let guard: WaechterinGuard;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj<AuthorizeService>(['login']);
    guard = new WaechterinGuard(authServiceSpy);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
