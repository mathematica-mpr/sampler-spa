import { TestBed, inject } from '@angular/core/testing';

import { ChapterService } from './chapter.service';

describe('ChapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterService]
    });
  });

  it('should be created', inject([ChapterService], (service: ChapterService) => {
    expect(service).toBeTruthy();
  }));
});
