import { Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChapterInput } from '../../core/models/chapter';

export abstract class CompositeInput {
    @Input() config$: BehaviorSubject<ChapterInput>;
}
