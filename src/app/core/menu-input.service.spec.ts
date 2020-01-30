import { TestBed, inject } from '@angular/core/testing';

import { MenuInputService } from './menu-input.service';

describe('ChapterInputService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MenuInputService]
        });
    });

    it('should be created', inject([MenuInputService], (service: MenuInputService) => {
        expect(service).toBeTruthy();
    }));
});
