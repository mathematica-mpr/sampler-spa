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
    dataLinear: { X: number; Y: number }[];
    wrapperDimension: Dimension;
    margin = { top: 20, right: 10, bottom: 20, left: 10 };
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
    mean;
    cursor;
    lineGenerator;
    instantiated = false;

    constructor() {
        super();
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.config$.subscribe(response => {
            this.config = response;
            if (!this.instantiated) {
                this.divId = '#' + this.config.name + this.config.order;
                this.dataLinear = this.config.data;
                this.setDimensions();
                this.instantiateGraph();
                this.instantiated = true;
            } else {
                this.dataLinear = this.config.data;
                this.updateGraph();
            }
        });
    }

    updateGraph() {
        this.xScale = this.getXscale();
        this.yScale = this.getYScale();
        this.xAxis = this.getXAxis();
        this.updateXAxis();
        this.updateLineGraph();
        this.updateMeanLine();
    }

    instantiateGraph(): void {
        this.svg = d3
            .select(this.divId)
            .append('svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr(
                'viewBox',
                '0 0 ' + this.wrapperDimension.width + ' ' + this.wrapperDimension.height
            );

        this.xScale = this.getXscale();
        this.yScale = this.getYScale();
        this.xAxis = this.getXAxis();
        this.setXAxis();
        this.setLineGraph();
        this.setMeanLine();
        this.setCursor();
    }

    setXAxis() {
        this.svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('id', x => 'x-axis' + this.config.name + this.config.order)
            .attr(
                'transform',
                'translate(' +
                    this.margin.left +
                    ',' +
                    (this.innerHeight + this.margin.top) +
                    ')'
            )
            .call(this.xAxis);
    }

    updateXAxis() {
        d3.select('#' + 'x-axis' + this.config.name + this.config.order)
            .transition()
            .duration(750)
            .call(this.xAxis);
    }

    setLineGraph(): void {
        this.lineGenerator = d3
            .line()
            .curve(d3.curveCardinal)
            .x(d => this.xScale(d['X']))
            .y(d => this.yScale(d['Y']));

        this.line = this.svg
            .append('g')
            .attr(
                'transform',
                'translate(' + this.margin.left + ', ' + this.margin.top + ')'
            )
            .append('path')
            .attr('d', this.lineGenerator(this.dataLinear))
            .attr('class', 'regression')
            .on('mousemove', () => {
                console.log(d3.mouse(d3.event.currentTarget));
            });
    }

    updateLineGraph() {
        this.line
            .transition()
            .duration(750)
            .attr('d', this.lineGenerator(this.dataLinear));
    }

    setMeanLine() {
        this.mean = this.svg
            .append('g')
            .attr(
                'transform',
                'translate(' +
                    this.margin.left +
                    ',' +
                    (this.innerHeight + this.margin.top) +
                    ')'
            )
            .append('line')
            .attr('class', 'mean-line')
            .attr('x1', () => this.getWeightedMean())
            .attr('x2', () => this.getWeightedMean())
            .attr('y1', 0)
            .attr('y2', -this.innerHeight)
            .style('stroke-width', 0.5)
            .style('stroke', 'black')
            .style('stroke-dasharray', '4,4')
            .style('fill', 'none');
    }

    updateMeanLine() {
        this.mean
            .transition()
            .duration(750)
            .attr('x1', () => this.getWeightedMean())
            .attr('x2', () => this.getWeightedMean());
    }

    setCursor() {
        this.cursor = this.svg
            .append('g')
            .attr(
                'transform',
                'translate(' +
                    this.margin.left +
                    ',' +
                    (this.innerHeight + this.margin.top) +
                    ')'
            )
            .attr('class', 'cursor')
            .append('path')
            .attr('class', 'cursor-line')
            .style('stroke', 'black')
            .style('stroke-width', '1px');
    }

    setDimensions(): void {
        const wrapperClass: string =
            '.graphs > ' + '#' + this.config.name + this.config.order;
        this.wrapperDimension = this.getDimension(wrapperClass);
        this.innerWidth =
            this.wrapperDimension.width - this.margin.left - this.margin.right;
        this.innerHeight =
            this.wrapperDimension.height - this.margin.top - this.margin.bottom;
    }

    getXAxis() {
        return d3
            .axisBottom(this.xScale)
            .ticks(3)
            .tickSizeOuter(0);
    }

    getDimension(className: string): Dimension {
        return d3
            .select(className)
            .node()
            .getBoundingClientRect();
    }

    getXscale() {
        return d3
            .scaleLinear()
            .domain([this.getMin('X'), this.getMax('X')])
            .range([0, this.innerWidth]);
    }

    getYScale() {
        return d3
            .scaleLinear()
            .domain([this.getMin('Y'), this.getMax('Y')])
            .range([this.innerHeight, 0]);
    }

    getMin(axis: string): number {
        const xArr = this.dataLinear.map(coor => coor[axis]);
        return Math.min.apply(Math, xArr);
    }

    getMax(axis: string): number {
        const xArr = this.dataLinear.map(coor => coor[axis]);
        return Math.max.apply(Math, xArr);
    }

    getWeightedMean(): number {
        return this.xScale(
            d3.sum(this.dataLinear, d => d.X * d.Y) / d3.sum(this.dataLinear, d => d.Y)
        );
    }
}
