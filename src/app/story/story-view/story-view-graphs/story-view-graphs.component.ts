import { Component, OnInit } from '@angular/core';
import { GraphsService } from 'src/app/core/graphs.service';

@Component({
    selector: 'app-story-view-graphs',
    templateUrl: './story-view-graphs.component.html',
    styleUrls: ['./story-view-graphs.component.css']
})
export class StoryViewGraphsComponent implements OnInit {
    constructor(public graphsService: GraphsService) {}

    ngOnInit() {}
}
