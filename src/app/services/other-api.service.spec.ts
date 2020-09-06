import { TestBed } from '@angular/core/testing';

import { OtherApiService } from './other-api.service';

describe('OtherApiService', () => {
  let service: OtherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
