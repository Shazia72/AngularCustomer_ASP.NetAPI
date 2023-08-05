import { TestBed } from '@angular/core/testing';

import { EmployeeRestApiService } from './employee-rest-api.service';

describe('EmployeeRestApiService', () => {
  let service: EmployeeRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
