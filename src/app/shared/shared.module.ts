import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterDescriptionComponent } from './chapter/chapter-description/chapter-description.component';
import { ChapterInputsComponent } from './chapter/chapter-inputs/chapter-inputs.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ChapterDescriptionComponent, ChapterInputsComponent],
    exports: [ChapterDescriptionComponent, ChapterInputsComponent]
})
export class SharedModule {}
