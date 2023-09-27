import { TestBed } from '@angular/core/testing';

import { DriversServiceService } from './drivers-service.service';

describe('DriversServiceService', () => {
  let service: DriversServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriversServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
