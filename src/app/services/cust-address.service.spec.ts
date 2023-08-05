import { TestBed } from '@angular/core/testing';

import { CustAddressService } from './cust-address.service';

describe('CustAddressService', () => {
  let service: CustAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
