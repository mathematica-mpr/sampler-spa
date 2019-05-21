import { Input } from '@angular/core';
import { ChapterGraph } from '../../core/models/chapter';

export abstract class BaseGraph {
    @Input() config: ChapterGraph;

    constructor() {}

    abstract instantiateGraph();

    abstract getConfig();
}
