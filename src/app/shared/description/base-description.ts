import { Input } from '@angular/core';
import { ChapterDescription } from '../../core/models/chapter';

export abstract class BaseDescription {
    @Input() config: ChapterDescription;
}
