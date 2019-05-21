import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../core/chapter.service';
import { Chapter, ChapterGraph } from '../../core/models/chapter';
import { ChapterItem } from '../../core/models/chapter-item';
import { ChapterInputService } from '../../core/chapter-input.service';
import { ComputeResource } from '../../core/compute.resource';

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
        private chapterInputService: ChapterInputService,
        private computeResource: ComputeResource
    ) {
        this.chapterService.setChapter(this.chapterIndex);
    }

    ngOnInit() {
        this.chapterService.chapter.subscribe(result => {
            this.chapter = result;
            this.initDescriptions();
            this.initInput();
            this.initGraphs();
            console.log(this.chapter);
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
            this.chapterInputService.setInputFormGroup(this.chapter.inputs);
            this.inputs = this.chapterService.getChapterItems(this.chapter.inputs);
            this.chapterInputService.inputFormGroup.valueChanges.subscribe(result => {
                console.log(result);
                this.computeResource.getResult('hello', [0, 0, 0]).subscribe(computed => {
                    // this.graphs[0].chapterElement.data = computed;
                    this.chapter.graphs[0].data = computed;

                    this.chapterService.updateChapterProperties(this.chapter);
                    console.log(this.chapter);
                });
            });
        }
    }

    initGraphs(): void {
        if (this.chapter.graphs.length > 0) {
            this.graphs = this.chapterService.getChapterItems(this.chapter.graphs);
        }
    }
}
