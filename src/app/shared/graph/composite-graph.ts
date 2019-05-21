import { CompositeChapterGraph } from '../../core/models/chapter';
import { Input } from '@angular/core';

export abstract class CompositeGraph {
    @Input() config: CompositeChapterGraph;
}
