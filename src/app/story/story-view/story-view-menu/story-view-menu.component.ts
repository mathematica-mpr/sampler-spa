import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/core/models/chapter';
import { MenuService } from 'src/app/shared/menu/menu.service';

@Component({
    selector: 'app-story-view-menu',
    templateUrl: './story-view-menu.component.html',
    styleUrls: ['./story-view-menu.component.css']
})
export class StoryViewMenuComponent implements OnInit {
    constructor(public menuService: MenuService) {}

    ngOnInit(): void {
        this.menuService.addMenu();
    }

    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }

    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }

    onAddMenu(): void {
        this.menuService.addMenu();
    }
}
