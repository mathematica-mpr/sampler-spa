import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ChapterElement, ChapterDescription } from '../../core/models/chapter';

export abstract class BaseDescription {
    @Input() config$: Observable<ChapterDescription>;
    config: ChapterDescription;
}
