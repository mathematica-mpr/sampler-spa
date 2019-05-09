import { Injectable, Type } from '@angular/core';
import { Chapter, ChapterElement } from './models/chapter';
import { mockChapter } from 'test/mockChapter';
import { NumberInputComponent } from '../shared/input/number-input/number-input.component';
import { ChapterItem } from './models/chapter-item';

@Injectable({
    providedIn: 'root'
})
export class ChapterService {
    chapterItemMap = {
        number: NumberInputComponent
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
