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

    // ChapterItemFactory(chapterElementType: string): Type<any> {
    //     //  https://stackoverflow.com/questions/40115072/how-to-load-component-dynamically-using-component-name-in-angular2
    //     const factories = Array.from(this.resolver['_factories'].keys());
    //     const factoryClass = <Type<any>>(
    //         factories.find((x: any) => x.name === chapterElementType)
    //     );
    //     const factory = this.resolver.resolveComponentFactory(factoryClass);
    //     return factory.componentType;
    // }

    mapChapterItem(chapterElementType: string): Type<any> {
        return this.chapterItemMap[chapterElementType];
    }

    getChapterItem(chapterElement: ChapterElement): ChapterItem {
        return new ChapterItem(this.mapChapterItem(chapterElement.type), chapterElement);
    }
}
