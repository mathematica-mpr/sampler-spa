import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterDescriptionComponent } from './chapter/chapter-description/chapter-description.component';
import { ChapterInputsComponent } from './chapter/chapter-inputs/chapter-inputs.component';
import { ChapterGraphsComponent } from './chapter/chapter-graphs/chapter-graphs.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ChapterDescriptionComponent,
        ChapterInputsComponent,
        ChapterGraphsComponent
    ],
    exports: [ChapterDescriptionComponent, ChapterInputsComponent, ChapterGraphsComponent]
})
export class SharedModule {}
