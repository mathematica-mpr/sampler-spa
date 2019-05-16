import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChapterInputService } from '../../core/chapter-input.service';

export class BaseInput {
    @Input() config;
    chapterInputForm: FormGroup;

    constructor(private chapterInputService: ChapterInputService) {
        this.chapterInputForm = this.chapterInputService.inputFormGroup;
    }
}
