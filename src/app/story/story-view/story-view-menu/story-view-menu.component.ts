import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/core/models/chapter';

@Component({
    selector: 'app-story-view-menu',
    templateUrl: './story-view-menu.component.html',
    styleUrls: ['./story-view-menu.component.css']
})
export class StoryViewMenuComponent {
    @Input() menus: Menu[];

    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }

    /* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
}
