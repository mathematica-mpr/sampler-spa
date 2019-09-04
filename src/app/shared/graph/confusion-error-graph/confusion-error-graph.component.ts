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
    hoveredId = null;
    zoomedId = null;
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

    onClick(id: String) {
        if (this.zoomedId === id) {
            d3.select('#' + id)
                .style('z-index', '0')
                .transition()
                .duration(200)
                .style('transform', 'scale(1)translate(0%, 0%)');
        } else {
            console.log(window.innerWidth);
            const width = window.innerWidth;
            const height = window.innerHeight;

            const x = width * 0.15;
            const y = height * 0.33;

            const bbox = d3
                .select('#' + id)
                .node()
                .getBoundingClientRect();

            const tx = x - bbox.x;
            const ty = y - bbox.y;

            this.zoomedId = id;

            d3.select('#' + id)
                .style('transform-origin', '0 0')
                .style('z-index', '1000')
                .transition()
                .duration(200)
                .style('transform', `translate(${tx}px,${ty}px)scale(4)`);
        }
    }

    onMouseover(id: string) {
        if (this.hoveredId !== id) {
            d3.selectAll('.legend').classed('active', false);
            d3.selectAll('#' + id).classed('active', true);
        }
    }
}
