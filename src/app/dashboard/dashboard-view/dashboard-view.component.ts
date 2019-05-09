import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../core/chapter.service';
import { Chapter } from '../../core/models/chapter';
import { ChapterItem } from '../../core/models/chapter-item';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
    private chapter: Chapter;
    description: ChapterItem;
    input: ChapterItem;
    graph: ChapterItem;
    constructor(private chapterService: ChapterService) {
        this.chapter = this.chapterService.getChapter(0);
    }

    ngOnInit() {
        console.log(this.chapter);
        this.description = this.chapterService.getChapterItem(
            this.chapter.descriptions[0]
        );
        this.input = this.chapterService.getChapterItem(this.chapter.inputs[0]);
        this.graph = this.chapterService.getChapterItem(this.chapter.graphs[0]);
    }
}
