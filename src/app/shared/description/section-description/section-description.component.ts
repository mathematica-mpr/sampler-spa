import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseDescription } from '../base-description';
import * as d3 from 'd3';

@Component({
    selector: 'app-section-description',
    templateUrl: './section-description.component.html',
    styleUrls: ['./section-description.component.css']
})
export class SectionDescriptionComponent extends BaseDescription
    implements OnInit, AfterViewInit {
    constructor() {
        super();
    }

    ngOnInit() {
        this.config$.subscribe(response => {
            this.config = response;
        });
    }

    ngAfterViewInit(): void {
        d3.selectAll('.explanation')
            .on('mouseover', function() {
                const inputId = d3.select(this).attr('value');
                d3.select('#' + inputId)
                    .transition()
                    .duration(200)
                    .style('transform', 'scale(1.2)');
            })
            .on('mouseout', function() {
                const inputId = d3.select(this).attr('value');
                d3.select('#' + inputId)
                    .transition()
                    .duration(200)
                    .style('background-color', 'white')
                    .style('transform', 'scale(1)');
            });
    }
}
