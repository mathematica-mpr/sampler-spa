import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './models/chapter';
import { Injectable } from '@angular/core';
@Injectable()
export class MenuResource {
    menuUrl = 'https://g15m5ndpj5.execute-api.us-east-2.amazonaws.com/Prod/api/menu';

    constructor(private http: HttpClient) {}

    getMenu(): Observable<Menu> {
        return this.http.get<Menu>(this.menuUrl);
    }
}
