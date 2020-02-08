import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { slideInOutLeft } from 'src/app/core/animation/slide-in-out-left';
import { slideInOutRight } from 'src/app/core/animation/slide-in-out-right';
import { slideInOutUp } from 'src/app/core/animation/slide-in-out-up';
import { ChapterItem } from 'src/app/core/models/chapter-item';
import { Chapter } from 'src/app/core/models/chapter';
import { ChapterService } from 'src/app/core/chapter.service';

@Component({
    selector: 'app-story-view',
    templateUrl: './story-view.component.html',
    styleUrls: ['./story-view.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [slideInOutLeft, slideInOutRight, slideInOutUp]
})
export class StoryViewComponent implements OnInit {
    private chapterIndex = 0;
    private chapter: Chapter;
    descriptions: ChapterItem[] = [];
    inputs: ChapterItem[] = [];
    graphs: ChapterItem[] = [];
    init = false;

    constructor(private chapterService: ChapterService) {
        this.chapterService.initChapter(this.chapterIndex);
    }

    ngOnInit() {
        this.chapterService.chapter.subscribe(result => {
            this.chapter = result;
            if (this.chapter) {
                if (!this.init) {
                    this.initGraphs();
                    this.init = true;
                } else {
                    this.updateGraphs();
                }
            }
        });
    }

    initGraphs(): void {
        if (this.chapter.graphs) {
            thiss = this.chapterService.getChapterItems(this.chapter.graphs);
        }
    }

    updateGraphs(): void {
        if (this.chapter.graphs.length > 0) {
            this.chapter.graphs.forEach((graph, i) =>
                this.graphs[i].chapterElement.next(graph)
            );
        }
    }
}
