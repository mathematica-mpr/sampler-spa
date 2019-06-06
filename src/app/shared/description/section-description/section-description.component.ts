import { Component, OnInit } from '@angular/core';
import { BaseDescription } from '../base-description';

@Component({
    selector: 'app-section-description',
    templateUrl: './section-description.component.html',
    styleUrls: ['./section-description.component.css']
})
export class SectionDescriptionComponent extends BaseDescription implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
        this.config$.subscribe(response => {
            this.config = response;
        });
    }
}
