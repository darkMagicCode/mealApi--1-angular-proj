import { TestBed } from '@angular/core/testing';

import { ApiMealService } from './api-meal.service';

describe('ApiMealService', () => {
  let service: ApiMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
