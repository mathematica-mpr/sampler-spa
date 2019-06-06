import { Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ChapterElement } from '../../core/models/chapter';

export abstract class BaseDescription {
    @Input() config$: Observable<ChapterElement>;
    config: ChapterElement;
}
