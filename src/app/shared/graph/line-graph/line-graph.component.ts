import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { BaseGraph } from '../base-graph';
import { Dimension } from '../../../core/models/dimension';

@Component({
    selector: 'app-line-graph',
    templateUrl: './line-graph.component.html',
    styleUrls: ['./line-graph.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LineGraphComponent extends BaseGraph implements OnInit, AfterViewInit {
    dataLinear: { x: number; y: number }[];
    wrapperDimension: Dimension;
    margin = { top: 20, right: 20, bottom: 20, left: 20 };
    innerWidth: number;
    innerHeight: number;
    divId: string;
    xScale;
    yScale;
    xAxis;
    svg;
    g;
    dot;
    line;
    lineGenerator;
    instantiated = false;

    constructor() {
        super();
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.config$.subscribe(response => {
            if (!this.instantiated) {
                this.config = response;
                this.divId = '#' + this.config.name + this.config.order;
                this.dataLinear = this.config.data;
                this.setDimensions();
                this.instantiateGraph();
                this.instantiated = true;
            } else {
                this.dataLinear = this.config.data;
                this.update();
            }
        });
    }

    setDimensions(): void {
        const wrapperClass: string =
            '.graphs > ' + '.' + this.config.name + this.config.order;
        this.wrapperDimension = this.getDimension(wrapperClass);
        this.innerWidth =
            this.wrapperDimension.width - this.margin.left - this.margin.right;
        this.innerHeight =
            this.wrapperDimension.height - this.margin.top - this.margin.bottom;
    }

    update() {
        // Update line
        this.line
            .transition()
            .duration(750)
            .attr('d', this.lineGenerator(this.dataLinear));
    }

    instantiateGraph(): void {
        this.xScale = this.getXscale();
        this.yScale = this.getYScale();

        this.svg = d3
            .select(this.divId)
            .append('svg')
            .attr('width', this.wrapperDimension.width)
            .attr('height', this.wrapperDimension.height);

        this.xAxis = d3
            .axisBottom(this.xScale)
            .ticks(3)
            .tickSizeOuter(0);

        // xAxis
        this.svg
            .append('g')
            .attr(
                'transform',
                'translate(' + this.margin.left + ',' + this.innerHeight + ')'
            )
            .call(this.xAxis);

        // line
        this.lineGenerator = d3
            .line()
            .curve(d3.curveCardinal)
            .x(d => this.xScale(d['x']))
            .y(d => this.yScale(d['y']));

        this.line = this.svg
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',0)')
            .append('path')
            .attr('d', this.lineGenerator(this.dataLinear))
            .attr('class', 'regression');
    }

    getConfig() {}

    getDimension(className: string): Dimension {
        return d3
            .select(className)
            .node()
            .getBoundingClientRect();
    }

    getXscale() {
        return d3
            .scaleLinear()
            .domain([0.1, 7])
            .range([0, this.innerWidth]);
    }

    getYScale() {
        return d3
            .scaleLinear()
            .domain([-4, 16])
            .range([this.innerHeight, 0]);
    }
}
