import { SharedModule } from '../shared/shared.module';
import { NumberInputComponent } from '../shared/input/number-input/number-input.component';
import { NgModule } from '@angular/core';
import { SectionDescriptionComponent } from '../shared/description/section-description/section-description.component';
import { LineGraphComponent } from '../shared/graph/line-graph/line-graph.component';
import { ConfusionErrorGraphComponent } from '../shared/graph/confusion-error-graph/confusion-error-graph.component';
import { ConfusionErrorInputComponent } from '../shared/input/confusion-error-input/confusion-error-input.component';
import { RangeInputComponent } from '../shared/input/range-input/range-input.component';
import { ModelPerformanceGraphComponent } from '../shared/graph/model-performance-graph/model-performance-graph.component';
import { StoryViewComponent } from './story-view/story-view.component';

@NgModule({
    imports: [SharedModule],
    declarations: [StoryViewComponent],
    entryComponents: [
        NumberInputComponent,
        SectionDescriptionComponent,
        LineGraphComponent,
        ConfusionErrorGraphComponent,
        ConfusionErrorInputComponent,
        RangeInputComponent,
        ModelPerformanceGraphComponent
    ]
})
export class StoryModule {}
