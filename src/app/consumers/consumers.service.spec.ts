import { TestBed } from '@angular/core/testing';

import { ConsumersService } from './consumers.service';

describe('ConsumersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumersService = TestBed.get(ConsumersService);
    expect(service).toBeTruthy();
  });
});
