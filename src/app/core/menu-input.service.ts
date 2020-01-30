import { Injectable } from '@angular/core';
import { ChapterInput } from './models/chapter';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class MenuInputService {
    inputFormGroup: FormGroup = new FormGroup({});

    constructor() {}

    setInputFormGroup(chapterInputs: ChapterInput[]): void {
        chapterInputs.forEach((chapterInput: ChapterInput) => {
            if (chapterInput.inputs) {
                this.setInputFormGroup(chapterInput.inputs);
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
        const initVal = chapterInput.value ? chapterInput.value : null;
        return new FormControl(initVal);
    }
}
