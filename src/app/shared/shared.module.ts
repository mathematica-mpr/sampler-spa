import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineGraphComponent } from './graph/line-graph/line-graph.component';
import { NumberInputComponent } from './input/number-input/number-input.component';
import { ChapterItemComponent } from './chapter/chapter-item/chapter-item.component';
import { ChapterDirective } from './chapter/chapter.directive';
import { SectionDescriptionComponent } from './description/section-description/section-description.component';
import { ConfusionErrorGraphComponent } from './graph/confusion-error-graph/confusion-error-graph.component';
import { ConfusionErrorInputComponent } from './input/confusion-error-input/confusion-error-input.component';
import { RangeInputComponent } from './input/range-input/range-input.component';
import { ModelPerformanceGraphComponent } from './graph/model-performance-graph/model-performance-graph.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbModule],
    declarations: [
        LineGraphComponent,
        NumberInputComponent,
        ChapterItemComponent,
        ChapterDirective,
        SectionDescriptionComponent,
        ConfusionErrorGraphComponent,
        ConfusionErrorInputComponent,
        RangeInputComponent,
        ModelPerformanceGraphComponent,
        MenuComponent
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ChapterItemComponent,
        ChapterDirective,
        NumberInputComponent,
        SectionDescriptionComponent,
        LineGraphComponent,
        ConfusionErrorGraphComponent,
        ConfusionErrorInputComponent,
        RangeInputComponent,
        ModelPerformanceGraphComponent,
        MenuComponent
    ]
})
export class SharedModule {}
