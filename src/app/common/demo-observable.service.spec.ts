import { TestBed } from '@angular/core/testing';

import { DemoObservableService } from './demo-observable.service';

describe('DemoObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoObservableService = TestBed.get(DemoObservableService);
    expect(service).toBeTruthy();
  });
});
