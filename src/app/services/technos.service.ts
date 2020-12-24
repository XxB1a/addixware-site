import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

import {HttpClient} from '@angular/common/http';

import {BehaviorSubject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TechnosService {

    private url = `${environment.api_url}/technos`;

    private _technos: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private readonly http: HttpClient) {
    }

    public getTechnos() {
        return this.http.get(this.url)
            .pipe(
                map((res) => {
                    this._technos.next(res);
                })
            );
    }

    public get technos(): BehaviorSubject<any> {
        return this._technos;
    }

}
