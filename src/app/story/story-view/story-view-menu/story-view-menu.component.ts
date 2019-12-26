import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/menu.service';

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

    onInputChange(event) {
        //updateGraph()
    }
}
