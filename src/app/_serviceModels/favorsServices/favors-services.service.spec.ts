import { TestBed } from '@angular/core/testing';

import { FavorsServicesService } from './favors-services.service';

describe('FavorsServicesService', () => {
  let service: FavorsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
