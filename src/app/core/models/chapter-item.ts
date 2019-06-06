import { Type } from '@angular/core';
import { ChapterElement } from './chapter';
import { BehaviorSubject } from 'rxjs';

export class ChapterItem {
    constructor(
        public component: Type<any>,
        public chapterElement: BehaviorSubject<ChapterElement>
    ) {}
}
