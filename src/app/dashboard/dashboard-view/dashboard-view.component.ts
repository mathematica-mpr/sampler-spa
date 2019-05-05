import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../core/chapter.service';
import { Chapter } from '../../core/models/chapter';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
    private chapter: Chapter;
    constructor(private chapterService: ChapterService) {
        this.chapter = this.chapterService.getChapter(0);
    }

    ngOnInit() {}
}
