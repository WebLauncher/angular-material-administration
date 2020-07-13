import { TestBed } from '@angular/core/testing';

import { HttpDataAdapterService } from './http-data-adapter.service';

describe('HttpDataAdapterService', () => {
  let service: HttpDataAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDataAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
