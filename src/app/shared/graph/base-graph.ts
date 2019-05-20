import { Input, ElementRef } from '@angular/core';

export abstract class BaseGraph {
    @Input() config;

    constructor(private elementRef: ElementRef) {}

    abstract instantiateGraph();

    abstract getConfig();
}
