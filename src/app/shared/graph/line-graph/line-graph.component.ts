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
    focus;
    focusText;
    bisect;
    rect;
    legend;

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

        // This allows to find the closest X index of the mouse:
        this.bisect = d3.bisector(function(d) {
            return d.X;
        }).left;

        // Create the circle that travels along the curve of chart
        this.focus = this.svg
            .selectAll('circle')
            .data(this.graphService.config.graphItems)
            .join('circle')
            .style('fill', 'none')
            .attr('stroke', d => this.graphService.scales.colorScale(d.guid))
            .attr('stroke-width', 0.25)
            .attr('r', 1.5)
            .style('opacity', 0);

        this.legend = this.svg
            .selectAll('text')
            .data(this.graphService.config.graphItems)
            .join('text')
            .attr('text-anchor', 'left')
            .attr('alignment-baseline', 'middle')
            .attr('x', 120)
            .attr('y', (d, i) => 10 + i * 6)
            .attr('font-size', 5)
            .attr('fill', d => this.graphService.scales.colorScale(d.guid))
            .html('c:');

        this.rect = this.svg
            .append('rect')
            .style('fill', 'none')
            .style('pointer-events', 'all')
            .attr('width', this.graphService.innerDimensions.width)
            .attr('height', this.graphService.innerDimensions.height)
            .on('mouseover', () => this.mouseover())
            .on('mousemove', () => this.mousemove())
            .on('mouseout', () => this.mouseout());
    }

    updateLineGraph() {
        this.line
            .transition()
            .duration(750)
            .attr('d', d => this.lineGenerator(d.coordinates));
    }

    mouseover() {
        this.focus.style('opacity', 1);
    }

    mousemove() {
        // recover coordinate we need
        const xPos = d3.mouse(this.rect.node())[0];
        const x0 = this.graphService.scales.xScale.invert(xPos);

        const bisectVals = this.config.graphItems.map(x =>
            this.bisect(x.coordinates, x0)
        );

        this.focus
            .attr('cx', (d, i) =>
                this.graphService.scales.xScale(d.coordinates[bisectVals[i]].X)
            )
            .attr('cy', (d, i) =>
                this.graphService.scales.yScale(d.coordinates[bisectVals[i]].Y)
            );

        this.legend.html((d, i) => 'c:' + d.coordinates[bisectVals[i]].C);
    }
    mouseout() {
        this.focus.style('opacity', 0);
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
