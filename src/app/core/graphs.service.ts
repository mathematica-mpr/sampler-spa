import { Injectable } from '@angular/core';
import { Graph, GraphItem } from './models/chapter';
import { GraphResource } from './graph.resource';
import { SimulateParams } from './models/simulate-params';

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

    updateGraph(params: SimulateParams) {
        this.graphResource.updateGraph(params).subscribe((graphs: Graph[]) => {
            graphs.forEach((graph: Graph) => {
                const curr = this.graphs.find(x => x.name === graph.name);
                this.addGraphItem(curr, graph);
            });
        });
    }

    removeGraph(guid: string) {
        this.graphs.forEach((graph: Graph) => {
            this.removeGraphItem(graph, guid);
        });
    }

    removeGraphItem(graph: Graph, guid: string) {
        if (graph.graphs.length === 0) {
            const index: number = graph.graphItems.findIndex(
                (item: GraphItem) => item.guid === guid
            );
            graph.graphItems.splice(index, 1);
        } else {
            graph.graphs.forEach((g: Graph) => {
                this.removeGraphItem(g, guid);
            });
        }
    }

    addGraphItem(currParent: Graph, newParent: Graph) {
        if (newParent.graphs.length === 0) {
            newParent.graphItems.forEach(item => {
                const uniqueItem = currParent.graphItems.find(x => x.guid === item.guid);
                if (uniqueItem) {
                    Object.assign(uniqueItem, item);
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
