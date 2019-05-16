import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class BaseInput {
    @Input() config;
    chapterInputForm: FormGroup;

    constructor() {}
}
