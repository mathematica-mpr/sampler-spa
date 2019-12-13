import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../../core/models/chapter';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MenuResource {
    menuUrl = 'http://localhost:5000/api/menu';

    constructor(private http: HttpClient) {}

    getMenu(): Observable<Menu> {
        return this.http.get<Menu>(this.menuUrl);
    }
}
