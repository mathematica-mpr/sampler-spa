import { Component, OnInit } from '@angular/core';
import { BaseGraph } from '../base-graph';

@Component({
    selector: 'app-line-graph',
    templateUrl: './line-graph.component.html',
    styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent extends BaseGraph implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {}
}
