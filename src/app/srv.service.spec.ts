import { TestBed } from '@angular/core/testing';

import { SrvService } from './srv.service';

describe('SrvService', () => {
  let service: SrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
