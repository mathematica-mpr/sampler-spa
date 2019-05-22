import { Input } from '@angular/core';
import { ChapterGraph, ChapterElement } from '../../core/models/chapter';
import { BehaviorSubject } from 'rxjs';

export abstract class BaseGraph {
    @Input() config$: BehaviorSubject<ChapterGraph>;
    config;
    constructor() {}

    abstract instantiateGraph();

    abstract getConfig();
}
