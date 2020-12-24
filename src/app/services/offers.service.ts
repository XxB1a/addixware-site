import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

import {HttpClient} from '@angular/common/http';

import {BehaviorSubject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OffersService {

    private _limit: Number = 9;
    public get limit(): Number {
        return this._limit;
    }

    private _page: Number = 1;
    public set page(page) {
        this._page = page;
        this.getOffers().subscribe();
    }
    public get page(): Number {
        return this._page;
    }

    private _searchQuery: String = '';
    public set searchQuery(searchQuery) {
        this._searchQuery = searchQuery;
        this.page = 1;
    }
    public get searchQuery(): String {
        return this._searchQuery;
    }

    private url = `${environment.api_url}/offers`;

    private _offers: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private readonly http: HttpClient) {
    }

    public getOffers() {
        return this.http.get(this.url + '?limit=' + this.limit + '&page=' + this.page + '&searchQuery=' + this.searchQuery)
            .pipe(
                map((res) => {
                    this._offers.next(res);
                })
            );
    }

    public get offers(): BehaviorSubject<any> {
        return this._offers;
    }

}
