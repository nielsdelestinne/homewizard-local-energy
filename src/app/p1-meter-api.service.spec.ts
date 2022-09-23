import { TestBed } from '@angular/core/testing';

import { P1MeterApiService } from './p1-meter-api.service';

describe('P1MeterApiService', () => {
  let service: P1MeterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P1MeterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
