import {
    Injectable,
    Type,
    ComponentFactoryResolver,
    ViewContainerRef
} from '@angular/core';
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
        SectionDescription: SectionDescriptionComponent,
        NumberInput: NumberInputComponent,
        LineGraph: LineGraphComponent
    };

    constructor(private resolver: ComponentFactoryResolver) {}

    getChapter(curChapter: number): Chapter {
        return mockChapter;
    }

    getComponentType(chapterElementType: string): Type<any> {
        // TODO: find a way to generate Type from string
        return this.chapterItemMap[chapterElementType];
    }

    getChapterItems(chapterElements: ChapterElement[]): ChapterItem[] {
        return chapterElements.map((x: ChapterElement) => {
            let componentType: Type<any> = this.getComponentType(x.type);
            return new ChapterItem(componentType, x);
        });
    }
}
