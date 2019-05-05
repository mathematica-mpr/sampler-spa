import { Injectable } from '@angular/core';
import { Chapter } from './models/chapter';
import { mockChapter } from 'test/mockChapter';

@Injectable({
    providedIn: 'root'
})
export class ChapterService {
    constructor() {}

    getChapter(curChapter: number): Chapter {
        return mockChapter;
    }
}
