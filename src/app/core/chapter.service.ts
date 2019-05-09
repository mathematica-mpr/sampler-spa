import { Injectable, Type } from '@angular/core';
import { Chapter, ChapterElement } from './models/chapter';
import { mockChapter } from 'test/mockChapter';
import { NumberInputComponent } from '../shared/input/number-input/number-input.component';
import { ChapterItem } from './models/chapter-item';
import { SectionDescriptionComponent } from '../shared/description/section-description/section-description.component';
import { LineGraphComponent } from '../shared/graph/line-graph/line-graph.component';

@Injectable({
    providedIn: 'root'
})
export class ChapterService {
    chapterItemMap = {
        section: SectionDescriptionComponent,
        number: NumberInputComponent,
        line: LineGraphComponent
    };

    constructor() {}

    getChapter(curChapter: number): Chapter {
        return mockChapter;
    }

    mapChapterItem(chapterElementType: string): Type<any> {
        return this.chapterItemMap[chapterElementType];
    }

    getChapterItem(chapterElement: ChapterElement): ChapterItem {
        return new ChapterItem(this.mapChapterItem(chapterElement.type), chapterElement);
    }
}
