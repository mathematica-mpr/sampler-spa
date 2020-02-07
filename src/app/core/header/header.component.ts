import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('mySidenav').classList.add('extended');
        document.getElementById('main').style.marginLeft = '250px';
    }
}
