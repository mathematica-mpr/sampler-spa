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

            const x = width * 0.15;
            const y = height * 0.33;

            const bbox = currentDiv.getBoundingClientRect();

            const tx = x - bbox.x;
            const ty = y - bbox.y;

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
