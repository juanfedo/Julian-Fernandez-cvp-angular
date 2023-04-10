import { TestBed } from '@angular/core/testing';

import { GorestApiService } from './gorest-api.service';

describe('GorestApiService', () => {
  let service: GorestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GorestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
