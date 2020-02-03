import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './models/chapter';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable()
export class MenuResource {
    menuUrl = environment.baseUrl + '/menu';

    constructor(private http: HttpClient) {}

    getMenu(): Observable<Menu> {
        return this.http.get<Menu>(this.menuUrl);
    }
}
