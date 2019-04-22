import { TestBed, inject } from '@angular/core/testing';
import { ComputeResource } from './compute.resource';

describe('ComputeResourcesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ComputeResource]
        });
    });

    it('should be created', inject([ComputeResource], (service: ComputeResource) => {
        expect(service).toBeTruthy();
    }));
});
