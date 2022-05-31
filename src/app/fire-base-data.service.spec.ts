import { TestBed } from '@angular/core/testing';

import { FireBaseDataService } from './fire-base-data.service';

describe('FireBaseDataService', () => {
  let service: FireBaseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
