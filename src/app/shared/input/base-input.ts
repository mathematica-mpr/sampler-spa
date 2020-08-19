import { Input, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuInputService } from '../../core/menu-input.service';
import { ChapterInput } from '../../core/models/chapter';
import { BehaviorSubject } from 'rxjs';

@Directive()
export class BaseInput {
    @Input() config: ChapterInput;
    chapterInputForm: FormGroup;

    constructor(private chapterInputService: MenuInputService) {
        this.chapterInputForm = this.chapterInputService.inputFormGroup;
    }
}
