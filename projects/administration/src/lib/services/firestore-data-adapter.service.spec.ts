import { TestBed } from '@angular/core/testing';

import { FirestoreDataAdapterService } from './firestore-data-adapter.service';

describe('FirestoreDataAdapterService', () => {
  let service: FirestoreDataAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreDataAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
