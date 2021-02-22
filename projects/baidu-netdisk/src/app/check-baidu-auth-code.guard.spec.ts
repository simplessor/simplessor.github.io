import { TestBed } from '@angular/core/testing';

import { CheckBaiduAuthCodeGuard } from './check-baidu-auth-code.guard';

describe('CheckBaiduAuthCodeGuard', () => {
  let guard: CheckBaiduAuthCodeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckBaiduAuthCodeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
