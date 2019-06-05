import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BaseInput } from '../base-input';
import { ChapterInputService } from '../../../core/chapter-input.service';

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent extends BaseInput implements OnInit, AfterContentInit {
    constructor(chapterInputService: ChapterInputService) {
        super(chapterInputService);
    }

    ngOnInit() {}

    ngAfterContentInit(): void {
        this.config$.subscribe(response => {
            this.config = response;
            console.log(this.config);
        });
    }
}
