import { TestBed } from '@angular/core/testing';

import { ConnectGuardGuard } from './connect-guard.guard';

describe('ConnectGuardGuard', () => {
  let guard: ConnectGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConnectGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
