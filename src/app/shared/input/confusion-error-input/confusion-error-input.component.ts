import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChapterInput } from '../../../core/models/chapter';
import { CompositeInput } from '../composite-inputs';

@Component({
    selector: 'app-confusion-error-input',
    templateUrl: './confusion-error-input.component.html',
    styleUrls: ['./confusion-error-input.component.css']
})
export class ConfusionErrorInputComponent extends CompositeInput implements OnInit {
    inputs: BehaviorSubject<ChapterInput>[] = [];
    instantiated = false;

    constructor() {
        super();
    }

    ngOnInit() {
        this.config$.subscribe(response => {
            if (!this.instantiated) {
                response.inputs.forEach(input => {
                    this.inputs.push(new BehaviorSubject(input));
                });
                this.instantiated = true;
            } else {
                response.inputs.forEach((input, i) => {
                    this.inputs[i].next(input);
                });
            }
        });
    }
}
