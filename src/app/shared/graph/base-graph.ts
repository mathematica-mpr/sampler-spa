import { Input, Directive } from '@angular/core';
import { Graph } from '../../core/models/chapter';

@Directive()
export abstract class BaseGraph {
    @Input() config: Graph;
    constructor() {}

    abstract setCanvas();
    abstract addRemoveGraph();
    abstract updateGraphs();
}
