import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterDescriptionComponent } from './chapter/chapter-description/chapter-description.component';
import { ChapterInputsComponent } from './chapter/chapter-inputs/chapter-inputs.component';
import { ChapterGraphsComponent } from './chapter/chapter-graphs/chapter-graphs.component';
import { LineGraphComponent } from './graph/line-graph/line-graph.component';
import { NumberInputComponent } from './input/number-input/number-input.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ChapterDescriptionComponent,
        ChapterInputsComponent,
        ChapterGraphsComponent,
        LineGraphComponent,
        NumberInputComponent
    ],
    exports: [ChapterDescriptionComponent, ChapterInputsComponent, ChapterGraphsComponent]
})
export class SharedModule {}
