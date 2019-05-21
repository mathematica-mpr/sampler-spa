import { Input } from '@angular/core';
import { BaseChapterGraph } from '../../core/models/chapter';

export abstract class BaseGraph {
    @Input() config: BaseChapterGraph;

    constructor() {}

    abstract instantiateGraph();

    abstract getConfig();
}
