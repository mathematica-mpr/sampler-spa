import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChapterInputService } from '../../core/chapter-input.service';
import { ChapterElement, ChapterInput } from '../../core/models/chapter';
import { BehaviorSubject } from 'rxjs';

export class BaseInput {
    @Input() config$: BehaviorSubject<ChapterInput>;
    config: ChapterElement;
    chapterInputForm: FormGroup;

    constructor(private chapterInputService: ChapterInputService) {
        this.chapterInputForm = this.chapterInputService.inputFormGroup;
    }
}
