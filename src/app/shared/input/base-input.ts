import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChapterInputService } from '../../core/chapter-input.service';
import { ChapterElement } from '../../core/models/chapter';

export class BaseInput {
    @Input() config$;
    config: ChapterElement;
    chapterInputForm: FormGroup;

    constructor(private chapterInputService: ChapterInputService) {
        this.chapterInputForm = this.chapterInputService.inputFormGroup;
    }
}
