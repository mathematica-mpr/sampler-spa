import { Component, AfterViewInit, ViewEncapsulation, DoCheck } from '@angular/core';
import * as d3 from 'd3';
import { BaseGraph } from '../base-graph';
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
    lastUpdated = 0;

    constructor(private graphService: GraphService) {
        super();
    }

    // runs at instantiation
    ngAfterViewInit(): void {
        this.graphService.config = this.config;
        if (!this.instantiated) {
            this.divId =
                '#' + this.graphService.config.name + this.graphService.config.order;

            this.setCanvas();
            this.setLineGraph();
            this.instantiated = true;
            this.nbLines = this.config.graphItems.length;
        }
    }

    // runs when modification occurs
    ngDoCheck() {
        if (this.instantiated && this.config.graphItems.length !== this.nbLines) {
            this.nbLines = this.config.graphItems.length;
            this.lastUpdated = this.getLastUpdated();
            this.addRemoveGraph();
        } else if (this.instantiated && this.getLastUpdated() > this.lastUpdated) {
            this.lastUpdated = this.getLastUpdated();
            this.updateGraphs();
        }
    }

    getLastUpdated(): number {
        return this.config.graphItems.map(x => x.timeStamp).reduce((a, b) => a + b, 0);
    }

    addRemoveGraph() {
        this.graphService.setScales();
        this.setLineGraph();
    }

    updateGraphs() {
        this.graphService.setScales();
        this.updateLineGraph();
    }

    setCanvas(): void {
        this.graphService.setDimensions();
        this.graphService.setScales();
        this.setSvg();
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

    setLineGraph(): void {
        this.lineGenerator = d3
            .line()
            .curve(d3.curveCardinal)
            .x(d => this.graphService.scales.xScale(d['X']))
            .y(d => this.graphService.scales.yScale(d['Y']));

        this.line = this.svg
            .selectAll('path')
            .data(this.graphService.config.graphItems)
            .join('path')
            .classed('regression', true)
            .attr('stroke', d => {
                return this.graphService.scales.colorScale(d.guid);
            })
            .attr('d', d => this.lineGenerator(d.coordinates));
    }

    updateLineGraph() {
        this.line
            .transition()
            .duration(750)
            .attr('d', d => this.lineGenerator(d.coordinates));
    }

    setXAxis() {
        this.svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('id', x => 'x-axis' + this.config.name + this.config.order)
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

    getXAxis() {
        return d3
            .axisBottom(this.graphService.scales.xScale)
            .ticks(3)
            .tickSizeOuter(0);
    }
}
