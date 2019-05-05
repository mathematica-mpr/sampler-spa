import { Component, OnInit, Input } from '@angular/core';
import { ChapterDescription } from '../../../core/models/chapter';

@Component({
    selector: 'app-chapter-description',
    templateUrl: './chapter-description.component.html',
    styleUrls: ['./chapter-description.component.css']
})
export class ChapterDescriptionComponent implements OnInit {
    @Input() description: ChapterDescription;
    constructor() {}

    ngOnInit() {}
}
