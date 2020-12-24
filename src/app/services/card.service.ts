import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICard} from '../model/card';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    private cardInformation: ICard[] = [
        {
            icon: 'tv-2',
            state: 'primary',
            title: 'Développement logiciel',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium corporis culpa error esse excepturi in ipsa iure`,
            technos: ['C#', 'java']
        }, {
            icon: 'html5',
            state: 'success',
            title: 'Développement web',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium corporis culpa error esse excepturi in ipsa iure`,
            technos: ['Angular', 'React']
        }, {
            icon: 'mobile-button',
            state: 'warning',
            title: 'Développement mobile',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium corporis culpa error esse excepturi in ipsa iure`,
            technos: ['flutter', 'Kotlin', 'swift']
        }
    ];

    constructor(private readonly http: HttpClient) {
    }

    public get cards(): ICard[] {
        return this.cardInformation;
    }

}
