import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BaseInput } from '../base-input';
import { MenuInputService } from '../../../core/menu-input.service';

@Component({
    selector: 'app-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent extends BaseInput implements OnInit {
    constructor(chapterInputService: MenuInputService) {
        super(chapterInputService);
    }

    ngOnInit() {}
}
