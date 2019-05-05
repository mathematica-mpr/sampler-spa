import { Component, OnInit, Input } from '@angular/core';
import { Graph } from '../../../core/models/chapter';

@Component({
    selector: 'app-chapter-graphs',
    templateUrl: './chapter-graphs.component.html',
    styleUrls: ['./chapter-graphs.component.css']
})
export class ChapterGraphsComponent implements OnInit {
    @Input() graphs: Graph[];
    constructor() {}

    ngOnInit() {}
}
