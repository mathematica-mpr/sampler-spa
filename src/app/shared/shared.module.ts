import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './graph/line-graph/line-graph.component';
import { NumberInputComponent } from './input/number-input/number-input.component';
import { ChapterItemComponent } from './chapter/chapter-item/chapter-item.component';
import { ChapterDirective } from './chapter/chapter.directive';
import { SectionDescriptionComponent } from './description/section-description/section-description.component';
import { ConfusionErrorGraphComponent } from './graph/confusion-error-graph/confusion-error-graph.component';
import { ConfusionErrorInputComponent } from './input/confusion-error-input/confusion-error-input.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        LineGraphComponent,
        NumberInputComponent,
        ChapterItemComponent,
        ChapterDirective,
        SectionDescriptionComponent,
        ConfusionErrorGraphComponent,
        ConfusionErrorInputComponent
    ],
    exports: [
        ChapterItemComponent,
        ChapterDirective,
        NumberInputComponent,
        SectionDescriptionComponent,
        LineGraphComponent,
        ConfusionErrorGraphComponent,
        ConfusionErrorInputComponent
    ]
})
export class SharedModule {}
