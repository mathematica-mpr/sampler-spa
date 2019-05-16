import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class ChapterInputService {
    private chapterInputSource = new Subject<number>();
    chapterInput$ = this.chapterInputSource.asObservable();
    constructor() {}

    inputChapter(input: number) {
        this.chapterInputSource.next(input);
    }
}
