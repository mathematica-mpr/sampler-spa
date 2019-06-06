import { Injectable } from '@angular/core';
import { Dimension } from './models/dimension';
import * as d3 from 'd3';

@Injectable({
    providedIn: 'root'
})
export class GraphService {
    constructor() {}

    getDimension(className: string): Dimension {
        return d3
            .select(className)
            .node()
            .getBoundingClientRect();
    }

    getXscale(domain: [number, number], range: [number, number]) {
        return d3
            .scaleLinear()
            .domain(domain)
            .range(range);
    }

    getYScale(domain: [number, number], range: [number, number]) {
        return d3
            .scaleLinear()
            .domain(domain)
            .range(range);
    }
}
