import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ComputeResource {
    simulation =
        'https://dyagyki1xk.execute-api.us-east-2.amazonaws.com/default/simulate';

    mockData = [
        { x: 0.1, y: 0.1 },
        { x: 0.5, y: 1 },
        { x: 1, y: 2 },
        { x: 1.5, y: 3 },
        { x: 2, y: 4 },
        { x: 4, y: 5 },
        { x: 5.5, y: 4 },
        { x: 6, y: 3 },
        { x: 6.5, y: 2 },
        { x: 7, y: 1 }
    ];

    constructor(private http: HttpClient) {}

    getChapterData(
        chapterName: string,
        params: any
    ): Observable<{ x: number; y: number }[]> {
        const options = this.getOptions(params);
        return this.http.get<{ x: number; y: number }[]>(this.simulation, options);
    }

    getOptions(params: any) {
        return {
            params: this.getParams(params),
            headers: null // this.getHeader()
        };
    }

    getParams(params: any) {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(
            key => (httpParams = httpParams.append(key, params[key].toString()))
        );
        return httpParams;
    }

    getHeader() {
        return new HttpHeaders().set(
            'X-Api-Key',
            'NgGDJR0YDB8efIcHCTcwwQzcax8kjE65CAYRZenh'
        );
    }
}
