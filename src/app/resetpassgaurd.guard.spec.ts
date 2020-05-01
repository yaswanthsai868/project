import { TestBed, async, inject } from '@angular/core/testing';

import { ResetpassgaurdGuard } from './resetpassgaurd.guard';

describe('ResetpassgaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetpassgaurdGuard]
    });
  });

  it('should ...', inject([ResetpassgaurdGuard], (guard: ResetpassgaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
