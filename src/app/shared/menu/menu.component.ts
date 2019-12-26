import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChapterItem } from 'src/app/core/models/chapter-item';
import { MenuInputService } from 'src/app/core/menu-input.service';
import { Menu } from 'src/app/core/models/chapter';
import { ChapterService } from 'src/app/core/chapter.service';
import { MenuService } from 'src/app/core/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [MenuInputService]
})
export class MenuComponent implements OnInit {
    @Input() menu: Menu;
    @Output() inputsEmitter = new EventEmitter();
    chapterItems: ChapterItem[];

    constructor(
        private chapterInputService: MenuInputService,
        public menuService: MenuService
    ) {}

    ngOnInit() {
        this.chapterInputService.setInputFormGroup(this.menu.inputs);
        this.chapterInputService.inputFormGroup.valueChanges.subscribe(inputs => {
            this.inputsEmitter.emit({ ...inputs, ...{ guid: this.menu.guid } });
        });
    }

    onRemoveMenu(guid: string): void {
        this.menuService.removeMenu(guid);
    }
}
