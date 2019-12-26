import { Input } from '@angular/core';
import { Graph } from '../../core/models/chapter';

export abstract class BaseGraph {
    @Input() config: Graph;
    constructor() {}

    abstract instantiateGraph();
    abstract updateGraph();
}
