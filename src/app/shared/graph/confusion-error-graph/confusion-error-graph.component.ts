import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { CompositeGraph } from '../composite-graph';
import { ChapterElement } from '../../../core/models/chapter';
import * as d3 from 'd3';
import { ZoomService } from 'src/app/core/zoom.service';

@Component({
    selector: 'app-confusion-error-graph',
    templateUrl: './confusion-error-graph.component.html',
    styleUrls: ['./confusion-error-graph.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ConfusionErrorGraphComponent extends CompositeGraph implements OnInit {
    graphs: ChapterElement[] = [];
    instantiated = false;
    hoveredId = null;
    zoomedId = null;
    constructor(private elRef: ElementRef, private zoomService: ZoomService) {
        super();
    }

    ngOnInit() {
        if (!this.instantiated) {
            this.config.graphs.forEach(graph => {
                this.graphs.push(graph);
            });
            this.instantiated = true;
        } else {
            this.config.graphs.forEach((graph, i) => {
                this.graphs[i] = graph;
            });
        }
    }

    onClick(id: String) {
        // refactor into a function and do it for both graph and legend
        const currentDiv = this.elRef.nativeElement.querySelector('.graph.' + id);
        const overlay = this.elRef.nativeElement.querySelector('.overlay');

        if (this.zoomedId !== id) {
            this.zoomedId = id;
            this.zoomService.zoomIn(currentDiv);
            overlay.classList.add('zoomed');
        }
    }

    onClose() {
        const overlay = this.elRef.nativeElement.querySelector('.overlay.zoomed');
        const currentDiv = this.elRef.nativeElement.querySelector('.cell.zoomed');
        this.zoomService.zoomOut(currentDiv);
        overlay.classList.remove('zoomed');
    }

    onMouseover(id: string) {
        if (this.hoveredId !== id) {
            d3.selectAll('.legend').classed('active', false);
            d3.selectAll('#' + id).classed('active', true);
        }
    }
}
