import { Component, OnInit, Input } from '@angular/core';
import { ChapterItem } from 'src/app/core/models/chapter-item';
import { ChapterInputService } from 'src/app/core/chapter-input.service';
import { ChapterInput, Menu } from 'src/app/core/models/chapter';
import { ChapterService } from 'src/app/core/chapter.service';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [ChapterInputService]
})
export class MenuComponent implements OnInit {
    @Input() menu: Menu;
    chapterItems: ChapterItem[];

    constructor(
        private chapterInputService: ChapterInputService,
        private chapterService: ChapterService,
        public menuService: MenuService
    ) {}

    ngOnInit() {
        this.chapterInputService.getInputFormGroup(this.menu.inputs);
        this.chapterItems = this.chapterService.getChapterItems(this.menu.inputs);
        this.chapterInputService.inputFormGroup.valueChanges.subscribe(values =>
            console.log(this.menu.guid, values)
        );
    }

    onRemoveMenu(guid: string): void {
        this.menuService.removeMenu(guid);
    }
}
