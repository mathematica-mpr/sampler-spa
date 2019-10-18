import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { BaseGraph } from '../base-graph';
import { Dimension } from '../../../core/models/dimension';
import { GraphItem } from 'src/app/core/models/chapter';
import { Scales } from 'src/app/core/models/scales';

@Component({
    selector: 'app-line-graph',
    templateUrl: './line-graph.component.html',
    styleUrls: ['./line-graph.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LineGraphComponent extends BaseGraph implements AfterViewInit {
    dataLinear: { X: number; Y: number }[];
    wrapperClass: string;
    wrapperDimension: Dimension;
    margin = { top: 2, right: 1, bottom: 6, left: 1 };
    innerWidth: number;
    innerHeight: number;
    divId: string;
    scales: Scales;
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

    ngAfterViewInit(): void {
        this.config$.subscribe(response => {
            this.config = response;
            if (!this.instantiated) {
                this.divId = '#' + this.config.name + this.config.order;
                this.dataLinear = this.config.graphItems[0].coordinates;
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
        this.getScales();
        this.xAxis = this.getXAxis();
        this.updateXAxis();
        this.updateLineGraph();
        this.updateMeanLine();
    }

    instantiateGraph(): void {
        this.setSvg();
        this.getScales();
        this.xAxis = this.getXAxis();
        this.setGradient();
        this.setXAxis();

        this.config.graphItems.forEach((graphItem: GraphItem, index: number) => {
            if (index === 0) {
                this.setLineGraph(graphItem);
            }

            graphItem.coordinates.forEach(x => (x.X = x.X + 100));
            this.setLineGraph(graphItem);
        });
        // this.setMeanLine();
        // this.setCursor();
        // this.setTitle();
    }

    setSvg() {
        this.svg = d3
            .select(this.divId)
            .append('svg')
            .attr('class', 'line-graph-svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr(
                'viewBox',
                '0 0 ' + this.wrapperDimension.width + ' ' + this.wrapperDimension.height
            );
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

    setLineGraph(graphItem: GraphItem): void {
        this.lineGenerator = d3
            .line()
            .curve(d3.curveCardinal)
            .x(d => this.scales.xScale(d['X']))
            .y(d => this.scales.yScale(d['Y']));

        this.line = this.svg
            .append('g')
            .attr(
                'transform',
                'translate(' + this.margin.left + ', ' + this.margin.top + ')'
            )
            .append('path')
            .classed('regression', true)
            .attr('stroke', () => {
                return this.scales.colorScale(graphItem.guid);
            })
            .attr('d', this.lineGenerator(graphItem.coordinates));
    }

    updateLineGraph() {
        this.line
            .transition()
            .duration(750)
            .attr('d', this.lineGenerator(this.dataLinear));
    }

    setGradient() {
        let svgDefs = this.svg.append('defs');

        let mainGradient = svgDefs.append('linearGradient').attr('id', 'mainGradient');

        // Create the stops of the main gradient. Each stop will be assigned
        // a class to style the stop using CSS.
        mainGradient
            .append('stop')
            .attr('class', 'stop-bottom')
            .attr('offset', '0');

        mainGradient
            .append('stop')
            .attr('class', 'stop-top')
            .attr('offset', '1');
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
            .style('stroke-width', '0.25px')
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
            .attr('class', 'cursors')
            .selectAll('.cursor')
            .data(this.dataLinear)
            .enter()
            .append('g')
            .attr('class', 'cursor');

        this.cursor
            .append('line')
            .attr('x1', d => this.scales.xScale(d.X))
            .attr('x2', d => this.scales.xScale(d.X))
            .attr('y1', 0)
            .attr('y2', -this.innerHeight)
            .attr('class', 'cursor-line')
            .attr('stroke', 'black')
            .attr('stroke-width', '1px')
            .attr('opacity', '0');

        this.cursor
            .append('text')
            .attr('class', 'cursor-text')
            .attr('x', d => this.scales.xScale(d.X))
            .attr('y', () => -this.innerHeight)
            .attr('dx', 10)
            .attr('dy', 10)
            .attr('opacity', 0)
            .text(d => {
                return d.C;
            });

        this.cursor.on('mouseenter', function() {
            d3.selectAll('.selected')
                .classed('selected', false)
                .attr('opacity', 0);

            d3.select(this)
                .selectAll('line')
                .attr('opacity', 1)
                .classed('selected', true);

            d3.select(this)
                .selectAll('text')
                .attr('opacity', 1)
                .classed('selected', true);
        });
    }

    setTitle(): void {
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
            .attr('class', 'title')
            .append('text')
            .attr('x', () => this.innerWidth)
            .attr('y', () => -this.innerHeight - this.innerHeight / 20)
            .attr('text-anchor', 'end')
            .text(() => {
                return this.config.title;
            });
    }

    setDimensions(): void {
        this.wrapperClass = '.graphs > * ' + '#' + this.config.name + this.config.order;
        this.wrapperDimension = this.getDimension(this.wrapperClass);
        this.innerWidth =
            this.wrapperDimension.width -
            (this.margin.left / this.wrapperDimension.width) * 100 -
            (this.margin.right / this.wrapperDimension.width) * 100;
        this.innerHeight =
            this.wrapperDimension.height -
            (this.margin.top / this.wrapperDimension.height) * 100 -
            (this.margin.bottom / this.wrapperDimension.height) * 100;
    }

    getXAxis() {
        return d3
            .axisBottom(this.scales.xScale)
            .ticks(3)
            .tickSize(2, 0, 0)
            .tickSizeOuter(0);
    }

    getDimension(className: string): Dimension {
        return d3
            .select(className)
            .node()
            .getBoundingClientRect();
    }

    getScales() {
        this.scales = new Scales();
        this.scales.colorScale = this.getColorScale();
        this.scales.xScale = this.getXScale();
        this.scales.yScale = this.getYScale();
    }

    getXScale() {
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

    getColorScale() {
        return d3
            .scaleOrdinal(d3.schemeCategory10)
            .domain(this.config.graphItems.map(x => x.guid));
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
        return this.scales.xScale(
            d3.sum(this.dataLinear, d => d.X * d.Y) / d3.sum(this.dataLinear, d => d.Y)
        );
    }
}
