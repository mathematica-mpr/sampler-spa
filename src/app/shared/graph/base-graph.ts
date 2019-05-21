import { Input, ElementRef } from '@angular/core';
import { ChapterElement } from '../../core/models/chapter';

export abstract class BaseGraph {
    @Input() config: ChapterElement;

    constructor() {}

    abstract instantiateGraph();

    abstract getConfig();
}
