import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ChapterInput } from './models/chapter';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class ChapterInputService {
    inputFormGroup: FormGroup;

    constructor() {}

    setInputFormGroup(chapterInputs: ChapterInput[]) {
        this.inputFormGroup = this.getInputFormGroup(chapterInputs);
    }

    getInputFormGroup(chapterInputs: ChapterInput[]): FormGroup {
        let formGroup = new FormGroup({});
        chapterInputs.forEach((chapterInput: ChapterInput) => {
            formGroup.addControl(chapterInput.name, this.getFormControl(chapterInput));
        });
        return formGroup;
    }

    getFormControl(chapterInput: ChapterInput): FormControl {
        // TODO: pass initial values
        return new FormControl();
    }
}
