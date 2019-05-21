import { Component, OnInit } from '@angular/core';
import { BaseGraph } from '../base-graph';

@Component({
    selector: 'app-confusion-error-graph',
    templateUrl: './confusion-error-graph.component.html',
    styleUrls: ['./confusion-error-graph.component.css']
})
export class ConfusionErrorGraphComponent extends BaseGraph implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {}

    instantiateGraph() {}

    getConfig() {}
}
