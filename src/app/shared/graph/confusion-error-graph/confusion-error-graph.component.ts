import { Component, OnInit } from '@angular/core';
import { CompositeGraph } from '../composite-graph';
import { BehaviorSubject } from 'rxjs';
import { ChapterElement } from '../../../core/models/chapter';
import * as d3 from 'd3';

@Component({
    selector: 'app-confusion-error-graph',
    templateUrl: './confusion-error-graph.component.html',
    styleUrls: ['./confusion-error-graph.component.css']
})
export class ConfusionErrorGraphComponent extends CompositeGraph implements OnInit {
    graphs: BehaviorSubject<ChapterElement>[] = [];
    instantiated = false;
    currentId = null;
    constructor() {
        super();
    }

    ngOnInit() {
        this.config$.subscribe(response => {
            if (!this.instantiated) {
                response.graphs.forEach(graph => {
                    this.graphs.push(new BehaviorSubject(graph));
                });
                this.instantiated = true;
            } else {
                response.graphs.forEach((graph, i) => {
                    this.graphs[i].next(graph);
                });
            }
        });
    }

    onMouseover(id: string) {
        if (this.currentId !== id) {
            d3.selectAll('.legend').classed('active', false);
            d3.selectAll('#' + id).classed('active', true);
        }
    }
}
