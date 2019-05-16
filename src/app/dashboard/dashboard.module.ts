import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ChapterItemComponent } from '../shared/chapter/chapter-item/chapter-item.component';
import { NumberInputComponent } from '../shared/input/number-input/number-input.component';
import { ChapterDirective } from '../shared/chapter/chapter.directive';
import { SectionDescriptionComponent } from '../shared/description/section-description/section-description.component';
import { LineGraphComponent } from '../shared/graph/line-graph/line-graph.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule, FormsModule],
    declarations: [
        DashboardViewComponent,
        ChapterItemComponent,
        NumberInputComponent,
        ChapterDirective,
        SectionDescriptionComponent,
        LineGraphComponent
    ],
    entryComponents: [
        NumberInputComponent,
        SectionDescriptionComponent,
        LineGraphComponent
    ]
})
export class DashboardModule {}
