import { Component, OnInit } from '@angular/core';
import { CompositeGraph } from '../composite-graph';

@Component({
    selector: 'app-confusion-error-graph',
    templateUrl: './confusion-error-graph.component.html',
    styleUrls: ['./confusion-error-graph.component.css']
})
export class ConfusionErrorGraphComponent extends CompositeGraph implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {}
}
