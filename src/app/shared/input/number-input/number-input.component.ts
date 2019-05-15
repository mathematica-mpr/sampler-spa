import { Component, OnInit } from '@angular/core';
import { BaseInput } from '../base-input';

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent extends BaseInput implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
        console.log(this.config);
    }
}
