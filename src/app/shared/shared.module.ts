import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './graph/line-graph/line-graph.component';
import { NumberInputComponent } from './input/number-input/number-input.component';
import { ChapterItemComponent } from './chapter/chapter-item/chapter-item.component';
import { ChapterDirective } from './chapter/chapter.directive';
import { SectionDescriptionComponent } from './description/section-description/section-description.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        LineGraphComponent,
        NumberInputComponent,
        ChapterItemComponent,
        ChapterDirective,
        SectionDescriptionComponent
    ],
    exports: [ChapterItemComponent, NumberInputComponent, ChapterDirective]
})
export class SharedModule {}
