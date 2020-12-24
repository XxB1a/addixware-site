import {Component, OnInit} from '@angular/core';
import {CardService} from '../services/card.service';
import {ICard} from '../model/card';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    public cards: ICard[];

    constructor(private readonly cardService: CardService) {
    }

    ngOnInit() {
        this.cards = this.cardService.cards;
    }

}
