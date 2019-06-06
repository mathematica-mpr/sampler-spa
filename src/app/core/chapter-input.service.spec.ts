import { TestBed, inject } from '@angular/core/testing';

import { ChapterInputService } from './chapter-input.service';

describe('ChapterInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterInputService]
    });
  });

  it('should be created', inject([ChapterInputService], (service: ChapterInputService) => {
    expect(service).toBeTruthy();
  }));
});
