import { TestBed } from '@angular/core/testing';

import { MaterialAdministrationService } from './material-administration.service';

describe('MaterialAdministrationService', () => {
  let service: MaterialAdministrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialAdministrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
