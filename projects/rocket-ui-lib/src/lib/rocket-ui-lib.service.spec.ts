import { TestBed } from '@angular/core/testing';

import { RocketUiLibService } from './rocket-ui-lib.service';

describe('RocketUiLibService', () => {
  let service: RocketUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
