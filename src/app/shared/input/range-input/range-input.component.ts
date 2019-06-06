import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BaseInput } from '../base-input';
import { ChapterInputService } from '../../../core/chapter-input.service';

@Component({
    selector: 'app-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent extends BaseInput implements OnInit, AfterContentInit {
    constructor(chapterInputService: ChapterInputService) {
        super(chapterInputService);
    }

    ngOnInit() {}

    ngAfterContentInit(): void {
        this.config$.subscribe(response => {
            this.config = response;
        });
    }
}
