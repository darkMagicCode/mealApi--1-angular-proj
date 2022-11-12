import { TestBed } from '@angular/core/testing';

import { IntgertionService } from './intgertion.service';

describe('IntgertionService', () => {
  let service: IntgertionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntgertionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
