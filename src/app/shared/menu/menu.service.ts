import { MenuResource } from './menu.resource';
import { Injectable } from '@angular/core';
import { Menu } from '../../core/models/chapter';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    menus: Menu[] = [];

    constructor(private menuResource: MenuResource) {}

    addMenu(): void {
        this.menuResource.getMenu().subscribe((menu: Menu) => {
            console.log(menu);
            this.menus.push(menu);
        });
    }

    removeMenu(guid: string): void {
        const index: number = this.menus.findIndex((menu: Menu) => menu.guid === guid);
        this.menus.splice(index, 1);
    }
}
