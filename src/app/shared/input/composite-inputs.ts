import { Input } from '@angular/core';
import { ChapterInput } from '../../core/models/chapter';

export abstract class CompositeInput {
    @Input() config: ChapterInput;
}
