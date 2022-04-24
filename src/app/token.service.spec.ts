import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a token', () => {
    service.setToken("ALLO!")
    expect(service.getToken()).toBe("ALLO!");
  });

  it('should have an ID register', () => {
    service.setIdConnected(42)
    expect(service.getIdConnected()).toBe(42);
  });

});
