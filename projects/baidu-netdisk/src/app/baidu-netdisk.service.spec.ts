import { TestBed } from '@angular/core/testing';

import { BaiduNetdiskService } from './baidu-netdisk.service';

describe('BaiduNetdiskService', () => {
  let service: BaiduNetdiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaiduNetdiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
