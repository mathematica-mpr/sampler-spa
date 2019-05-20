import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { BaseGraph } from '../base-graph';

@Component({
    selector: 'app-line-graph',
    templateUrl: './line-graph.component.html',
    styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent extends BaseGraph implements OnInit {
    constructor(elementRef: ElementRef) {
        super(elementRef);
    }

    ngOnInit() {}

    instantiateGraph() {}

    getConfig() {}
}
