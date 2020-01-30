import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/menu.service';
import { GraphsService } from 'src/app/core/graphs.service';
import { SimulateParams } from 'src/app/core/models/simulate-params';

@Component({
    selector: 'app-story-view-menu',
    templateUrl: './story-view-menu.component.html',
    styleUrls: ['./story-view-menu.component.css']
})
export class StoryViewMenuComponent implements OnInit {
    constructor(public menuService: MenuService, private graphsService: GraphsService) {}

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

    onInputChange(params: SimulateParams) {
        this.graphsService.updateGraph(params);
        //updateGraph()
    }
}
