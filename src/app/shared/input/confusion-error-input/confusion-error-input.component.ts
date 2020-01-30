import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChapterInput } from '../../../core/models/chapter';
import { CompositeInput } from '../composite-inputs';

@Component({
    selector: 'app-confusion-error-input',
    templateUrl: './confusion-error-input.component.html',
    styleUrls: ['./confusion-error-input.component.css']
})
export class ConfusionErrorInputComponent extends CompositeInput {
    constructor() {
        super();
    }
}
