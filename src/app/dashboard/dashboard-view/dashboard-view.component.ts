import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../core/chapter.service';
import { Chapter } from '../../core/models/chapter';
import { ChapterItem } from '../../core/models/chapter-item';
import { ChapterInputService } from '../../core/chapter-input.service';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
    private chapterIndex: number = 0;
    private chapter: Chapter;
    descriptions: ChapterItem[];
    inputs: ChapterItem[];
    graphs: ChapterItem[];
    constructor(
        private chapterService: ChapterService,
        private chapterInputService: ChapterInputService
    ) {
        this.chapter = this.chapterService.getChapter(this.chapterIndex);
    }

    ngOnInit() {
        if (this.chapter.descriptions.length > 0)
            this.descriptions = this.chapterService.getChapterItems(
                this.chapter.descriptions
            );

        if (this.chapter.inputs.length > 0) {
            this.chapterInputService.setInputFormGroup(this.chapter.inputs);
            this.inputs = this.chapterService.getChapterItems(this.chapter.inputs);
            this.chapterInputService.inputFormGroup.valueChanges.subscribe(result =>
                console.log(result)
            );
        }

        if (this.chapter.graphs.length > 0)
            this.graphs = this.chapterService.getChapterItems(this.chapter.graphs);
    }
}
