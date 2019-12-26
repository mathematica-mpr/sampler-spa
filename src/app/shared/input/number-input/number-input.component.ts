import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BaseInput } from '../base-input';
import { MenuInputService } from '../../../core/menu-input.service';

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent extends BaseInput {
    constructor(chapterInputService: MenuInputService) {
        super(chapterInputService);
    }
}
