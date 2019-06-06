import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[chapter-host]'
})
export class ChapterDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
        viewContainerRef.constructor.name === 'ViewContainerRef_';
    }
}
