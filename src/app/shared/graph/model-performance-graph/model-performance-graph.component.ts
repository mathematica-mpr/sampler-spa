import { Component, OnInit } from '@angular/core';
import { CompositeGraph } from '../composite-graph';
import { BehaviorSubject } from 'rxjs';
import { ChapterElement } from '../../../core/models/chapter';

@Component({
    selector: 'app-model-performance-graph',
    templateUrl: './model-performance-graph.component.html',
    styleUrls: ['./model-performance-graph.component.css']
})
export class ModelPerformanceGraphComponent extends CompositeGraph implements OnInit {
    graphs: BehaviorSubject<ChapterElement>[] = [];
    instantiated = false;

    constructor() {
        super();
    }

    ngOnInit() {
        // this.config$.subscribe(response => {
        //     if (!this.instantiated) {
        //         response.graphs.forEach(graph => {
        //             this.graphs.push(new BehaviorSubject(graph));
        //         });
        //         this.instantiated = true;
        //     } else {
        //         response.graphs.forEach((graph, i) => {
        //             this.graphs[i].next(graph);
        //         });
        //     }
        // });
    }
}
