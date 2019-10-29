import { Component, OnInit, Input } from '@angular/core';
import { ChapterItem } from 'src/app/core/models/chapter-item';
import { ChapterInputService } from 'src/app/core/chapter-input.service';
import { ChapterInput } from 'src/app/core/models/chapter';
import { ChapterService } from 'src/app/core/chapter.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    @Input() inputs: ChapterInput[];
    inputItems: ChapterItem[];

    constructor(
        private chapterInputService: ChapterInputService,
        private chapterService: ChapterService
    ) {}

    ngOnInit() {
        this.chapterInputService.getInputFormGroup(this.inputs);
        this.inputItems = this.chapterService.getChapterItems(this.inputs);

        this.chapterInputService.inputFormGroup.valueChanges.subscribe(values =>
            console.log(values)
        );
    }

    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }

    /* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
}
