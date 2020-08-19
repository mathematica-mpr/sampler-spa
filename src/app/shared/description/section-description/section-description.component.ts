import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { BaseDescription } from '../base-description';
import { ChapterElement } from 'src/app/core/models/chapter';

@Component({
    selector: 'app-section-description',
    templateUrl: './section-description.component.html',
    styleUrls: ['./section-description.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SectionDescriptionComponent extends BaseDescription
    implements OnInit, AfterViewInit {
    currentContent = '';
    constructor() {
        super();
    }

    ngOnInit() {}

    ngAfterViewInit(): void {
        this.currentContent = this.currentContent = this.config.data[0].content;
    }

    showContent(name: string): void {
        console.log('click', name);
        this.currentContent = this.config.data.find(
            (x: ChapterElement) => x.name === name
        ).content;
    }
}
