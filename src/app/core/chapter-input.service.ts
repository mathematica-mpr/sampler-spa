import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ChapterInput } from './models/chapter';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class ChapterInputService {
    inputFormGroup: FormGroup = new FormGroup({});

    constructor() {}

    getInputFormGroup(chapterInputs: ChapterInput[]): void {
        chapterInputs.forEach((chapterInput: ChapterInput) => {
            if (chapterInput.inputs) {
                this.getInputFormGroup(chapterInput.inputs);
            } else {
                this.addControl(chapterInput);
            }
        });
    }

    addControl(chapterInput: ChapterInput): void {
        this.inputFormGroup.addControl(
            chapterInput.name,
            this.getFormControl(chapterInput)
        );
    }

    getFormControl(chapterInput: ChapterInput): FormControl {
        let initVal = chapterInput.init ? chapterInput.init : null;
        return new FormControl(initVal);
    }
}
