import { Component, OnInit, ElementRef } from '@angular/core';
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
    constructor(private elRef: ElementRef) {
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
        const currentDiv = this.elRef.nativeElement.querySelector('#' + id);

        if (this.zoomedId === id) {
            currentDiv.classList.remove('zoomed');
        } else {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const bbox = currentDiv.getBoundingClientRect();
            const xDenom: number = width < height ? 4 : 3;
            const yDenom: number = width < height ? 3 : 4;
            const tx = (width - bbox.width * 2) / xDenom - bbox.x;
            const ty = (height - bbox.height * 2) / yDenom - bbox.y;

            console.log(width, bbox.width, bbox.x, tx);

            this.zoomedId = id;
            currentDiv.classList.add('zoomed');
            currentDiv.style.setProperty('--x', tx + 'px');
            currentDiv.style.setProperty('--y', ty + 'px');
        }
    }

    onMouseover(id: string) {
        if (this.hoveredId !== id) {
            d3.selectAll('.legend').classed('active', false);
            d3.selectAll('#' + id).classed('active', true);
        }
    }
}
