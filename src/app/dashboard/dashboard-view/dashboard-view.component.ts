import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../core/chapter.service';
import { Chapter } from '../../core/models/chapter';
import { ChapterItem } from '../../core/models/chapter-item';
import { ChapterInputService } from '../../core/chapter-input.service';
import { ComputeResource } from '../../core/compute.resource';
import { map, switchMap } from 'rxjs/operators';

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
    init = false;
    constructor(
        private chapterService: ChapterService,
        private chapterInputService: ChapterInputService,
        private computeResource: ComputeResource
    ) {
        this.chapterService.setChapter(this.chapterIndex);
    }

    ngOnInit() {
        this.chapterService.chapter.subscribe(result => {
            this.chapter = result;

            if (!this.init) {
                this.initDescriptions();
                this.initInput();
                this.initGraphs();
                this.init = true;
            } else {
                this.updateGraphs();
            }
        });
    }

    initDescriptions(): void {
        if (this.chapter.descriptions.length > 0)
            this.descriptions = this.chapterService.getChapterItems(
                this.chapter.descriptions
            );
    }

    initInput(): void {
        if (this.chapter.inputs.length > 0) {
            this.chapterInputService.getInputFormGroup(this.chapter.inputs);
            this.inputs = this.chapterService.getChapterItems(this.chapter.inputs);

            this.chapterInputService.inputFormGroup.valueChanges
                .pipe(
                    switchMap(value => {
                        return this.computeResource.getChapterData(
                            this.chapter.name,
                            value
                        );
                    }),
                    map(results => {
                        this.chapter.graphs[0].graphs.forEach(x => (x.data = results));
                        this.chapter.graphs[1].graphs.forEach(x => (x.data = results));

                        this.chapterService.updateChapterProperties(this.chapter);
                    })
                )
                .subscribe();
        }
    }

    initGraphs(): void {
        if (this.chapter.graphs.length > 0) {
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
}
