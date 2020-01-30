import { MenuResource } from './menu.resource';
import { Injectable } from '@angular/core';
import { Menu } from './models/chapter';
import { GraphsService } from './graphs.service';

@Injectable()
export class MenuService {
    menus: Menu[] = [];

    constructor(
        private menuResource: MenuResource,
        private graphsService: GraphsService
    ) {}

    addMenu(): void {
        this.menuResource.getMenu().subscribe((menu: Menu) => {
            this.menus.push(menu);
            this.graphsService.addGraph(menu.guid);
        });
    }

    removeMenu(guid: string): void {
        const index: number = this.menus.findIndex((menu: Menu) => menu.guid === guid);
        this.menus.splice(index, 1);
        this.graphsService.removeGraph(guid);
    }
}
