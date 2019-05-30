import { SectionDescriptionComponent } from '../shared/description/section-description/section-description.component';
import { NumberInputComponent } from '../shared/input/number-input/number-input.component';
import { LineGraphComponent } from '../shared/graph/line-graph/line-graph.component';
import { Type } from '@angular/core';
import { ConfusionErrorGraphComponent } from '../shared/graph/confusion-error-graph/confusion-error-graph.component';
import { ConfusionErrorInputComponent } from '../shared/input/confusion-error-input/confusion-error-input.component';
import { RangeInputComponent } from '../shared/input/range-input/range-input.component';

export const ChapterItemMap: { [key: string]: Type<any> } = {
    SectionDescription: SectionDescriptionComponent,
    NumberInput: NumberInputComponent,
    LineGraph: LineGraphComponent,
    ConfusionErrorGraph: ConfusionErrorGraphComponent,
    ConfusionErrorInput: ConfusionErrorInputComponent,
    RangeInput: RangeInputComponent
};
