import { Component, OnInit } from '@angular/core';
import { SimulateParams } from '../models/simulate-params';
import { MenuService } from '../menu.service';
import { GraphsService } from '../graphs.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(public menuService: MenuService, private graphsService: GraphsService) {}

    ngOnInit(): void {
        this.menuService.addMenu();
    }

    onAddMenu(): void {
        this.menuService.addMenu();
    }

    onInputChange(params: SimulateParams) {
        this.graphsService.updateGraph(params);
    }

    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('mySidenav').classList.add('extended');
        document.getElementById('main').style.marginLeft = '250px';
    }
}
