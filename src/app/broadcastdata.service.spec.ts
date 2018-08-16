import { TestBed, inject } from '@angular/core/testing';

import { BroadcastdataService } from './broadcastdata.service';

describe('BroadcastdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastdataService]
    });
  });

  it('should be created', inject([BroadcastdataService], (service: BroadcastdataService) => {
    expect(service).toBeTruthy();
  }));
});
