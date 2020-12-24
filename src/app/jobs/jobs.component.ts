import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from '../services/card.service';
import {TechnosService} from '../services/technos.service';
import {ICard} from '../model/card';
import {FormControl} from '@angular/forms';
import {filter, map, tap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {ITechno} from '../model/techno';
import {IOffer} from '../model/offer';
import {OffersService} from '../services/offers.service';
import {IPagingMetadata} from '../model/paging-metadata';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {

    public technos: Observable<ITechno[]>;

    public metadata: IPagingMetadata = {};
    public offers: Observable<IOffer[]>;

    public cards: ICard[];
    public filteredCard: ICard[];
    public search: FormControl;
    public agence: FormControl;
    public post: FormControl;

    constructor(public readonly offersService: OffersService,
                private readonly technoServices: TechnosService) {
        this.search = new FormControl('');
        this.agence = new FormControl('');
        this.post = new FormControl('');
    }

    public setTechno(techno) {
        this.search.setValue(techno);
        this.filterInfo(techno);
    }

    public removeTerm() {
        this.search.setValue('');
    }

    ngOnInit() {
        this.technoServices.getTechnos().subscribe();
        this.technos = this.technoServices.technos
            .pipe(
                filter(res => !!res),
                map((res: any) => res.technos)
            );


        this.offersService.getOffers().subscribe();
        this.offers = this.offersService.offers
            .pipe(
                filter(res => !!res),
                tap((res: any) => {
                    this.metadata.item_count = res.metadata.item_count;
                }),
                map((res: any) => res.offers)
            );



        this.agence.setValue('Par lieu');
        this.post.setValue('Par poste');

        this.search.valueChanges
            .pipe(
                tap((res) => {
                    this.offersService.searchQuery = res;
                })
            ).subscribe();

        this.agence.valueChanges
            .pipe(
                map((res) => {
                    this.filterByPlace(res);
                })
            ).subscribe();

        this.post.valueChanges
            .pipe(
                map((res) => {
                    console.log(res);
                })
            ).subscribe();

    }

    ngOnDestroy(): void {

    }

    private filterInfo(term) {
        this.filteredCard = this.cards.filter((item) => {
            return item.technos.some((techno) => {
                return (techno.toLowerCase().includes(term.toLowerCase()));
            });
        });
    }

    private filterByPlace(term) {
        this.filteredCard = this.cards.filter((item) => {
            return item.agence.toLowerCase().includes(term.toLowerCase());
        });
    }

}
