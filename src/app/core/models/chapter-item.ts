import { Type } from '@angular/core';
import { ChapterElement } from './chapter';

export class ChapterItem {
    constructor(public component: Type<any>, public chapterElement: ChapterElement) {}
}
