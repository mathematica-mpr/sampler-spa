import { Injectable } from '@angular/core';
import { Dimension } from './models/dimension';
import * as d3 from 'd3';
import { Scales } from './models/scales';
import { Graph } from './models/chapter';

@Injectable({
    providedIn: 'root'
})
export class GraphService {
    config: Graph;
    wrapperName: string;
    wrapperDimensions: Dimension;
    margins: Dimension = { top: 2, right: 1, bottom: 2, left: 1 };
    innerDimensions: Dimension;
    scales: Scales = new Scales();

    constructor() {}

    setScales() {
        if (!this.scales.colorScale) {
            this.scales.colorScale = this.getColorScale();
        }
        this.scales.xScale = this.getXScale();
        this.scales.yScale = this.getYScale();
    }

    getXScale() {
        return d3
            .scaleLinear()
            .domain([this.getMin('X'), this.getMax('X')])
            .range([0, this.innerDimensions.width]);
    }

    getYScale() {
        return d3
            .scaleLinear()
            .domain([this.getMin('Y'), this.getMax('Y')])
            .range([this.innerDimensions.height, 0]);
    }

    getColorScale() {
        return d3
            .scaleOrdinal(['green', 'blue'])
            .domain(this.config.graphItems.map(x => x.guid));
    }

    getMin(axis: string): number {
        const minCallBack = (min, cur) => Math.min(min, cur);
        const minAxis: number = this.config.graphItems
            .flatMap(x => x.coordinates.map(y => y[axis]))
            .reduce(minCallBack, Infinity);
        return minAxis;
    }

    getMax(axis: string): number {
        const maxCallBack = (max, cur) => Math.max(max, cur);
        const maxAxis: number = this.config.graphItems
            .flatMap(x => x.coordinates.map(y => y[axis]))
            .reduce(maxCallBack, -Infinity);
        return maxAxis;
    }

    setDimensions(): void {
        this.wrapperName = '.graphs > * ' + '#' + this.config.name + this.config.order;
        this.wrapperDimensions = this.getDivDimension(this.wrapperName);
        this.innerDimensions = this.getInnerDimensions(this.wrapperDimensions);
    }

    getInnerDimensions(wrapperDimensions: Dimension): Dimension {
        const innerDimensions = new Dimension();
        innerDimensions.width =
            wrapperDimensions.width -
            (this.margins.left / wrapperDimensions.width) * 100 -
            (this.margins.right / wrapperDimensions.width) * 100;
        innerDimensions.height =
            wrapperDimensions.height -
            (this.margins.top / wrapperDimensions.height) * 100 -
            (this.margins.bottom / wrapperDimensions.height) * 100;
        return innerDimensions;
    }

    getDivDimension(className: string): Dimension {
        return d3
            .select(className)
            .node()
            .getBoundingClientRect();
    }
}
