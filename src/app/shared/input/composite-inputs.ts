import { Input, Directive } from '@angular/core';
import { ChapterInput } from '../../core/models/chapter';

@Directive()
export abstract class CompositeInput {
    @Input() config: ChapterInput;
}
