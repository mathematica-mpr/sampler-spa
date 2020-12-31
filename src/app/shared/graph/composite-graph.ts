import { Graph } from '../../core/models/chapter';
import { Input, Directive } from '@angular/core';

@Directive()
export abstract class CompositeGraph {
    @Input() config: Graph;
}
