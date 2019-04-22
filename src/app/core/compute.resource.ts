import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ComputeResource {
    lambda_regression = 'https://3bqo3rqk1g.execute-api.us-east-1.amazonaws.com/default/rare-app-reg/';

    constructor(private http: HttpClient) {}

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
        return new HttpHeaders().set('X-Api-Key', 'NgGDJR0YDB8efIcHCTcwwQzcax8kjE65CAYRZenh');
    }
}
