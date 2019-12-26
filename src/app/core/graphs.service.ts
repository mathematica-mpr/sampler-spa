import { Injectable } from '@angular/core';
import { Graph } from './models/chapter';
import { GraphResource } from './graph.resource';

@Injectable()
export class GraphsService {
    graphs: Graph[] = [];

    constructor(private graphResource: GraphResource) {}

    addGraph(guid: string) {
        this.graphResource.getGraphs(guid).subscribe(
            (graphs: Graph[]) => {
                graphs.forEach((graph: Graph) => {
                    this.graphs.push(graph);
                });
            },
            (error: Error) => {
                console.error(error);
            }
        );
    }

    updateGraph() {}

    removeGraph() {}
}
