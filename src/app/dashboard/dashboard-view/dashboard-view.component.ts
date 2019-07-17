import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    navigateTo(dest: string): void {
        switch (dest) {
            case 'story':
                this.router.navigate(['story']).then(res => console.log(res));
        }
    }
}
