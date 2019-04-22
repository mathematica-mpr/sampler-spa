import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardGraphComponent } from './dashboard-view/dashboard-graph/dashboard-graph.component';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule],
    declarations: [DashboardViewComponent, DashboardGraphComponent]
})
export class DashboardModule {}
