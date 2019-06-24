import { Component, OnInit, HostListener } from '@angular/core';
import { ChapterService } from '../../core/chapter.service';
import { Chapter } from '../../core/models/chapter';
import { ChapterItem } from '../../core/models/chapter-item';
import { ChapterInputService } from '../../core/chapter-input.service';
import { map, switchMap, debounce } from 'rxjs/operators';
import { timer, Subject } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.css'],
    animations: [
        trigger('slideLeft', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-out', style({ transform: 'translateX(-100%)' }))
            ])
        ]),
        trigger('slideRight', [
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-out', style({ transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('slideUp', [
            transition(':enter', [
                style({ transform: 'translateY(-100%)' }),
                animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-out', style({ transform: 'translateY(-100%)' }))
            ])
        ])
    ]
})
export class DashboardViewComponent implements OnInit {
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
