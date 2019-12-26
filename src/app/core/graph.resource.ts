import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Graph } from './models/chapter';
import { SimulateParams } from './models/simulate-params';

@Injectable()
export class GraphResource {
    graphUrl = 'http://localhost:5000/api/graph';

    constructor(private http: HttpClient) {}

    getGraphs(params: string): Observable<Graph[]> {
        const options = this.getOptions({ guid: params });
        return this.http.get<Graph[]>(this.graphUrl, options);
    }

    updateGraph(params: SimulateParams): Observable<Graph> {
        const options = this.getOptions(params);
        return this.http.get<Graph>(this.graphUrl + '/update', options);
    }

    getOptions(params: any) {
        return {
            params: this.getParams(params)
        };
    }

    getParams(params: any) {
        let httpParams = new HttpParams();
        Object.keys(params).forEach(
            key => (httpParams = httpParams.append(key, params[key].toString()))
        );
        return httpParams;
    }
}
