import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ChapterItemComponent } from '../shared/chapter/chapter-item/chapter-item.component';
import { NumberInputComponent } from '../shared/input/number-input/number-input.component';
import { ChapterDirective } from '../shared/chapter/chapter.directive';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [
        DashboardViewComponent,
        ChapterItemComponent,
        NumberInputComponent,
        ChapterDirective
    ],
    entryComponents: [NumberInputComponent]
})
export class DashboardModule {}
