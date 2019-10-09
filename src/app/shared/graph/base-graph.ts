import { Input } from '@angular/core';
import { ChapterGraph } from '../../core/models/chapter';
import { BehaviorSubject } from 'rxjs';

export abstract class BaseGraph {
    @Input() config$: BehaviorSubject<ChapterGraph>;
    config: ChapterGraph;
    constructor() {}

    abstract instantiateGraph();
    abstract updateGraph();
}
