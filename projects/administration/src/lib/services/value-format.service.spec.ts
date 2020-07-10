import { TestBed } from '@angular/core/testing';

import { ValueFormatService } from './value-format.service';

describe('ValueFormatService', () => {
  let service: ValueFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
