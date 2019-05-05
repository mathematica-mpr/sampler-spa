import { Component, OnInit, Input } from '@angular/core';
import { ChapterInput } from '../../../core/models/chapter';

@Component({
    selector: 'app-chapter-inputs',
    templateUrl: './chapter-inputs.component.html',
    styleUrls: ['./chapter-inputs.component.css']
})
export class ChapterInputsComponent implements OnInit {
    @Input() inputs: ChapterInput[];
    constructor() {}

    ngOnInit() {}
}
