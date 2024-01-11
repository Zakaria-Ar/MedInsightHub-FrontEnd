import { TestBed } from '@angular/core/testing';

import { ConnectionRequestsService } from './connection-requests.service';

describe('ConnectionRequestsService', () => {
  let service: ConnectionRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
