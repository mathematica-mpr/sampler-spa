import { Component, OnInit } from '@angular/core';
import { slideInOutLeft } from 'src/app/core/animation/slide-in-out-left';
import { slideInOutRight } from 'src/app/core/animation/slide-in-out-right';
import { slideInOutUp } from 'src/app/core/animation/slide-in-out-up';
import { ChapterItem } from 'src/app/core/models/chapter-item';
import { Chapter } from 'src/app/core/models/chapter';
import { ChapterInputService } from 'src/app/core/chapter-input.service';
import { ChapterService } from 'src/app/core/chapter.service';
import { debounce, switchMap, map } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
    selector: 'app-story-view',
    templateUrl: './story-view.component.html',
    styleUrls: ['./story-view.component.css'],
    animations: [slideInOutLeft, slideInOutRight, slideInOutUp]
})
export class StoryViewComponent implements OnInit {
    private chapterIndex = 0;
    private chapter: Chapter;
    descriptions: ChapterItem[] = [];
    inputs: ChapterItem[] = [];
    graphs: ChapterItem[] = [];
    init = false;

    constructor(
        private chapterService: ChapterService,
        private chapterInputService: ChapterInputService
    ) {
        this.chapterService.initChapter(this.chapterIndex);
    }

    ngOnInit() {
        this.chapterService.chapter.subscribe(result => {
            this.chapter = result;
            if (this.chapter) {
                if (!this.init) {
                    this.initDescriptions();
                    this.initInput();
                    this.initGraphs();
                    this.init = true;
                } else {
                    this.updateGraphs();
                }
            }
        });
    }

    initDescriptions(): void {
        if (this.chapter.descriptions) {
            this.descriptions = this.chapterService.getChapterItems(
                this.chapter.descriptions
            );
        }
    }

    initInput(): void {
        if (this.chapter.inputs) {
            this.chapterInputService.getInputFormGroup(this.chapter.inputs);
            this.inputs = this.chapterService.getChapterItems(this.chapter.inputs);

            this.chapterInputService.inputFormGroup.valueChanges
                .pipe(
                    debounce(() => timer(300)),
                    switchMap(value => {
                        return this.chapterService.getUpdatedChapter('1', value);
                    }),
                    map(results => {
                        this.chapterService.updateChapterProperties(results);
                    })
                )
                .subscribe();
        }
    }

    initGraphs(): void {
        if (this.chapter.graphs) {
            this.graphs = this.chapterService.getChapterItems(this.chapter.graphs);
        }
    }

    updateGraphs(): void {
        if (this.chapter.graphs.length > 0) {
            this.chapter.graphs.forEach((graph, i) =>
                this.graphs[i].chapterElement.next(graph)
            );
        }
    }

    getNextChapter() {
        this.chapterIndex++;
        this.resetChapter().then(() => {
            this.init = false;
            this.chapterService.initChapter(this.chapterIndex);
        });
    }

    getPreviousChapter() {
        this.chapterIndex--;
        this.resetChapter().then(() => {
            this.init = false;
            this.chapterService.initChapter(this.chapterIndex);
        });
    }

    async resetChapter() {
        this.popArray(this.descriptions);
        this.popArray(this.inputs);
        this.popArray(this.graphs);

        const promise = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve();
            }, 200);
        });

        return promise;
    }

    popArray(array: any[]) {
        while (array.length) {
            array.pop();
        }
    }
}
