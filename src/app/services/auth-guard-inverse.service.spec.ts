import { TestBed } from '@angular/core/testing';

import { AuthGuardInverseService } from './auth-guard-inverse.service';

describe('AuthGuardInverseService', () => {
  let service: AuthGuardInverseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardInverseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
