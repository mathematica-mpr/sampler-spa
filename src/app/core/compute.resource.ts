import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ComputeResource {
    lambda_regression =
        'https://3bqo3rqk1g.execute-api.us-east-1.amazonaws.com/default/rare-app-reg/';

    constructor(private http: HttpClient) {}

    getResult(
        chapterName: string,
        params: number[]
    ): Observable<{ x: number; y: number }[]> {
        return new BehaviorSubject([
            { x: 1.1, y: 2.1 },
            { x: 0.5, y: 3 },
            { x: 1, y: 4 },
            { x: 1.5, y: 2 },
            { x: 2, y: 3 },
            { x: 4, y: 2 },
            { x: 5.5, y: 4 },
            { x: 6, y: 2 },
            { x: 6.5, y: 3 },
            { x: 7, y: 1 }
        ]).pipe(take(1));
    }

    getRegression(num: number) {
        const options = this.getOptions(num);
        return this.http.get(this.lambda_regression, options);
    }

    getOptions(params: number) {
        return {
            params: this.getParams(params),
            headers: this.getHeader()
        };
    }

    getParams(num: number) {
        return new HttpParams().set('randomNumber', num.toString());
    }

    getHeader() {
        return new HttpHeaders().set(
            'X-Api-Key',
            'NgGDJR0YDB8efIcHCTcwwQzcax8kjE65CAYRZenh'
        );
    }
}
