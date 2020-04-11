import { TestBed } from '@angular/core/testing';

import { AutherizationService } from './autherization.service';

describe('AutherizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutherizationService = TestBed.get(AutherizationService);
    expect(service).toBeTruthy();
  });
});
