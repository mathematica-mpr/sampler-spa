import { TestBed, inject } from '@angular/core/testing';

import { ZoomService } from './zoom.service';

describe('ZoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZoomService]
    });
  });

  it('should be created', inject([ZoomService], (service: ZoomService) => {
    expect(service).toBeTruthy();
  }));
});
