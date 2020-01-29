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
                    const curr = this.graphs.find(x => x.name === graph.name);
                    if (!curr) {
                        this.graphs.push(graph);
                    } else {
                        this.addGraphItem(curr, graph);
                    }
                });
            },
            (error: Error) => {
                console.error(error);
            }
        );
    }

    updateGraph() {}

    removeGraph() {}

    addGraphItem(currParent: Graph, newParent: Graph) {
        if (newParent.graphs.length === 0) {
            newParent.graphItems.forEach(item => {
                let uniqueItem = currParent.graphItems.find(x => x.guid === item.guid);
                if (uniqueItem) {
                    uniqueItem = item;
                } else {
                    currParent.graphItems.push(item);
                }
            });
        } else {
            newParent.graphs.forEach(graph => {
                const currChild = currParent.graphs.find(x => x.name === graph.name);
                this.addGraphItem(currChild, graph);
            });
        }
    }
}
