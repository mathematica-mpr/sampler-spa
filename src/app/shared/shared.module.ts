import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterDescriptionComponent } from './chapter/chapter-description/chapter-description.component';
import { ChapterInputsComponent } from './chapter/chapter-inputs/chapter-inputs.component';
import { ChapterGraphsComponent } from './chapter/chapter-graphs/chapter-graphs.component';
import { LineGraphComponent } from './graph/line-graph/line-graph.component';
import { NumberInputComponent } from './input/number-input/number-input.component';
import { ChapterItemComponent } from './chapter/chapter-item/chapter-item.component';
import { ChapterDirective } from './chapter/chapter.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ChapterDescriptionComponent,
        ChapterInputsComponent,
        ChapterGraphsComponent,
        LineGraphComponent,
        NumberInputComponent,
        ChapterItemComponent,
        ChapterDirective
    ],
    exports: [
        ChapterItemComponent,
        ChapterDescriptionComponent,
        ChapterInputsComponent,
        ChapterGraphsComponent,
        NumberInputComponent,
        ChapterDirective
    ]
})
export class SharedModule {}
