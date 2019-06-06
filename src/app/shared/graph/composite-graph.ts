import { ChapterGraph } from '../../core/models/chapter';
import { Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export abstract class CompositeGraph {
    @Input() config$: BehaviorSubject<ChapterGraph>;
}
