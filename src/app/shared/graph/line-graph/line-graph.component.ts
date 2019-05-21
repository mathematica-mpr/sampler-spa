import {
    Component,
    OnInit,
    AfterViewInit,
    ViewEncapsulation,
    SimpleChanges,
    OnChanges
} from '@angular/core';
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
    xScale;
    yScale;

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.dataLinear = this.config.data;
        const wrapperClass: string = '.' + this.config.name + this.config.order;
        this.wrapperDimension = this.getDimension(wrapperClass);
        this.innerWidth =
            this.wrapperDimension.width - this.margin.left - this.margin.right;
        this.innerHeight =
            this.wrapperDimension.height - this.margin.top - this.margin.bottom;
        this.xScale = this.getXscale();
        this.yScale = this.getYScale();
    }

    ngAfterViewInit(): void {
        this.instantiateGraph();
    }

    instantiateGraph(): void {
        const divId = '#' + this.config.name + this.config.order;

        const g = d3
            .select(divId)
            .append('svg')
            .attr('width', this.wrapperDimension.width)
            .attr('height', this.wrapperDimension.height)
            .append('g')
            .attr(
                'transform',
                'translate(' + this.margin.left + ',' + this.margin.top + ')'
            );

        g.selectAll('circle')
            .data(this.dataLinear)
            .enter()
            .append('circle')
            .attr('r', 3)
            .attr('cx', d => this.xScale(d.x))
            .attr('cy', d => this.yScale(d.y));

        var lineGenerator = d3
            .line()
            .curve(d3.curveCardinal)
            .x(d => this.xScale(d['x']))
            .y(d => this.yScale(d['y']));

        g.append('path')
            .attr('d', lineGenerator(this.dataLinear))
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
