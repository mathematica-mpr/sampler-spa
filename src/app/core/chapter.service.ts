import { Injectable, Type } from '@angular/core';
import { Chapter, ChapterElement } from './models/chapter';
import { mockChapter } from 'test/mockChapter';
import { ChapterItem } from './models/chapter-item';
import { ChapterItemMap } from './chapter-item.resource';
import { BehaviorSubject, of, Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ChapterService {
    chapter: BehaviorSubject<Chapter> = new BehaviorSubject(null);

    chapterUrl =
        'https://75r4jpxl55.execute-api.us-east-1.amazonaws.com/Prod/api/chapter';

    constructor(private http: HttpClient) {}

    updateChapterProperties(newChapter: Chapter) {
        this.chapter.next(newChapter);
    }

    initChapter(curChapter: number): void {
        this.http.get(this.chapterUrl + curChapter).subscribe((response: Chapter) => {
            this.chapter.next(response);
        });
    }

    getUpdatedChapter(curChapter: string, params: any): Observable<Chapter> {
        const options = this.getOptions(params);
        return this.http.get<Chapter>(this.chapterUrl + curChapter + '/update', options);
    }

    getOptions(params: any) {
        return {
            params: this.getParams(params),
            headers: null // this.getHeader()
        };
    }

    getParams(params: any) {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(
            key => (httpParams = httpParams.append(key, params[key].toString()))
        );
        return httpParams;
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
