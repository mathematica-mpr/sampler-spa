import { Input, Directive } from '@angular/core';
import { ChapterDescription } from '../../core/models/chapter';

@Directive()
export abstract class BaseDescription {
    @Input() config: ChapterDescription;
}
