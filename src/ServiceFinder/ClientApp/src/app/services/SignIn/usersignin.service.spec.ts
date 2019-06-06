import { TestBed, inject } from '@angular/core/testing';

import { UsersigninService } from './usersignin.service';

describe('UsersigninService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersigninService]
    });
  });

  it('should be created', inject([UsersigninService], (service: UsersigninService) => {
    expect(service).toBeTruthy();
  }));
});
