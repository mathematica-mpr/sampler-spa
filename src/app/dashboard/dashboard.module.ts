import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ChapterDescriptionComponent } from '../shared/chapter/chapter-description/chapter-description.component';
import { ChapterInputsComponent } from '../shared/chapter/chapter-inputs/chapter-inputs.component';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [
        DashboardViewComponent,
        ChapterDescriptionComponent,
        ChapterInputsComponent
    ]
})
export class DashboardModule {}
