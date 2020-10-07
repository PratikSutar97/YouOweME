import { TestBed } from '@angular/core/testing';

import { RequestsServicesService } from './requests-services.service';

describe('RequestsServicesService', () => {
  let service: RequestsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
