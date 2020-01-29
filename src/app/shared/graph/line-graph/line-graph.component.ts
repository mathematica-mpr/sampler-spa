import { Component, AfterViewInit, ViewEncapsulation, DoCheck } from '@angular/core';
import * as d3 from 'd3';
import { BaseGraph } from '../base-graph';
import { GraphItem } from 'src/app/core/models/chapter';
import { GraphService } from 'src/app/core/graph.service';

@Component({
    selector: 'app-line-graph',
    templateUrl: './line-graph.component.html',
    styleUrls: ['./line-graph.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [GraphService]
})
export class LineGraphComponent extends BaseGraph implements AfterViewInit, DoCheck {
    divId: string;
    xAxis;
    svg;
    g;
    dot;
    line;
    mean;
    cursor;
    lineGenerator;
    instantiated = false;
    nbLines;

    constructor(private graphService: GraphService) {
        super();
    }

    ngAfterViewInit(): void {
        this.graphService.config = this.config;
        if (!this.instantiated) {
            this.divId =
                '#' + this.graphService.config.name + this.graphService.config.order;

            this.setCanvas();
            this.drawGraphs();
            this.instantiated = true;
            this.nbLines = this.config.graphItems.length;
        }
    }

    ngDoCheck() {
        if (this.instantiated && this.config.graphItems.length !== this.nbLines) {
            this.nbLines = this.config.graphItems.length;
            this.updateGraphs();
        }
    }

    updateGraphs() {
        this.graphService.setScales();
        this.xAxis = this.getXAxis();
        this.updateXAxis();
        this.drawGraphs();
    }

    setCanvas(): void {
        this.graphService.setDimensions();
        this.graphService.setScales();
        this.setSvg();
        this.setXAxis();

        // this.setMeanLine();
    }

    drawGraphs(): void {
        this.graphService.config.graphItems.forEach(
            (graphItem: GraphItem, index: number) => {
                this.setLineGraph(graphItem);
            }
        );
    }

    setSvg() {
        this.svg = d3
            .select(this.divId)
            .append('svg')
            .attr('class', 'line-graph-svg')
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr(
                'viewBox',
                '0 0 ' +
                    this.graphService.wrapperDimensions.width +
                    ' ' +
                    this.graphService.wrapperDimensions.height
            );
    }

    setXAxis() {
        this.xAxis = this.getXAxis();

        this.svg
            .append('g')
            .attr('class', 'x-axis')
            .attr(
                'id',
                x =>
                    'x-axis' +
                    this.graphService.config.name +
                    this.graphService.config.order
            )
            .attr(
                'transform',
                'translate(' +
                    this.graphService.margins.left +
                    ',' +
                    (this.graphService.innerDimensions.height +
                        this.graphService.margins.top) +
                    ')'
            )
            .call(this.xAxis);
    }

    updateXAxis() {
        d3.select(
            '#' +
                'x-axis' +
                this.graphService.config.name +
                this.graphService.config.order
        )
            .transition()
            .duration(750)
            .call(this.xAxis);
    }

    setLineGraph(graphItem: GraphItem): void {
        this.lineGenerator = d3
            .line()
            .curve(d3.curveCardinal)
            .x(d => this.graphService.scales.xScale(d['X']))
            .y(d => this.graphService.scales.yScale(d['Y']));

        this.line = this.svg
            .append('g')
            .attr(
                'transform',
                'translate(' +
                    this.graphService.margins.left +
                    ', ' +
                    this.graphService.margins.top +
                    ')'
            )
            .append('path')
            .classed('regression', true)
            .attr('stroke', () => {
                return this.graphService.scales.colorScale(graphItem.guid);
            })
            .attr('d', this.lineGenerator(graphItem.coordinates));
    }

    // updateLineGraph() {
    //     this.line
    //         .transition()
    //         .duration(750)
    //         .attr('d', this.lineGenerator(graphItem.coordinates));
    // }

    setMeanLine() {
        this.mean = this.svg
            .append('g')
            .attr(
                'transform',
                'translate(' +
                    this.graphService.margins.left +
                    ',' +
                    (this.graphService.innerDimensions.height +
                        this.graphService.margins.top) +
                    ')'
            )
            .append('line')
            .attr('class', 'mean-line')
            .attr('x1', d => this.getWeightedMean(d))
            .attr('x2', d => this.getWeightedMean(d))
            .attr('y1', 0)
            .attr('y2', -this.graphService.innerDimensions.height)
            .style('stroke-width', '0.25px')
            .style('stroke', 'black')
            .style('stroke-dasharray', '4,4')
            .style('fill', 'none');
    }

    getXAxis() {
        return d3
            .axisBottom(this.graphService.scales.xScale)
            .ticks(3)
            .tickSize(2, 0, 0)
            .tickSizeOuter(0);
    }

    getWeightedMean(coordinates: Coordinates): number {
        return this.graphService.scales.xScale(
            d3.sum(coordinates, d => d.X * d.Y) / d3.sum(coordinates, d => d.Y)
        );
    }
}
