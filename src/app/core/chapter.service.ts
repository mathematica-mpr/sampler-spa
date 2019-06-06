import { Injectable, Type } from '@angular/core';
import { Chapter, ChapterElement } from './models/chapter';
import { mockChapter } from 'test/mockChapter';
import { ChapterItem } from './models/chapter-item';
import { ChapterItemMap } from './chapter-item.resource';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChapterService {
    chapter: BehaviorSubject<Chapter> = new BehaviorSubject(null);

    constructor() {}

    updateChapterProperties(newProps: Partial<Chapter>) {
        let updateChapter = { ...this.chapter.value, ...newProps };
        this.chapter.next(updateChapter);
    }

    setChapter(curChapter: number): void {
        this.chapter.next(mockChapter);
    }

    getComponentType(chapterElementType: string): Type<any> {
        return ChapterItemMap[chapterElementType];
    }

    getChapterItems(chapterElements: ChapterElement[]): ChapterItem[] {
        return chapterElements.map((x: ChapterElement) => {
            let componentType: Type<any> = this.getComponentType(x.type);
            return new ChapterItem(componentType, new BehaviorSubject(x));
        });
    }
}
