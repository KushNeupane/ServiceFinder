import { TestBed, inject } from '@angular/core/testing';

import { TwofactorauthenticationService } from './twofactorauthentication.service';

describe('TwofactorauthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwofactorauthenticationService]
    });
  });

  it('should be created', inject([TwofactorauthenticationService], (service: TwofactorauthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
