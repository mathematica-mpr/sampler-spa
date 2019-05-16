import { Injectable, Type } from '@angular/core';
import { Chapter, ChapterElement } from './models/chapter';
import { mockChapter } from 'test/mockChapter';
import { ChapterItem } from './models/chapter-item';
import { ChapterItemMap } from './chapter-item.resource';

@Injectable({
    providedIn: 'root'
})
export class ChapterService {
    constructor() {}

    getChapter(curChapter: number): Chapter {
        return mockChapter;
    }

    getComponentType(chapterElementType: string): Type<any> {
        // TODO: find a way to generate Type from string
        return ChapterItemMap[chapterElementType];
    }

    getChapterItems(chapterElements: ChapterElement[]): ChapterItem[] {
        return chapterElements.map((x: ChapterElement) => {
            let componentType: Type<any> = this.getComponentType(x.type);
            return new ChapterItem(componentType, x);
        });
    }
}
