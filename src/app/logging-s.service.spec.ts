import { TestBed } from '@angular/core/testing';

import { LoggingSService } from './logging-s.service';

describe('LoggingSService', () => {
  let service: LoggingSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
